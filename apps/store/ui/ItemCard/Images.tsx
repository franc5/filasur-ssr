import Image from 'next/image'

import PlaceholderImage from './placeholder.jpg'

type Props = {
  imagesCount: number
  itemId: number
}

// TODO get images from bucket
// TODO allow zoom
export const Images = ({ imagesCount, itemId }: Props) => (
  <>
    <Image alt='Image 1' src={PlaceholderImage} />
    {(imagesCount > 1) && (
      <div className='mt-1 grid grid-cols-3 gap-1'>
        {Array.from({ length: imagesCount - 1 }).map((_, i) => (
          <Image
            key={i}
            alt={`Image ${i + 2}`}
            src={PlaceholderImage}
          />
        ))}
      </div>
    )}
  </>
)
