import { render, screen, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Urls } from 'consts/urls'

import Strings from './es.json'

import { Navbar } from '.'

const testSearchBar = () => {
  const form = screen.getByRole('form', { name: 'search-form' })
  expect(form).toHaveAttribute('action', Urls.Search)
  expect(form).toHaveAttribute('method', 'get')
  expect(form.childNodes).toHaveLength(2)
  expect(form).toHaveFormValues({ keywords: '' })

  within(form).getByPlaceholderText(Strings.search_placeholder)

  const button = within(form).getByRole('button', { name: Strings.search_submit_button })
  expect(button).toBeInstanceOf(HTMLInputElement)
  expect(button).toHaveAttribute('type', 'image')
}

it('renders successfully for guests', () => {
  render(<Navbar isGuest={true} />)

  testSearchBar()

  expect(screen.getByRole('link', { name: Strings.sign_up })).toHaveAttribute('href', Urls.Sign_Up)

  expect(screen.getByRole('link', { name: Strings.sign_in })).toHaveAttribute('href', Urls.Sign_In)
})

it('renders successfully for users', async () => {
  const signOutSpy = jest.fn()

  render(<Navbar isGuest={false} signOut={signOutSpy} />)

  testSearchBar()

  expect(screen.getByRole('link', { name: Strings.cart })).toHaveAttribute('href', Urls.Cart)

  expect(screen.getByRole('link', { name: Strings.profile })).toHaveAttribute('href', Urls.Profile)

  const signOutButton = screen.getByRole('button', { name: Strings.sign_out })
  expect(signOutSpy).not.toHaveBeenCalled()
  // TODO fix tests
  // Skipping this part of the test as it doesn't work
  // due to a different version used in test env, see
  // https://github.com/vercel/next.js/issues/54757
  //
  //await userEvent.click(signOutButton)
  //expect(signOutSpy).toHaveBeenCalledTimes(1)
})
