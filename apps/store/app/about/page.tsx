import { Card } from 'ui/Card'

import { Brand } from 'consts/brand'

import Strings from './es.json'

export default function AboutPage() {
  return (
    <Card title={Strings.title}>
      <>
        <p>
          {Strings.paragraph_1}
        </p>
        <br />
        <p>
          {Strings.paragraph_2}
        </p>
        <br />
        <p>
          {Strings.paragraph_3}
        </p>
        <br />
        <p className='font-bold text-right'>
          {Brand.owner}
        </p>
      </>
    </Card>
  )
}
