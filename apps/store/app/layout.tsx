import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

import { getUser } from 'utils/supabase/getUser'

import { setCurrency } from 'actions/setCurrency'
import { signOut } from 'actions/signOut'

import { Brand } from 'consts/brand'

import { CategoriesCard } from 'ui/Sidebar/CategoriesCard'
import { Footer } from 'ui/Footer'
import { Header } from 'ui/Header'
import { InformationCard } from 'ui/Sidebar/InformationCard'
import { Navbar } from 'ui/Navbar'
import { SymbolsCard } from 'ui/Sidebar/SymbolsCard'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: Brand.name,
};

type Props = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: Props) {
  const { user } = await getUser()
  const userName = user?.user_metadata?.name || 'Invitado'

  return (
    <html lang='es'>
      <body className={inter.className}>
        <Header userName={userName} setCurrency={setCurrency} />
        <Navbar isGuest={!user} signOut={signOut} />
        <div className='mx-2 flex'>
          <aside className='w-70 mr-2 shrink-0'>
            <InformationCard />
            <SymbolsCard />
            <CategoriesCard />
          </aside>

          <main className='grow'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
