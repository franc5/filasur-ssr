import { render, screen, within } from '@testing-library/react'

import { Urls } from 'consts/urls'

import Strings from './es.json'

import { Navbar } from '.'

const testSearchBar = () => {
  const form = screen.getByRole('form', { name: 'search-form' })
  expect(form).toHaveAttribute('action', Urls.Search)
  expect(form).toHaveAttribute('method', 'get')
  expect(form.childNodes).toHaveLength(2)
  expect(form).toHaveFormValues({ searchParams: '' })

  within(form).getByPlaceholderText(Strings.search_placeholder)

  const button = within(form).getByRole('button', { name: Strings.search_submit_button })
  expect(button).toBeInstanceOf(HTMLInputElement)
  expect(button).toHaveAttribute('type', 'image')
}

it('renders successfully', () => {
  render(<Navbar />)

  testSearchBar()

  const signUpButton = screen.getByRole('link', { name: Strings.sign_up })
  expect(signUpButton).toHaveAttribute('href', Urls.Sign_Up)

  const signInButton = screen.getByRole('link', { name: Strings.sign_in })
  expect(signInButton).toHaveAttribute('href', Urls.Sign_In)
})
