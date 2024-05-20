const SymbolBits = [
  '✳✳✳', // Mint
  '⊚',   // Usado
  '⊞',   // Cuadrito
  '✳✳',  //Nuevo con bisagra
  '✳',   // Nuevo sin goma
  '🖂',   // Sobre
  'OP',
  'PDE',
  'ISG',
  'Frag',
  'Mu',
  'C',
  'En',
  'EP',
  'Viñ',
  'BL./HB',
  'SO',
  'TP',
  '(Fso)',
  'LD',
  'Def.',
  'Mat.',
  'S/C',
  's.c.',
  'BH',
  'EH',
  'C.V.',
  'Fil.',
  'PO',
  'PP',
  'Reim',
  'Perf',
]

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

      if (acc === '') {
        return SymbolBits[i]
      }

      return `${acc} . ${SymbolBits[i]}`
    }, '')
    .concat(' . ')
}
