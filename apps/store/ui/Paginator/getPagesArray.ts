export const getPagesArray = (currentPage: number, pagesCount: number, pagesShown: number) => {
  const pages = Array.from({ length: pagesShown }).map((_, i) => i + 1)

  if (pagesCount <= pagesShown) {
    return pages.slice(0, pagesCount)
  }

  const pagesAsideOfCurrent = Math.trunc(pagesShown / 2)

  switch(true) {
    case currentPage <= pagesAsideOfCurrent:
      return pages
    case currentPage > pagesCount - pagesAsideOfCurrent:
      return pages.map(p => pagesCount - pagesShown + p)
    default:
      return pages.map(p => currentPage - pagesAsideOfCurrent + p - 1)
  }
}
