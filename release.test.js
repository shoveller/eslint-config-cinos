import {getPackageJSON} from './release'

describe('release 모듈', (object, method) => {
  beforeEach(() => {
    process.env.PKGJSON =
      '/Users/cinos81/Study/eslint-config-cinos/__mocks__/package.json'
  })

  afterAll(() => {
    process.env.PKGJSON = undefined
  })

  test('packageJSONPath 함수는 package.json의 위치를 반환한다', () => {
    expect(getPackageJSON()).toMatchInlineSnapshot(`
      Object {
        "developmentVersion": "0.1.0",
        "version": "0.0.1",
      }
    `)
  })
})
