/**
 * Https://cheatcode.co/tutorials/how-to-write-test-and-publish-an-npm-package#writing-a-release-script.
 */
/** @type {import('node')}*/
import {execSync} from 'child_process'
import fs from 'fs'
/** @type {import('semver')}*/
import semver from 'semver'

export const getPackageJSON = () => {
  const result = fs.readFileSync(packageJSONPath, 'utf-8')

  return JSON.parse(result)
}

export const setPackageJSON = (content) => {
  fs.writeFileSync(packageJSONPath, JSON.stringify(content, null, 2))
}

export const packageJSONPath =  `${__dirname}/package.json`

export const isDev = process.env.NODE_ENV === 'development'

export const getOriginalVersion = () => {
  const packageJSON = getPackageJSON()

  return `${packageJSON.version}`
}

export const getNewVersion = () => {
  const { developmentVersion = '', version = '' } = getPackageJSON()
  if (isDev) {
    return semver.inc(developmentVersion,'minor');
  }

  return semver.inc(version,'minor');
}

const getForceFlag = () => isDev ? '--force' : ''

const getRegistry = () => {
  if (isDev) {
    return '--registry http://localhost:4873'
  }

  return '';
}

export const getVersionUpCmd = () => {
  const newVersion = getNewVersion()
  const registry = getRegistry()

  return `npm version ${newVersion} --allow-same-version ${registry}`
}

export const getPublishCmd = () => {
  const registry = getRegistry()
  const forceFlag = getForceFlag()

  return `npm publish --access public ${forceFlag} ${registry}`
}

export const getCommand = () => {
  const versionUpCmd = getVersionUpCmd()
  const publishCmd = getPublishCmd()

  return `${versionUpCmd} && ${publishCmd}`
}

export const versionUp = () => {
  execSync(getCommand())
}

export const versionRollback = () => {
  const newVersion = getNewVersion()
  const originalVersion = getOriginalVersion()

  const packageJSON = getPackageJSON()
  setPackageJSON({
    ...packageJSON,
    version: originalVersion,
    developmentVersion: newVersion,
  })
}

try {
  versionUp()
} catch (exception) {
  versionRollback()
}

/**
 * 개발모드로 배포했다면, 배포가 성공하더라도 버전을 롤백한다.
 */
if (isDev) {
  versionRollback()
}
