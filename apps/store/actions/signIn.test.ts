import { AuthError } from '@supabase/supabase-js'

import { signIn } from './signIn'

import { Errors } from 'consts/errors'
import { Urls } from 'consts/urls'

const redirectSpy = jest.fn()
const revalidatePathSpy = jest.fn()
let supabaseSignInError: AuthError | null = null

jest.mock('next/navigation', () => ({
  redirect: (...args: any) => redirectSpy(...args),
}))

jest.mock('next/cache', () => ({
  revalidatePath: (...args: any) => revalidatePathSpy(...args),
}))

jest.mock('utils/supabase/server', () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: () => ({
        error: supabaseSignInError,
      }),
    },
  }),
}))

const data = new FormData()
data.append('email', 'test@email.com')
data.append('password', '123456')

afterEach(() => jest.clearAllMocks())

it('revalidates the site and redirects to the home page when a user successfully signs in', async () => {
  supabaseSignInError = null
  await signIn(data)
  expect(revalidatePathSpy).toHaveBeenCalledWith(Urls.Home, 'layout')
  expect(redirectSpy).toHaveBeenCalledWith(Urls.Home)
})

// This test is skipped as the `redirect` mock fn does not prevent the rest of the code to be
// executed. There's an open discussion about this in NextJS official GH, I'll come back to this
// test later. See https://github.com/vercel/next.js/discussions/59061
xit('does not revalidate and redirects to the sign in page with a sign in error param', async () => {
  supabaseSignInError = new AuthError('')
  await signIn(data)
  expect(revalidatePathSpy).not.toHaveBeenCalled()
  expect(redirectSpy).toHaveBeenCalledWith(`${Urls.Sign_In}?error=${Errors.Invalid_Credentials}`)
})
