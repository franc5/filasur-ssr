import { notFound } from 'next/navigation'

import { getCategoryName } from 'utils/categories/getCategoryName'

import { Urls } from 'consts/urls'

import { getCategoryFilter } from './getCategoryFilter'

import { ItemList } from 'ui/ItemList'

type Props = {
  params: {
    categoryId: string
    page: string // It is enforced to be a number greater than zero in the middleware
  }
}

export default function CategoryPage({ params }: Props) {
  const categoryId = +params.categoryId
  const page = +params.page

  const categoryName = getCategoryName(categoryId)

  if (!categoryName) {
    notFound()
  }

  const filter = getCategoryFilter(categoryId)
  const path = `${Urls.Category}/${categoryId}/page`

  return <ItemList filter={filter} page={page} path={path} title={categoryName} />
}
