import {
  getCommand,
  getPackageJSON,
  getPackageJSONPath,
  setPackageJSON,
} from './release'

describe('release 모듈', () => {
  beforeEach(() => {
    process.env.PKGJSON =
      '/Users/cinos81/Study/eslint-config-cinos/__mocks__/package.json'
  })

  afterAll(() => {
    process.env.PKGJSON = undefined
    process.env.NODE_ENV = 'development'
  })

  test('getPackageJSON 함수는 package.json을 반환한다', () => {
    expect(getPackageJSON()).toMatchInlineSnapshot(`
      Object {
        "developmentVersion": "0.1.0",
        "version": "0.0.1",
      }
    `)
  })

  test('setPackageJSON 함수는 package.json에 기록한다', () => {
    const original = getPackageJSON()
    setPackageJSON({ name: 'hello' })
    expect(getPackageJSON()).toMatchInlineSnapshot(`
      Object {
        "name": "hello",
      }
    `)
    setPackageJSON(original)
  })
})

describe('getCommand()', () => {
  beforeEach(() => {
    process.env.PKGJSON = `${__dirname}/package.json`
  })

  test('개발모드의 커맨드가 다르다', () => {
    process.env.NODE_ENV = 'development'
    expect(getPackageJSONPath()).toMatchInlineSnapshot(
      `"/Users/cinos81/Study/eslint-config-cinos/package.json"`,
    )
    expect(getCommand()).toMatchInlineSnapshot(
      `"npm version 0.3.0 --allow-same-version --registry http://localhost:4873 && npm publish --access public --force --registry http://localhost:4873"`,
    )
  })

  test('배포모드의 커맨드가 다르다', () => {
    process.env.NODE_ENV = 'something'
    expect(getPackageJSONPath()).toMatchInlineSnapshot(
      `"/Users/cinos81/Study/eslint-config-cinos/package.json"`,
    )
    expect(getCommand()).toMatchInlineSnapshot(
      `"npm version 0.2.0 --allow-same-version  && npm publish --access public  "`,
    )
  })
})
