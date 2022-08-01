# commander-cli-starter-ts

A typescript template for building command line interfaces with [commander.js](https://github.com/tj/commander.js/).

## Requirements

- Node.js 16

## Quick Start

```bash
npm init @danielfsousa commander-cli-ts mycli
```

## Usage

1. Install dependencies

```bash
npm install
```

2. Build

```bash
npm run build
```

2. Run unit and integration tests

```bash
npm test
```

3. Install CLI

```bash
npm install . -g
```

4. Run CLI

```bash
mycli --help
```

## Scripts

```bash
npm run build         # transpiles typescript files
npm run format        # formats code with prettier
npm run format:check  # checks formatting errors with prettier
npm run lint          # lints code with eslint
npm run lint:fix      # lints and fixes code with eslint
npm run start         # runs cli
npm run test          # runs unit and integration tests
npm run test:watch    # runs tests and watches for changes
```
