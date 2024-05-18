import { getCategoryName } from './getCategoryName'

it('returns the category name for a valid category id', () => {
  expect(getCategoryName(0)).toBe('Argentina - Catálogo Completo')
  expect(getCategoryName(2)).toBe('Argentina - Clásicos')
  expect(getCategoryName(48)).toBe('Tarjetas Postales - Resto del Mundo')
})

it('returns undefined for a metacategory category id', () => {
  expect(getCategoryName(1000)).toBe(undefined)
  expect(getCategoryName(1001)).toBe(undefined)
  expect(getCategoryName(1002)).toBe(undefined)
})

it('returns undefined for a non-existing category id', () => {
  expect(getCategoryName(73)).toBe(undefined)
  expect(getCategoryName(88)).toBe(undefined)
  expect(getCategoryName(102)).toBe(undefined)
})
