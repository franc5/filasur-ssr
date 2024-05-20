import { render, screen } from '@testing-library/react'

import { Paginator } from '.'

const pathTo = '/path/to/page'

const First = '«'
const Prev = '‹'
const Next = '›'
const Last = '»'

const renderPaginator = (currentPage: number, pagesCount: number) => render(
  <Paginator currentPage={currentPage} pagesCount={pagesCount} pagesShown={5} pathTo={pathTo} />
)

const testFirstAndPrevLinks = (currentPage: number) => {
  if (currentPage === 1) {
    expect(screen.getByText(First)).toBeInstanceOf(HTMLSpanElement)
    expect(screen.getByText(Prev)).toBeInstanceOf(HTMLSpanElement)
  } else {
    expect(screen.getByRole('link', { name: First })).toHaveAttribute('href', `${pathTo}/1`)
    expect(screen.getByRole('link', { name: Prev })).toHaveAttribute('href', `${pathTo}/${currentPage - 1}`)
  }
}

const testNextAndLastLinks = (currentPage: number, lastPage: number) => {
  if (currentPage === lastPage) {
    expect(screen.getByText(Next)).toBeInstanceOf(HTMLSpanElement)
    expect(screen.getByText(Last)).toBeInstanceOf(HTMLSpanElement)
  } else {
    expect(screen.getByRole('link', { name: Next })).toHaveAttribute('href', `${pathTo}/${currentPage + 1}`)
    expect(screen.getByRole('link', { name: Last })).toHaveAttribute('href', `${pathTo}/${lastPage}`)
  }
}

it('renders correctly 2-pages paginator in page 1', () => {
  renderPaginator(1, 2)

  expect(screen.getAllByRole('link')).toHaveLength(3)
  testFirstAndPrevLinks(1)
  expect(screen.getByText('1')).toBeInstanceOf(HTMLSpanElement)
  expect(screen.getByRole('link', { name: '2' })).toHaveAttribute('href', `${pathTo}/2`)
  testNextAndLastLinks(1, 2)
})

it('renders correctly 2-pages paginator in page 2', () => {
  renderPaginator(2, 2)

  expect(screen.getAllByRole('link')).toHaveLength(3)
  testFirstAndPrevLinks(2)
  expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('href', `${pathTo}/1`)
  expect(screen.getByText('2')).toBeInstanceOf(HTMLSpanElement)
  testNextAndLastLinks(2, 2)
})

it('renders correctly 5-pages paginator in page 3', () => {
  renderPaginator(3, 5)

  expect(screen.getAllByRole('link')).toHaveLength(8)
  testFirstAndPrevLinks(3)
  expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('href', `${pathTo}/1`)
  expect(screen.getByRole('link', { name: '2' })).toHaveAttribute('href', `${pathTo}/2`)
  expect(screen.getByText('3')).toBeInstanceOf(HTMLSpanElement)
  expect(screen.getByRole('link', { name: '4' })).toHaveAttribute('href', `${pathTo}/4`)
  expect(screen.getByRole('link', { name: '5' })).toHaveAttribute('href', `${pathTo}/5`)
  testNextAndLastLinks(3, 5)
})

it('renders correctly 5-pages paginator in page 4', () => {
  renderPaginator(4, 5)

  expect(screen.getAllByRole('link')).toHaveLength(8)
  testFirstAndPrevLinks(4)
  expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('href', `${pathTo}/1`)
  expect(screen.getByRole('link', { name: '2' })).toHaveAttribute('href', `${pathTo}/2`)
  expect(screen.getByRole('link', { name: '3' })).toHaveAttribute('href', `${pathTo}/3`)
  expect(screen.getByText('4')).toBeInstanceOf(HTMLSpanElement)
  expect(screen.getByRole('link', { name: '5' })).toHaveAttribute('href', `${pathTo}/5`)
  testNextAndLastLinks(4, 5)
})

it('renders correctly 10-pages paginator in page 5', () => {
  renderPaginator(5, 10)

  expect(screen.getAllByRole('link')).toHaveLength(8)
  testFirstAndPrevLinks(5)
  expect(screen.getByRole('link', { name: '3' })).toHaveAttribute('href', `${pathTo}/3`)
  expect(screen.getByRole('link', { name: '4' })).toHaveAttribute('href', `${pathTo}/4`)
  expect(screen.getByText('5')).toBeInstanceOf(HTMLSpanElement)
  expect(screen.getByRole('link', { name: '6' })).toHaveAttribute('href', `${pathTo}/6`)
  expect(screen.getByRole('link', { name: '7' })).toHaveAttribute('href', `${pathTo}/7`)
  testNextAndLastLinks(5, 10)
})

it('renders correctly 10-pages paginator in page 9', () => {
  renderPaginator(9, 10)

  expect(screen.getAllByRole('link')).toHaveLength(8)
  testFirstAndPrevLinks(9)
  expect(screen.getByRole('link', { name: '6' })).toHaveAttribute('href', `${pathTo}/6`)
  expect(screen.getByRole('link', { name: '7' })).toHaveAttribute('href', `${pathTo}/7`)
  expect(screen.getByRole('link', { name: '8' })).toHaveAttribute('href', `${pathTo}/8`)
  expect(screen.getByText('9')).toBeInstanceOf(HTMLSpanElement)
  expect(screen.getByRole('link', { name: '10' })).toHaveAttribute('href', `${pathTo}/10`)
  testNextAndLastLinks(9, 10)
})

it('renders correctly 10-pages paginator in page 10', () => {
  renderPaginator(10, 10)

  expect(screen.getAllByRole('link')).toHaveLength(6)
  testFirstAndPrevLinks(10)
  expect(screen.getByRole('link', { name: '6' })).toHaveAttribute('href', `${pathTo}/6`)
  expect(screen.getByRole('link', { name: '7' })).toHaveAttribute('href', `${pathTo}/7`)
  expect(screen.getByRole('link', { name: '8' })).toHaveAttribute('href', `${pathTo}/8`)
  expect(screen.getByRole('link', { name: '9' })).toHaveAttribute('href', `${pathTo}/9`)
  expect(screen.getByText('10')).toBeInstanceOf(HTMLSpanElement)
  testNextAndLastLinks(10, 10)
})
