import { Currencies } from 'consts/currencies'

const formatArs = new Intl.NumberFormat('es').format

const formatUsd = new Intl.NumberFormat('en').format

export const formatCurrency = (amount: number, currency: Currencies) => {
  if (currency === Currencies.Usd) {
    return `U$S ${formatUsd(amount)}`
  }

  return `$ ${formatArs(amount)}`
}
