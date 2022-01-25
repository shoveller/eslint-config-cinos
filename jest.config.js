/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/**
 *
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|mjs?)$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'mjs'],
}

module.exports = config
