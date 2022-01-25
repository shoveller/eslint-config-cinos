import fs from 'fs'

export const packageJSONPath =  `${__dirname}/package.json`

export const getPackageJSON = () => {
  const result = fs.readFileSync(packageJSONPath, 'utf-8')

  return JSON.parse(result)
}
