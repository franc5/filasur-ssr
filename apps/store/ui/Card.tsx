type Props = {
  children: JSX.Element
  title: string
}

export const Card = ({ children, title }: Props) => (
  <section className='mb-2 border border-gray rounded-md'>
    <h3 className='py-1 px-2 font-semibold bg-gray-light rounded-t-md'>
      {title}
    </h3>
    <div className='p-2'>
      {children}
    </div>
  </section>
)
