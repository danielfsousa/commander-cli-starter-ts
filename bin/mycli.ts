#!/usr/bin/env node --enable-source-maps

import cli from '../src/cli.js'

cli.parseAsync(process.argv).catch(err => {
  console.error(err)
  process.exit(1)
})
