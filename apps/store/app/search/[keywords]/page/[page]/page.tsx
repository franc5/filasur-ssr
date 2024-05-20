import { Urls } from 'consts/urls'

import { ItemList } from 'ui/ItemList'

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

  const filter = keywords.map(k => `title.ilike.%${k}%`).join(',')
  const path = `${Urls.Search}/${params.keywords}/page`

  return <ItemList filter={filter} page={page} path={path} title={Strings.title} />
}
