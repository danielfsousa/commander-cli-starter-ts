import { program } from 'commander'
import * as commands from './commands.js'
import { parseNumber } from './parsers.js'

const cli = program
  .name('mycli')
  .description('A starter kit for building command line interfaces in Typescript')
  .version('1.0.0')

cli
  .command('add')
  .description('adds two numbers')
  .argument('<a>', 'a number', parseNumber)
  .argument('<b>', 'a number', parseNumber)
  .action(commands.add)

export default cli
