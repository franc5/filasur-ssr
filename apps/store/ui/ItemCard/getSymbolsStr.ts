import Symbols from 'consts/symbols.json'

export const getSymbolsStr = (symbols: string) => {
  if (symbols === '00000000000000000000000000000000') {
    return undefined
  }

  return symbols
    .split('')
    .reduce((acc, bit, i) => {
      if (bit !== '1') {
        return acc
      }

      return !acc.length
        ? Symbols[i].symbol
        : `${acc} . ${Symbols[i].symbol}`
    }, '')
    .concat(' . ')
}
