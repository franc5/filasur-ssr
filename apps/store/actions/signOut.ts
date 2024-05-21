'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from 'utils/supabase/server'

import { Urls } from 'consts/urls'

// TODO consider handling possible error
export const signOut = async () => {
  const supabase = createClient()
  await supabase.auth.signOut()

  revalidatePath(Urls.Home, 'layout')
  redirect(Urls.Home)
}
