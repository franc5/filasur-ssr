import { notFound } from 'next/navigation'

import { getCategoryName } from 'utils/categories/getCategoryName'

import { Card } from 'ui/Card'

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

  return (
    <Card title={categoryName}>
      <span>
        Placeholder - Page: {page}
      </span>
    </Card>
  )
}
