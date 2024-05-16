'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from 'utils/supabase/server'

import { Errors } from 'consts/errors'
import { Urls } from 'consts/urls'

export const signIn = async (data: FormData) => {
  const email = data.get('email')?.toString() || ''
  const password = data.get('password')?.toString() || ''

  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    const redirectTo = `${Urls.Sign_In}?error=${Errors.Invalid_Credentials}`
    redirect(redirectTo)
  }

  revalidatePath(Urls.Home, 'layout')
  redirect(Urls.Home)
}
