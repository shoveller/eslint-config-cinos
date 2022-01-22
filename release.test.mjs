import { getPackageJSON } from './release'

test('getPackageJSON 함수는 package.json을 반환한다', () => {
  expect(getPackageJSON()).toMatchSnapshot()
})
