import { notFound, redirect } from 'next/navigation'

import { getCategoryName } from 'utils/categories/getCategoryName'
import { getCurrency } from 'utils/currencies/getCurrency'
import { getItems } from 'utils/supabase/getItems'

import { Brand } from 'consts/brand'
import { Errors } from 'consts/errors'
import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'
import { ItemCard } from 'ui/ItemCard'
import { Paginator } from 'ui/Paginator'

import Strings from './es.json'

type Props = {
  params: {
    categoryId: string
    page: string // It is enforced to be a number greater than zero in the middleware
  }
}

export default async function CategoryPage({ params }: Props) {
  const categoryId = +params.categoryId
  const page = +params.page

  const categoryName = getCategoryName(categoryId)

  if (!categoryName) {
    notFound()
  }

  const { items, itemsCount, error } = await getItems(categoryId, page)

  if (error) {
    if (error.type === Errors.Page_Does_Not_Exists) {
      redirect(`${Urls.Category}/${categoryId}/page/${error.lastPage}`)
    }

    throw new Error(error.type)
  }

  const currency = getCurrency()
  const pagesCount = Math.ceil(itemsCount / Brand.itemsPerPage)

  const paginator = (pagesCount > 1)
    ? <Paginator currentPage={page} pagesCount={pagesCount} pagesShown={Brand.paginatorSize} pathTo={`${Urls.Category}/${categoryId}/page/`} />
    : undefined

  return (
    <Card title={categoryName}>
      <>
        <div className='mb-4 flex justify-between'>
          <span className='font-bold text-blue-dark'>
            {itemsCount} {Strings.items_in_this_section}
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
