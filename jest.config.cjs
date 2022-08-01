/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  clearMocks: true,
  testPathIgnorePatterns: ['dist'],
  globals: {
    'ts-jest': {
      useESM: true,
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}
