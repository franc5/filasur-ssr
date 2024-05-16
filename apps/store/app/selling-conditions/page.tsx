import { Card } from 'ui/Card'

import Strings from './es.json'

export default function SellingConditionsPage() {
  return (
    <Card title={Strings.title}>
      <ol className='list-decimal list-inside [&>li:not(:last-child)]:mb-4'>
        <li>{Strings.condition_1}</li>
        <li>{Strings.condition_2}</li>
        <li>{Strings.condition_3}</li>
        <li>{Strings.condition_4}</li>
        <li>{Strings.condition_5}</li>
        <li>{Strings.condition_6}</li>
        <li>{Strings.condition_7}</li>
        <li>{Strings.condition_8}</li>
        <li>{Strings.condition_9}</li>
      </ol>
    </Card>
  )
}
