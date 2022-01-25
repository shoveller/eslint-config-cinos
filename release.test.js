import * as release from "./release";

const mockPackageJSONPath = "./mock/package.json";

test("getPackageJSON 함수는 package.json을 읽어들인다", () => {
  jest
    .spyOn(release, "getPackageJSONPath")
    .mockReturnValue(mockPackageJSONPath)

  expect(release.getPackageJSON()).toMatchInlineSnapshot(`
    Object {
      "developmentVersion": "0.1.0",
      "version": "0.0.1",
    }
  `);
});

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
