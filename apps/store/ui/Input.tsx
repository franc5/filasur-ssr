type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  label: string
}

export const Input = ({ label, ...inputProps }: Props) => (
  <label className='mb-2 flex flex-col'>
    {label}
    <input {...inputProps} />
  </label>
)
