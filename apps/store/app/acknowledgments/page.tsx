import { Card } from 'ui/Card'

import { Brand } from 'consts/brand'

import Strings from './es.json'

export default function AcknowledgmentsPage() {
  return (
    <Card title={Strings.title}>
      <>
        <p>
          {Strings.acknowledgments}
        </p>
        <br />
        <p className='font-bold text-right'>
          {Brand.owner}
        </p>
      </>
    </Card>
  )
}
