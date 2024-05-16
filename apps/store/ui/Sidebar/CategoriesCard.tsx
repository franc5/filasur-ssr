import { Categories } from 'consts/categories.es'

import { Card } from 'ui/Card'
import { CategoryLink } from './CategoryLink'

import Strings from './CategoriesCard.es.json'

export const CategoriesCard = () => (
  <Card title={Strings.title}>
    <ul>
      {Categories.map(c => (
        <li key={c.id}>
          {!!c.subcategories?.length
            ? (
              <details>
                <summary className='cursor-pointer'>
                  {c.shortName}
                </summary>
                <ul>
                  {c.subcategories.map(s => (
                    <li className='ml-2' key={s.id}>
                      <CategoryLink {...s} />
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <CategoryLink {...c} />
            )
          }
        </li>
      ))}
    </ul>
  </Card>
)
