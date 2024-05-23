// Country list taken from https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d#file-countries-json
import Link from 'next/link'

import { signUp } from 'actions/signUp'

import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'
import { Input } from 'ui/Input'

import Countries from './countries.json'
import Strings from './es.json'

type Props = {
  searchParams: {
    error?: string
  }
}

export default function SignUpPage({ searchParams }: Props) {
  const showUserAlreadyExistsError = searchParams.error === 'user_already_exists'
  const showGenericError = !!searchParams.error?.length

  return (
    <Card title={Strings.title}>
      <form
        action={signUp}
        aria-label='sign-up-form'
        className='m-auto w-250 grid grid-cols-2 gap-2'
      >
        <Input label={Strings.name} name='name' required />
        <Input label={Strings.lastname} name='lastname' required />

        <Input label={Strings.email} name='email' required type='email' />
        <Input label={Strings.password} minLength={6} name='password' required type='password' />

        <label className='mb-2 flex flex-col'>
          {Strings.country}
          <select
            defaultValue='AR'
            name='country'
          >
            {Countries.map(({ code_2, emoji, name_es }) => (
              <option key={code_2} value={code_2}>
                {emoji} {name_es}
              </option>
            ))}
          </select>
        </label>
        <Input label={Strings.state} name='state' required />

        <Input label={Strings.city} name='city' required />
        <Input label={Strings.zip_code} name='zip_code' required />

        <Input label={Strings.address} name='address' required />
        <Input label={Strings.phone} name='phone' />

        <label className='col-span-2'>
          <input className='mr-1' required type='checkbox' />
          {Strings.tos_message_part_1}
          {' '}
          <Link className='text-blue underline' href={Urls.Selling_Conditons} target='_blank'>
            {Strings.tos_message_part_2}
          </Link>
          {' '}
          {Strings.tos_message_part_3}
        </label>

        {showUserAlreadyExistsError && (
          <div className='col-span-2 text-center'>
            <p className='text-red-500'>
              {Strings.user_already_exists_error}
            </p>
            <p>
              {Strings.recover_password_invite}
              {' '}
              <Link className='text-blue' href={Urls.Recover_Password}>{Strings.here}</Link>
            </p>
          </div>
        )}

        {showGenericError && (
          <div className='col-span-2 text-center'>
            <p className='text-red-500'>
              {Strings.generic_error}
            </p>
          </div>
        )}

        <div className='col-span-2 m-auto mr-0'>
          <button className='p-2 bg-blue text-white hover:bg-blue-light' type='submit'>
            {Strings.sign_up}
          </button>
        </div>
      </form>
    </Card>
  )
}
