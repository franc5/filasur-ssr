import Image from 'next/image'
import Link from 'next/link'

import { Brand } from 'consts/brand'
import { Cookies } from 'consts/cookies'
import { Currencies } from 'consts/currencies'
import { Urls } from 'consts/urls'

import { ActionButton } from 'ui/ActionButton'

import Strings from './es.json'

import Logo from './Logo.png'

type Props = {
  setCurrency(formData: FormData): void
  userName: string
}

export const Header = ({ setCurrency, userName }: Props) => (
  <header className='m-1 flex justify-between'>
    <Link href={Urls.Home}>
      <Image alt={Brand.name} src={Logo} />
    </Link>

    <div className='p-1 flex flex-col justify-around items-center border'>
      <div className='flex'>
        <ActionButton action={setCurrency} className='mx-2' data={[Cookies.Currency, Currencies.Usd]}>
          {Strings.button_usd}
        </ActionButton>
        <ActionButton action={setCurrency} className='mx-2' data={[Cookies.Currency, Currencies.Ars]}>
          {Strings.button_ars}
        </ActionButton>
      </div>
      <p>
        {Strings.greetings} <strong>{userName}</strong>!
      </p>
    </div>
  </header>
)
