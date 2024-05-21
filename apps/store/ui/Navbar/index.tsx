import Image from 'next/image'

import { Urls } from 'consts/urls'

import { ActionButton } from 'ui/ActionButton'
import { NavbarButton } from './NavbarButton'

import { NavbarButtonStyles } from './NavbarButton.styles'

import Cart_Icon from './img/cart.svg'
import Profile_Icon from './img/profile.svg'
import { Search_Base_64_Icon } from './img/search.base64'
import Sign_In_Icon from './img/sign-in.svg'
import Sign_Out_Icon from './img/sign-out.svg'
import Sign_Up_Icon from './img/sign-up.svg'

import Strings from './es.json'

type Props = {
  isGuest: true
  signOut?: () => void
} | {
  isGuest: false
  signOut(): void
}

export const Navbar = ({ isGuest, signOut }: Props) => (
  <nav className='h-14 my-2 pl-2 pr-1 flex items-center justify-between bg-blue border border-y-blue-dark'>
    <form
      action={Urls.Search}
      aria-label='search-form'
      className='flex items-center'
      method='get'
    >
      <input
        minLength={5}
        name='keywords'
        placeholder={Strings.search_placeholder}
        required
        type='search'
      />
      <input
        alt={Strings.search_submit_button}
        className='ml-2'
        src={Search_Base_64_Icon}
        type='image'
      />
    </form>

    <div className='flex'>
      {isGuest ? (
        <>
          <NavbarButton href={Urls.Sign_Up} icon={Sign_Up_Icon}>{Strings.sign_up}</NavbarButton>
          <NavbarButton href={Urls.Sign_In} icon={Sign_In_Icon}>{Strings.sign_in}</NavbarButton>
        </>
      ) : (
        <>
          <NavbarButton href={Urls.Cart} icon={Cart_Icon}>{Strings.cart}</NavbarButton>
          <NavbarButton href={Urls.Profile} icon={Profile_Icon}>{Strings.profile}</NavbarButton>
          <ActionButton action={signOut} className={NavbarButtonStyles}>
            <>
              <Image alt='' className='mr-1' src={Sign_Out_Icon} />
              {Strings.sign_out}
            </>
          </ActionButton>
        </>
      )}
    </div>
  </nav>
)
