import { getPackageJSON, packageJSONPath } from './release'

test('packageJSONPath 프로퍼티는 package.json의 위치를 반환한다', () => {
  expect(packageJSONPath).toMatchInlineSnapshot(
    `"/Users/cinos81/Study/eslint-config-cinos/__mocks__/package.json"`,
  )
})

test('getPackageJSON 함수는 package.json을 읽어들인다', () => {
  expect(getPackageJSON()).toMatchInlineSnapshot(`
    Object {
      "developmentVersion": "0.0.1",
      "version": "0.0.1",
    }
  `)
})

