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
  // jest.mock 메소드를 명시적으로 호출하지 않아도, __mocks__ 내부의 모듈로 mocking
  automock: true,
  // 개발환경을 node.js로 지정
  testEnvironment: 'node',
}

module.exports = config
