import Image from 'next/image'

import { Brand } from 'consts/brand'

import { getItemsCount } from 'utils/supabase/getItemsCount'

import { Card } from 'ui/Card'

import Home_1 from './Home_1.png'
import Home_2 from './Home_2.png'
import Home_3 from './Home_3.jpg'

export default async function HomePage() {
  const itemsCount = await getItemsCount()

  return (
    <Card title='Bienvenidos ~ Welcome'>
      <div className='flex flex-col items-center'>
        <section className='mb-4 p-4 flex items-center border-b border-b-gray'>
          <Image alt='Home_1' src={Home_1} />
          <div className='ml-4'>
            <p className='mb-4'>
              {Brand.name} le da la bienvenida a nuestra opción online. Agradecemos su visita y le deseamos mucha suerte en su búsqueda.
            </p>
            <p>
              {Brand.name} welcomes you to our online option. We appreciate your visit and wish you the best experience in the site.
            </p>
          </div>
        </section>

        <section className='mb-4 p-4 flex items-center'>
          <div className='mr-4 text-center'>
            <p className='mb-4'>Miembro de SOCOFIRA</p>
            <p className='mb-4'>Sociedad de Comerciantes Filatelicos de la Republica Argentina</p>
            <p className='mb-4'>Miembro de IFSDA</p>
            <p>International Federation of Stamp Dealers Associations</p>
          </div>
          <Image alt='Home_2' src={Home_2} />
        </section>

        {!!itemsCount && (
          <p className='mb-4 text-xl font-semibold text-red-500'>
            En este momento tenemos {itemsCount} items en venta
          </p>
        )}

        <Image alt='Home_3' src={Home_3} />
      </div>
    </Card>
  )
}
