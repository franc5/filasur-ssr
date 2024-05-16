type Props = {
  action(formData: FormData): void
  children: string
  className?: string
  data: [key: string, value: string]
}

export const ActionButton = ({ action, children, className, data }: Props) => (
  <form aria-label='action-button' action={action}>
    <input name={data[0]} type='hidden' value={data[1]} />
    <button className={className} type='submit'>
      {children}
    </button>
  </form>
)
