/**
 * https://cheatcode.co/tutorials/how-to-write-test-and-publish-an-npm-package#writing-a-release-script
 */
/* @type {import('node')}*/
import { execSync } from 'child_process'
import fs from 'fs'
/* @type {import('semver')}*/
import semver from 'semver'

/**
 * 프로젝트 루트의 package.json을 역직렬화
 * @returns {any}
 */
export const readPackageJSON = () => {
  const packageJSON = fs.readFileSync('./package.json', 'utf-8')

  return JSON.parse(packageJSON)
}

export const setVersion = (packageJSON, originalVersion) => {
  fs.writeFileSync(
    'package.json',
    JSON.stringify(
      {
        ...packageJSON,
        version: originalVersion,
      },
      null,
      2,
    ),
  )
}

export const setDevelopmentVersion = (packageJSON, newVersion) => {
  fs.writeFileSync(
    'package.json',
    JSON.stringify(
      {
        ...packageJSON,
        developmentVersion: newVersion,
      },
      null,
      2,
    ),
  )
}

/**
 * package.json의 newVersion, developmentVersion 프로퍼티를 롤백한다
 * @param originalVersion {string} package.json의 newVersion 프로퍼티
 * @param newVersion {string} package.json의 developmentVersion 프로퍼티
 */
export const setPackageJSONVersions = (originalVersion, newVersion) => {
  packageJSON.version = originalVersion
  packageJSON.developmentVersion = newVersion
  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))
}

const packageJSON = readPackageJSON()
export const originalVersion = `${packageJSON.version}`

/**
 * 새 버전을 계산한다
 * 개발 모드일때는 developmentVersion 필드의 마이너 버전을 늘린 값을 반환한다
 * 그 외에는 version 필드의 마이너 버전을 늘린 값을 반환한다
 * @type {string}
 */
export const getNewVersion = (isDev = true) =>
  semver.inc(
    isDev ? packageJSON.developmentVersion : packageJSON.version,
    'minor',
  )

/**
 * 개발 모드에서는 강제로 publish 한다
 * @type {string}
 */
const getForceFlag = (isDev = true) => (isDev ? '--force' : '')

const getRegistry = (isDev = true) =>
  isDev ? '--registry http://localhost:4873' : ''

export const versionUp = (isDev = true) => {
  const newVersion = getNewVersion(isDev)
  const registry = getRegistry(isDev)

  execSync(`npm version ${newVersion} --allow-same-version ${registry}`)
}

export const publish = (isDev = true) => {
  const registry = getRegistry(isDev)
  const forceFlag = getForceFlag(isDev)

  execSync(`npm publish --access public ${forceFlag} ${registry}`)
}

export const versionRollback = (isDev = true) => {
  const newVersion = getNewVersion(isDev)

  setPackageJSONVersions(originalVersion, newVersion)
}

const isDev = process.env.NODE_ENV === 'development'
try {
  versionUp(isDev)
  publish(isDev)
} catch (exception) {
  versionRollback(isDev)
}

/**
 * 개발모드로 배포했다면 버전을 롤백한다
 */
if (isDev) {
  versionRollback(isDev)
}
