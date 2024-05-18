import { Currencies } from 'consts/currencies'

import { getCurrency } from './getCurrency'

let currencyCookie: undefined | { value: string }

jest.mock('next/headers', () => ({
  cookies: () => ({
    get: () => currencyCookie,
  })
}))

afterEach(() => jest.clearAllMocks())

it('returns ars when no cookie', () => expect(getCurrency()).toBe(Currencies.Ars))

it('returns usd when the cookie is set to usd', () => {
  currencyCookie = { value: Currencies.Usd }
  expect(getCurrency()).toBe(Currencies.Usd)
})

it('returns ars when the cookie is set to ars', () => {
  currencyCookie = { value: Currencies.Ars }
  expect(getCurrency()).toBe(Currencies.Ars)
})
