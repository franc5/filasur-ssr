'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from 'utils/supabase/server'

import { Urls } from 'consts/urls'

export const signUp = async (data: FormData) => {
  const email = data.get('email')?.toString() || ''
  const password = data.get('password')?.toString() || ''

  const metadata = {
    name: data.get('name')?.toString() || '',
    lastname: data.get('lastname')?.toString() || '',
    country: data.get('country')?.toString() || '',
    state: data.get('state')?.toString() || '',
    city: data.get('city')?.toString() || '',
    zip_code: data.get('zip_code')?.toString() || '',
    address: data.get('address')?.toString() || '',
    phone: data.get('phone')?.toString() || '',
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  })

  if (error) {
    const redirectTo = `${Urls.Sign_Up}?error=${error.code || 500}`
    redirect(redirectTo)
  }

  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

  revalidatePath(Urls.Home, 'layout')
  redirect(signInError ? Urls.Sign_In : Urls.Home)
}
