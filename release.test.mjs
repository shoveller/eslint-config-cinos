import { getPackageJSON } from './release'

const mockPackageJSONPath = './mock/package.json'

test('getPackageJSON 함수는 파일을 역 직렬화한다', () => {
  jest.mock('./release', () => {
    return {
      packageJSONPath: mockPackageJSONPath,
    }
  })

  expect(getPackageJSON()).toMatchInlineSnapshot(`
    Object {
      "author": "cinos81@gmail.com",
      "dependencies": Object {
        "@typescript-eslint/eslint-plugin": "^5.10.0",
        "eslint-plugin-functional": "^4.0.2",
        "eslint-plugin-import": "^2.25.4",
        "eslint-plugin-jsdoc": "^37.6.3",
        "eslint-plugin-react": "^7.28.0",
        "eslint-plugin-typescript": "^0.14.0",
        "eslint-plugin-unused-imports": "^2.0.0",
      },
      "description": "서재원 전용 eslint 룰",
      "devDependencies": Object {
        "@babel/core": "^7.16.10",
        "@babel/preset-env": "^7.16.11",
        "@types/eslint": "^8.4.0",
        "@types/jest": "^27.4.0",
        "@types/node": "^17.0.10",
        "@types/prettier": "^2.4.3",
        "@types/semver": "^7.3.9",
        "babel-jest": "^27.4.6",
        "jest": "^27.4.7",
        "node-notifier": "^10.0.0",
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
      },
      "prettier": "prettier-config-cinos",
      "scripts": Object {
        "lint": "eslint --cache --fix . --ext .js,.json",
        "test": "jest",
      },
      "version": "0.0.0",
    }
  `)
})

// test('setPackageJSON 함수는 파일을 직렬화한다', () => {
//   const original = unserializeFile(mockPath)
//   const mock = {
//     developmentVersion: '0.0.1',
//     version: '0.0.1',
//   }
//
//   setPackageJSON(mockPath, mock)
//   expect(unserializeFile(mockPath)).toMatchInlineSnapshot(`
//     Object {
//       "developmentVersion": "0.0.1",
//       "version": "0.0.1",
//     }
//   `)
//   setPackageJSON(mockPath, original)
// })

// describe('getCommand', () => {
//   // afterEach(() => {
//   //   versionRollback()
//   // })
//
//   test('개발모드에서는 개발용 커맨드를 출력한다', () => {
//     versionUp(true)
//     const packageJSON = readPackageJSON()
//     expect(getCommand()).toBe('0.1.0')
//   })
//
//   test('배포모드에서는 배포용 커맨드를 출력한다', () => {
//     versionUp(false)
//     const packageJSON = readPackageJSON()
//     expect(packageJSON.version).toBe('0.1.0')
//   })
// })
