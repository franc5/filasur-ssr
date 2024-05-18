import { parseRangeNotSatisfiableError } from './parseRangeNotSatisfiableError'

it('returns the number of available rows', () => {
  const message = 'An offset of 50 was requested, but there are only 9 rows.'
  const rowCount = parseRangeNotSatisfiableError(message)
  expect(rowCount).toBe(9)
})

it('returns undefined if the message does not match the regex', () => {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non.'
  const rowCount = parseRangeNotSatisfiableError(message)
  expect(rowCount).toBe(undefined)
})
