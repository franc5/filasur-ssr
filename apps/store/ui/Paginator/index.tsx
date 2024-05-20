import { getPagesArray } from './getPagesArray'

import { PageLink } from './PageLink'

type Props = {
  currentPage: number
  pagesCount: number
  pagesShown: number
  pathTo: string
}

export const Paginator = ({ currentPage, pagesCount, pagesShown, pathTo }: Props) => {
  const pagesArray = getPagesArray(currentPage, pagesCount, pagesShown)

  return (
    <div>
      <PageLink disabled={currentPage === 1} href={`${pathTo}/1`}>
        &laquo;
      </PageLink>
      <PageLink disabled={currentPage === 1} href={`${pathTo}/${currentPage - 1}`}>
        &lsaquo;
      </PageLink>
      {pagesArray.map(page => (
        <PageLink key={page} active={page === currentPage} href={`${pathTo}/${page}`}>
          {page.toString()}
        </PageLink>
      ))}
      <PageLink disabled={currentPage === pagesCount} href={`${pathTo}/${currentPage + 1}`}>
        &rsaquo;
      </PageLink>
      <PageLink disabled={currentPage === pagesCount} href={`${pathTo}/${pagesCount}`}>
        &raquo;
      </PageLink>
    </div>
  )
}
