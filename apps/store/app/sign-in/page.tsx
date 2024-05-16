import Link from 'next/link'

import { signIn } from 'actions/signIn'

import { Errors } from 'consts/errors'
import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'
import { Input } from 'ui/Input'

import Strings from './es.json'

type Props = {
  searchParams: {
    error?: string
  }
}

export default function SignInPage({ searchParams }: Props) {
  const showInvalidCredentialsError = searchParams.error === Errors.Invalid_Credentials

  return (
    <Card title={Strings.title}>
      <div className='flex flex-col items-center'>
        <p className='mb-2'>
          {Strings.instructions}
        </p>

        <form
          action={signIn}
          aria-label='sign-in-form'
          className='w-100 mb-4 flex flex-col'
        >
          <Input
            autoFocus
            label={Strings.email}
            name='email'
            required
            type='email'
          />

          <Input
            label={Strings.password}
            minLength={6}
            name='password'
            required
            type='password'
          />

          {showInvalidCredentialsError && (
            <p className='text-center text-red-500'>
              {Strings.invalid_credentials_error}
            </p>
          )}

          <button
            className='p-2 self-end bg-blue text-white hover:bg-blue-light'
            type='submit'
          >
            {Strings.sign_in}
          </button>
        </form>

        <p className='mb-2'>
          {Strings.sign_up_invite}
          {' '}
          <Link className='text-blue' href={Urls.Sign_Up}>{Strings.here}</Link>
        </p>

        <p>
          {Strings.recover_password_invite}
          {' '}
          <Link className='text-blue' href={Urls.Recover_Password}>{Strings.here}</Link>
        </p>
      </div>
    </Card>
  )
}
