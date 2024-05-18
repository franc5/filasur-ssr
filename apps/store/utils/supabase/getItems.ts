import { createClient } from './server'

import { Brand } from 'consts/brand'
import { Errors } from 'consts/errors'
import { Table } from 'consts/db'

type DBItem = {
  description: string
  id: number
  imagesCount: number
  priceUsd: number
  selfId: string
  symbols: string
  title: string
}

export const getItems = async (categoryId: number, page: number) => {
  const supabase = createClient()

  const itemsFrom = (page - 1) * Brand.itemsPerPage

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
      .or(`category_1.eq.${categoryId}, category_2.eq.${categoryId}`)
      .order('displaying_order')
      .range(itemsFrom, itemsFrom + Brand.itemsPerPage - 1)
      .returns<DBItem[]>()
  ])

  const ars = +currencies.data?.ars

  if (currencies.error || items.error || currencies.data?.ars === null || isNaN(ars) || items.count === null) {
    return {
      error: new Error(Errors.Internal_Server_Error)
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
