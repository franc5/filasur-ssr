import Link from 'next/link'

type Props = {
  active?: boolean
  children: string
  disabled?: boolean
  href: string
}

export const PageLink = ({ active = false, children, disabled = false, href }: Props) => {
  if (active) {
    return <span className='mr-1 p-1 text-white bg-blue border border-blue-dark cursor-default'>{children}</span>
  }

  if (disabled) {
    return <span className='mr-1 p-1 text-gray border border-gray cursor-default'>{children}</span>
  }

  return (
    <Link
      className='mr-1 p-1 text-blue border border-blue'
      href={href}
    >
      {children}
    </Link>
  )
}
