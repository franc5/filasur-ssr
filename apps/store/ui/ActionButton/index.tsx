type Props = {
  children: string | JSX.Element
  className?: string
} & ({
  action(formData: FormData): void
  data: [key: string, value: string]
} | {
  action(): void
  data?: undefined
})

export const ActionButton = ({ action, children, className, data }: Props) => (
  <form aria-label='action-button' action={action}>
    {!!data && <input name={data[0]} type='hidden' value={data[1]} />}
    <button className={className} type='submit'>
      {children}
    </button>
  </form>
)
