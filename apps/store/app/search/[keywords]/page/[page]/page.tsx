import { Card } from 'ui/Card'

import Strings from './es.json'

type Props = {
  params: {
    page: string
    keywords: string
  }
}

export default function SearchPage({ params }: Props) {
  const page = +params.page
  const keywords = decodeURI(params.keywords).split(' ')

  return (
    <Card title={Strings.title}>
      <>
        <p>Placeholder search page</p>
        <p>Page: {page}</p>
        <p>Keywords: {keywords.join(', ')}</p>
      </>
    </Card>
  )
}
