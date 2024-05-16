import { Cookies } from 'consts/cookies'
import { Currencies } from 'consts/currencies'

import { setCurrency } from './setCurrency'

const setSpy = jest.fn()

jest.mock('next/headers', () => ({
  cookies: () => ({
    set: setSpy,
  })
}))

const testSetCurrency = (currency: Currencies) => {
  const data = new FormData()
  data.set(Cookies.Currency, currency)
  expect(setSpy).not.toHaveBeenCalled()
  setCurrency(data)
  expect(setSpy).toHaveBeenCalledWith(Cookies.Currency, currency)
}

afterEach(() => jest.clearAllMocks())

it('sets the currency cookie to ars', () => testSetCurrency(Currencies.Ars))

it('sets the currency cookie to usd', () => testSetCurrency(Currencies.Usd))

it('does not set any cookie if no currency is passed', () => {
  expect(setSpy).not.toHaveBeenCalled()
  setCurrency(new FormData())
  expect(setSpy).not.toHaveBeenCalled()
})
