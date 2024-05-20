import { redirect } from 'next/navigation'

import { getCurrency } from 'utils/currencies/getCurrency'
import { getItems } from 'utils/supabase/getItems'

import { Brand } from 'consts/brand'
import { Errors } from 'consts/errors'

import { Card } from 'ui/Card'
import { ItemCard } from 'ui/ItemCard'
import { Paginator } from 'ui/Paginator'

import Strings from './es.json'

type Props = {
  filter: string
  page: number
  path: string
  title: string
}

export const ItemList = async ({ filter, page, path, title }: Props) => {
  const { error, items, itemsCount } = await getItems(filter, page)

  if (error) {
    if (error.type === Errors.Page_Does_Not_Exists) {
      redirect(`${path}/${error.lastPage}`)
    }

    throw new Error(error.type)
  }

  const currency = getCurrency()
  const pagesCount = Math.ceil(itemsCount / Brand.itemsPerPage)

  const paginator = (pagesCount > 1)
    ? <Paginator currentPage={page} pagesCount={pagesCount} pagesShown={Brand.paginatorSize} pathTo={path} />
    : undefined

  return (
    <Card title={title}>
      <>
        <div className='mb-4 flex justify-between'>
          <span className='font-bold text-blue-dark'>
            {itemsCount} {itemsCount === 1 ? Strings.item_found : Strings.items_found}
          </span>
          {paginator}
        </div>

        {items.map(item => <ItemCard key={item.id} currency={currency} {...item} />)}

        {!!paginator && (
          <div className='mt-4 flex justify-end'>
            {paginator}
          </div>
        )}
      </>
    </Card>
  )
}

