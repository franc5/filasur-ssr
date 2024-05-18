const regEx = /An offset of (?:\d+) was requested, but there are only (?<rowCount>\d+) rows./

export const parseRangeNotSatisfiableError = (message: string) => {
  const matches = message.match(regEx)

  const rowCount = matches?.groups?.rowCount

  return rowCount ? +rowCount : undefined
}
