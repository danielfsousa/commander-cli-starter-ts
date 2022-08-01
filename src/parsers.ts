import { InvalidArgumentError } from 'commander'

export function parseNumber(value: string): Number {
  const parsedValue = Number(value)
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.')
  }
  return parsedValue
}
