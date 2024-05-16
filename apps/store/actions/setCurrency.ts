'use server'

import { cookies } from 'next/headers'

import { Cookies } from 'consts/cookies'

export const setCurrency = (data: FormData) => {
  const currency = data.get(Cookies.Currency)?.toString()

  if (currency) {
    cookies().set(Cookies.Currency, currency)
  }
}
