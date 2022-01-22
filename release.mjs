/**
 * https://cheatcode.co/tutorials/how-to-write-test-and-publish-an-npm-package#writing-a-release-script
 */
/* @type {import('node')}*/
import { execSync } from 'child_process'
/* @type {import('semver')}*/
import semver from 'semver'
import fs from 'fs'

/**
 * 프로젝트 루트의 package.json을 역직렬화
 * @returns {any}
 */
export const getPackageJSON = () => {
  const packageJSON = fs.readFileSync('./package.json', 'utf-8')
  return JSON.parse(packageJSON)
}

/**
 * package.json의 newVersion, developmentVersion 프로퍼티를 롤백한다
 * @param originalVersion {string} package.json의 newVersion 프로퍼티
 * @param newVersion {string} package.json의 developmentVersion 프로퍼티
 */
export const rollbackPackageJSONVersions = (originalVersion, newVersion) => {
  packageJSON.version = originalVersion
  packageJSON.developmentVersion = newVersion
  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))
}

const packageJSON = getPackageJSON()
const originalVersion = `${packageJSON.version}`

/**
 * package.json의 마이너 버전을 업데이트한다
 * @type {string}
 */
const version = semver.inc(
  process.env.NODE_ENV === 'development'
    ? packageJSON.developmentVersion
    : packageJSON.version,
  'minor',
)

/**
 * 개발 모드에서는 강제로 publish 한다
 * @type {string}
 */
const force = process.env.NODE_ENV === 'development' ? '--force' : ''

const registry =
  process.env.NODE_ENV === 'development'
    ? '--registry http://localhost:4873'
    : ''

try {
  /**
   * 배포한다
   */
  execSync(
    `npm version ${version} --allow-same-version ${registry} && npm publish --access public ${force} ${registry}`,
  )
} catch (exception) {
  /**
   * 예외가 발생하면 버전을 롤백한다
   */
  rollbackPackageJSONVersions(originalVersion, version)
}

/**
 * 개발모드로 배포했다면 버전을 롤백한다
 */
if (process.env.NODE_ENV === 'development') {
  rollbackPackageJSONVersions(originalVersion, version)
}
