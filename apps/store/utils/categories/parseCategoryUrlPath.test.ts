import { Urls } from 'consts/urls'

import { parseCategoryUrlPath } from './parseCategoryUrlPath'

it('parses the category id and the page number from a valid url path', () => {
  const path = `${Urls.Category}/5/page/4`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: 5,
    page: 4,
  })
})

it('parses the category id from a url path with a page number which is less than 1', () => {
  const path = `${Urls.Category}/5/page/0`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: 5,
    page: undefined,
  })
})

it('parses the category id from a url path with invalid page number', () => {
  const path = `${Urls.Category}/5/page/invalid`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: 5,
    page: undefined,
  })
})

it('parses the category id of an incomplete url path without page number', () => {
  const path = `${Urls.Category}/5/page`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: 5,
    page: undefined,
  })
})

it('parses the category id of an incomplet url path without page segment', () => {
  const path = `${Urls.Category}/5`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: 5,
    page: undefined,
  })
})

it('cannot parse the category id nor the page number from an incomplete url path without these paramets', () => {
  const path = `${Urls.Category}`
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: undefined,
    page: undefined,
  })
})

it('cannot parse the category id nor the page number from a url with a different path', () => {
  const path = '/path/to'
  const result = parseCategoryUrlPath(path)
  expect(result).toMatchObject({
    categoryId: undefined,
    page: undefined,
  })
})
