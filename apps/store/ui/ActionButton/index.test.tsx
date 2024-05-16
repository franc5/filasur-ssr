import { render, screen, within } from '@testing-library/react'

import { ActionButton } from '.'

const actionSpy = jest.fn()
const buttonLabel = 'Click me!'
const data: [string, string] = ['test-key', 'test-value']

it('renders successfully', async () => {
  render(
    <ActionButton action={actionSpy} data={data}>
      {buttonLabel}
    </ActionButton>
  )

  const form = screen.getByRole('form', { name: 'action-button' })
  expect(form.childNodes).toHaveLength(2)
  expect(form).toHaveFormValues({ [data[0]]: data[1] })

  const input = within(form).getByDisplayValue(data[1])
  expect(input).toHaveProperty('hidden')

  within(form).getByRole('button', { name: buttonLabel })
  expect(actionSpy).not.toHaveBeenCalled()

  // TODO fix tests
  // Skipping this part of the test as it doesn't work
  // due to a different version used in test env, see
  // https://github.com/vercel/next.js/issues/54757
  //
  // await userEvent.click(button)
  // expect(actionSpy).toHaveBeenCalled()
})
