import { getPackageJSON } from './release'

test('getPackageJSON 함수는 package.json을 반환한다', () => {
  expect(getPackageJSON()).toMatchInlineSnapshot(`
    Object {
      "author": "cinos81@gmail.com",
      "description": "서재원 전용 eslint 룰",
      "devDependencies": Object {
        "@babel/core": "^7.16.7",
        "@babel/preset-env": "^7.16.8",
        "@types/jest": "^27.4.0",
        "@types/node": "^17.0.9",
        "@types/prettier": "^2.4.3",
        "@types/semver": "^7.3.9",
        "babel-jest": "^27.4.6",
        "jest": "^27.4.7",
        "prettier": "^2.5.1",
        "prettier-config-cinos": "^1.0.0",
        "semver": "^7.3.5",
      },
      "developmentVersion": "0.1.0",
      "keywords": Array [
        "eslint",
        "typescript",
      ],
      "license": "ISC",
      "main": "index.js",
      "name": "eslint-config-cinos",
      "peerDependencies": Object {
        "@typescript-eslint/parser": ">=5.8.1",
        "eslint": ">=8.6.0",
        "eslint-plugin-functional": ">=4.0.2",
        "eslint-plugin-react": ">=7.28.0",
        "eslint-plugin-unused-imports": ">=2.0.0",
      },
      "prettier": "prettier-config-cinos",
      "version": "0.0.1",
    }
  `)
})
