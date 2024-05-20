import { Currencies } from 'consts/currencies'

import { formatCurrency } from './formatCurrency'

it('formats ARS correctly', () => {
  expect(formatCurrency(20, Currencies.Ars)).toBe('$ 20')
})

it('formats USD correctly', () => {
  expect(formatCurrency(20, Currencies.Usd)).toBe('U$S 20')
})
