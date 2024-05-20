import { Currencies } from 'consts/currencies'

import { formatCurrency } from 'utils/currencies/formatCurrency'
import { getSymbolsStr } from './getSymbolsStr'

import { Images } from './Images'

import type { Item } from 'types/item'

type Props = Item & {
  currency: Currencies
}

// TODO add buttons
export const ItemCard = ({ currency, description, imagesCount, id, priceArs, priceUsd, selfId, symbols, title }: Props) => {
  const symbolsStr = getSymbolsStr(symbols)

  return (
    <article className='mb-2 flex [&:not(:last-child)]:border-b-2'>
      <div className='w-75 mb-2 shrink-0'>
        <Images imagesCount={imagesCount} itemId={id} />
      </div>
      <div className='mx-4 grow'>
        <h3 className='mb-2 text-lg font-semibold'>
          {!!symbolsStr && (
            <span className='tracking-tighter'>
              {symbolsStr}
            </span>
          )}
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
          {(currency === Currencies.Usd)
            ? formatCurrency(priceUsd, Currencies.Usd)
            : formatCurrency(priceArs, Currencies.Ars)
          }
        </p>
      </div>
    </article>
  )
}
