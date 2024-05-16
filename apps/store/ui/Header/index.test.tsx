import { render, screen, within } from '@testing-library/react'

import { Brand } from 'consts/brand'
import { Urls } from 'consts/urls'

import Strings from './es.json'

import { Header } from '.'

const setCurrencySpy = jest.fn()
const userName = 'Alice'

it('renders successfully', () => {
  render(<Header setCurrency={setCurrencySpy} userName={userName} />)

  const logo = screen.getByRole('img', { name: Brand.name })
  const logoParent = logo.parentNode
  expect(logoParent).toBeInstanceOf(HTMLAnchorElement)
  expect(logoParent).toHaveAttribute('href', Urls.Home)

  // TODO test currency buttons
  // See https://github.com/vercel/next.js/issues/54757

  const greetings = screen.getByText(Strings.greetings, { exact: false })
  within(greetings).getByText(userName)
})
