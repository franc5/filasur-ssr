import Link from 'next/link'

import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'

import Strings from './SymbolsCard.es.json'

export const SymbolsCard = () => (
  <Card title={Strings.title}>
    <ul>
      <li>
        <Link href={Urls.Symbols}>{Strings.symbols_and_abbreviations}</Link>
      </li>
    </ul>
  </Card>
)

