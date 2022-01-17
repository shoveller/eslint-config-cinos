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
 * package.json의 version, developmentVersion 프로퍼티를 업데이트한다
 * @param originalVersion {string} package.json의 version 프로퍼티
 * @param version {string} package.json의 developmentVersion 프로퍼티
 */
export const setPackageJSONVersions = (originalVersion, version) => {
  packageJSON.version = originalVersion
  packageJSON.developmentVersion = version
  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))
}

const packageJSON = module.exports.getPackageJSON()
const originalVersion = `${packageJSON.version}`

/**
 * 마이너 버전 업데이트
 * @type {string}
 */
const version = semver.inc(
  process.env.NODE_ENV === 'development'
    ? packageJSON.developmentVersion
    : packageJSON.version,
  'minor',
)

const force = process.env.NODE_ENV === 'development' ? '--force' : ''

const registry =
  process.env.NODE_ENV === 'development'
    ? '--registry http://localhost:4873'
    : ''

try {
  /**
   * 배포를 시도한다
   */
  execSync(
    `npm version ${version} --allow-same-version ${registry} && npm publish --access public ${force} ${registry}`,
  )
} catch (exception) {
  /**
   * 예외가 발생하면 버전을 증가시킨다
   */
  setPackageJSONVersions(originalVersion, version)
}

if (process.env.NODE_ENV === 'development') {
  /**
   * 개발중에 배포를 시도했다면 버전을 증가시킨다
   */
  setPackageJSONVersions(originalVersion, version)
}
