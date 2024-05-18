import { Urls } from 'consts/urls'

const regEx = new RegExp(String.raw`^(?:${Urls.Category}\/)(?<categoryId>\d+)(?:\/page\/)?(?<page>\d+)?`)

export const parseCategoryUrlPath = (path: string) => {
  const matches = path.match(regEx)

  const categoryId = matches?.groups?.categoryId
  const page = matches?.groups?.page

  return {
    categoryId: !!categoryId ? +categoryId : undefined,
    page: (!!page && +page > 0) ? +page : undefined,
  }
}
