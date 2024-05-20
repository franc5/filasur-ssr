import { createClient } from './server'

import { Brand } from 'consts/brand'
import { Errors } from 'consts/errors'
import { Table } from 'consts/db'

import { parseRangeNotSatisfiableError } from './parseRangeNotSatisfiableError'

import type { Item } from 'types/item'

type DBItem = Omit<Item, 'priceArs'>

export const getItems = async (categoryId: number, page: number) => {
  const supabase = createClient()

  const itemsFrom = (page - 1) * Brand.itemsPerPage

  const categoryFilter = (() => {
    switch(categoryId) {
      case 0:  // Argentina - Full catalog
        return `category_1.lte.33, category_2.lte.33`
      case 33: // Universals
        return `and(category_1.gte.34,category_1.lte.41), and(category_2.gte.34, category_2.lte.41)`
      case 43: // Postcard
        return `and(category_1.gte.43,category_1.lte.53), and(category_2.gte.43, category_2.lte.53)`
      default:
        return `category_1.eq.${categoryId}, category_2.eq.${categoryId}`
    }
  })()

  const [currencies, items] = await Promise.all([
    supabase
      .from(Table.Currencies)
      .select('ars')
      .limit(1)
      .order('id', { ascending: false })
      .maybeSingle(),
    supabase
      .from(Table.Items)
      .select('id, selfId:self_id, symbols, title, description, priceUsd:price, imagesCount:images_count', { count: 'exact' })
      .gt('stock', 0)
      .or(categoryFilter)
      .order('displaying_order')
      .range(itemsFrom, itemsFrom + Brand.itemsPerPage - 1)
      .returns<DBItem[]>()
  ])

  const ars = +currencies.data?.ars

  if (currencies.error || items.error || currencies.data?.ars === null || isNaN(ars) || items.count === null) {
    const rowCount = parseRangeNotSatisfiableError(items.error?.details || '')

    if (rowCount !== undefined) {
      return {
        error: {
          type: Errors.Page_Does_Not_Exists as Errors.Page_Does_Not_Exists,
          lastPage: Math.trunc(rowCount / Brand.itemsPerPage),
        }
      }
    }

    return {
      error: {
        type: Errors.Internal_Server_Error as Errors.Internal_Server_Error,
      }
    }
  }

  return {
    items: items.data.map(item => ({
      ...item,
      priceArs: item.priceUsd * ars,
    })),
    itemsCount: items.count,
  }
}
