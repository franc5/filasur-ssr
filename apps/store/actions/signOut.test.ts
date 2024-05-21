import { signOut } from './signOut'

import { Urls } from 'consts/urls'

const redirectSpy = jest.fn()
const revalidatePathSpy = jest.fn()

jest.mock('next/navigation', () => ({
  redirect: (...args: any) => redirectSpy(...args),
}))

jest.mock('next/cache', () => ({
  revalidatePath: (...args: any) => revalidatePathSpy(...args),
}))

jest.mock('utils/supabase/server', () => ({
  createClient: () => ({
    auth: {
      signOut: () => Promise.resolve(),
    },
  }),
}))

it('revalidates the site and redirects to the home page when a user successfully signs outs', async () => {
  await signOut()
  expect(revalidatePathSpy).toHaveBeenCalledWith(Urls.Home, 'layout')
  expect(redirectSpy).toHaveBeenCalledWith(Urls.Home)
})
