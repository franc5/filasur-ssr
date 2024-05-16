import Link from 'next/link'

import { Urls } from 'consts/urls'

import { Card } from 'ui/Card'

import Strings from './InformationCard.es.json'

export const InformationCard = () => (
  <Card title={Strings.title}>
    <ul>
      <li>
        <Link href={Urls.About}>{Strings.about}</Link>
      </li>
      <li>
        <Link href={Urls.Selling_Conditons}>{Strings.selling_conditions}</Link>
      </li>
      <li>
        <Link href={Urls.Acknowledgments}>{Strings.acknowledgments}</Link>
      </li>
    </ul>
  </Card>
)
