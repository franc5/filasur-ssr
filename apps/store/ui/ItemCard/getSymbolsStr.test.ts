import { getSymbolsStr } from './getSymbolsStr'

it('returns undefined if no symbols', () => {
  expect(getSymbolsStr('00000000000000000000000000000000')).toBe(undefined)
})

it('returns the corresponding symbols strings', () => {
  expect(getSymbolsStr('10000000000000000000000000000000')).toBe('✳✳✳ . ')
  expect(getSymbolsStr('10100000000000000000000000000000')).toBe('✳✳✳ . ⊞ . ')
  expect(getSymbolsStr('00000010001000100001000000000000')).toBe('OP . Mu . Viñ . LD . ')
})
