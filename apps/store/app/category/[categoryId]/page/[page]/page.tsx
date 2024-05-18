import { notFound, redirect } from 'next/navigation'

import { getCategoryName } from 'utils/categories/getCategoryName'

import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'

type Props = {
  params: {
    categoryId: string
    page: string
  }
}

export default async function CategoryPage({ params }: Props) {
  const categoryId = +params.categoryId
  const page = +params.page

  const categoryName = getCategoryName(categoryId)

  if (!categoryName) {
    notFound()
  }

  if (isNaN(page) || page < 1) {
    redirect(`${Urls.Category}/${categoryId}/page/1`)
  }

  return (
    <Card title={categoryName}>
      <span>
        Placeholder - Page: {page}
      </span>
    </Card>
  )
}
