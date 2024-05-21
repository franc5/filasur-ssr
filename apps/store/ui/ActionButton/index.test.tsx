import { render, screen, within } from '@testing-library/react'

import { ActionButton } from '.'

const actionSpy = jest.fn()
const buttonLabel = 'Click me!'

it('renders successfully with hidden data', async () => {
  const data: [string, string] = ['test-key', 'test-value']

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

it('renders successfully without hidden data', async () => {
  render(
    <ActionButton action={actionSpy}>
      {buttonLabel}
    </ActionButton>
  )

  const form = screen.getByRole('form', { name: 'action-button' })
  expect(form.childNodes).toHaveLength(1)

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
