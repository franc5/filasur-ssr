import { Urls } from 'consts/urls'

import Strings from './es.json'

import { NavbarButton } from './NavbarButton'

import { Search_Base_64_Icon } from './img/search.base64'
import Sign_In_Icon from './img/sign-in.svg'
import Sign_Up_Icon from './img/sign-up.svg'

export const Navbar = () => (
  <nav className='h-14 my-2 pl-2 pr-1 flex items-center justify-between bg-blue border border-y-blue-dark'>
    <form
      action={Urls.Search}
      aria-label='search-form'
      className='flex items-center'
      method='get'
    >
      <input
        minLength={5}
        name='searchParams'
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
      <NavbarButton href={Urls.Sign_Up} icon={Sign_Up_Icon}>{Strings.sign_up}</NavbarButton>
      <NavbarButton href={Urls.Sign_In} icon={Sign_In_Icon}>{Strings.sign_in}</NavbarButton>
    </div>
  </nav>
)
