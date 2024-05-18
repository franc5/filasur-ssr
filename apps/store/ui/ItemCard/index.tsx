import { Currencies } from 'consts/currencies'

import { Images } from './Images'

import type { Item } from 'types/item'

type Props = Item & {
  currency: Currencies
}

// TODO show symbols
// TODO add buttons
// TODO format currencies
export const ItemCard = ({ currency, description, imagesCount, id, priceArs, priceUsd, selfId, title }: Props) => (
  <article className='mb-2 flex [&:not(:last-child)]:border-b-2'>
    <div className='w-75 mb-2 shrink-0'>
      <Images imagesCount={imagesCount} itemId={id} />
    </div>
    <div className='mx-4 grow'>
      <h3 className='mb-2 text-lg font-semibold'>
        {title}
      </h3>
      <p className='text-sm whitespace-pre-line'>
        {description}
      </p>
    </div>
    <div className='shrink-0 flex flex-col items-center'>
      <p className='mb-4 p-1 font-semibold text-blue border border-blue'>
        {selfId}
      </p>
      <p className='text-xl font-semibold text-red-700'>
        $ {currency === Currencies.Usd ? priceUsd : priceArs}
      </p>
    </div>
  </article>
)
