import { render, screen, within } from '@testing-library/react'

import { Errors } from 'consts/errors'
import { Urls } from 'consts/urls'

import SignInPage from './page'

import Strings from './es.json'

const testSignInForm = (withErrorMessage: boolean) => {
  const form = screen.getByRole('form', { name: 'sign-in-form' })
  expect(form).toHaveFormValues({ email: '', password: '' })
  expect(form.childNodes).toHaveLength(withErrorMessage ? 4 : 3)

  const email = within(form).getByRole('textbox', { name: Strings.email })
  expect(email).toHaveFocus()
  expect(email).toBeRequired()
  expect(email).toHaveAttribute('type', 'email')

  const password = within(form).getByLabelText(Strings.password)
  expect(password).toHaveAttribute('minLength', '6')
  expect(password).toBeRequired()
  expect(password).toHaveAttribute('type', 'password')

  if (withErrorMessage) {
    within(form).getByText(Strings.invalid_credentials_error)
  } else {
    expect(within(form).queryByText(Strings.invalid_credentials_error)).not.toBeInTheDocument()
  }

  const button = within(form).getByRole('button', { name: Strings.sign_in })
  expect(button).toHaveAttribute('type', 'submit')
}

const testSignUpLink = () => {
  const message = screen.getByText(Strings.sign_up_invite)
  const link = within(message).getByRole('link')
  expect(link).toHaveAttribute('href', Urls.Sign_Up)
}

const testRecoverPasswordLink = () => {
  const message = screen.getByText(Strings.recover_password_invite)
  const link = within(message).getByRole('link')
  expect(link).toHaveAttribute('href', Urls.Recover_Password)
}

it('renders a functional sign in form', () => {
  render(<SignInPage searchParams={{}} />)

  testSignInForm(false)
  testSignUpLink()
  testRecoverPasswordLink()
})

it('renders a functional sign in form with an error message when it is passed in the url', () => {
  render(<SignInPage searchParams={{ error: Errors.Invalid_Credentials }} />)

  testSignInForm(true)
  testSignUpLink()
  testRecoverPasswordLink()
})
