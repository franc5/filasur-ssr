import { cookies } from 'next/headers'

import { Cookies } from 'consts/cookies'
import { Currencies } from 'consts/currencies'

export const getCurrency = () => {
  if (cookies().get(Cookies.Currency)?.value === Currencies.Usd) {
    return Currencies.Usd
  }

  return Currencies.Ars
}
