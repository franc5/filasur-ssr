import Image from 'next/image'
import Link from 'next/link'

import { Brand } from 'consts/brand'

import Strings from './es.json'

import AfipLogo from './afip.gif'

export const Footer = () => (
  <footer className='p-2 flex justify-between items-center border-t border-gray'>
    <div />
    <div className='text-center'>
      <p>&copy; {Brand.name}</p>
      <p>2012 - {(new Date()).getFullYear()} - {Strings.all_rights_reserved}</p>
    </div>
    <Link href='http://qr.afip.gob.ar/?qr=Rb8WLKIK5nVNoPZskyu9bg,,' target='_blank'>
      <Image alt='AFIP' src={AfipLogo} />
    </Link>
  </footer>
)
