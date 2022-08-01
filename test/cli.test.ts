import cli from '../src/cli.js'

const DEFAULT_ARGS = ['node', 'mycli.js']

test('add command', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => true)
  const args = [...DEFAULT_ARGS, 'add', '1', '2']
  const result = 3

  cli.parse(args)

  expect(logSpy).toHaveBeenCalledWith(result)
})
