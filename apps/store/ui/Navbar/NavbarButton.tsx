import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { Urls } from 'consts/urls'

import { NavbarButtonStyles } from './NavbarButton.styles'

type Props = {
  children: string
  href: Urls
  icon: StaticImageData
}

export const NavbarButton = ({ children, href, icon }: Props) => (
  <Link className={NavbarButtonStyles} href={href}>
    <Image alt='' className='mr-1' src={icon} />
    {children}
  </Link>
)
