import Link from 'next/link'

import { Urls } from 'consts/urls'

type Props = {
  className?: string
  id: number
  shortName: string
}

export const CategoryLink = ({ className, id, shortName }: Props) => (
  <Link
    className={className}
    href={`${Urls.Category}/${id}`}
  >
    {shortName}
  </Link>
)
