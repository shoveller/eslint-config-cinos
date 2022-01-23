import {
  getNewVersion,
  originalVersion,
  readPackageJSON,
  setPackageJSONVersions,
  versionRollback,
  versionUp,
} from './release'

describe('versionUp 함수', () => {
  afterEach(() => {
    versionRollback()
  })

  test('개발모드에서는 developmentVersion 필드의 값을 바탕으로 package.json의 version필드를 minor 업데이트한다', () => {
    versionUp(true)
    const packageJSON = readPackageJSON()
    expect(packageJSON.version).toBe('0.1.0')
  })

  test('배포모드에서는 version 필드의 값을 바탕으로 package.json의 version필드를 minor 업데이트한다', () => {
    versionUp(false)
    const packageJSON = readPackageJSON()
    expect(packageJSON.version).toBe('0.1.0')
  })
})
