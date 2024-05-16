import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

import { setCurrency } from 'actions/setCurrency'

import { Brand } from 'consts/brand'

import { Header } from 'ui/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: Brand.name,
};

type Props = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Header userName='Invitado' setCurrency={setCurrency} />
        {children}
      </body>
    </html>
  )
}
