import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { Urls } from 'consts/urls'

type Props = {
  children: string
  href: Urls
  icon: StaticImageData
}

export const NavbarButton = ({ children, href, icon }: Props) => (
  <Link
    className='h-14 p-2 flex items-center text-white hover:bg-blue-light'
    href={href}
  >
    <Image alt='' className='mr-1' src={icon} />
    {children}
  </Link>
)
