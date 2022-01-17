/** @type { import("prettier").Options } */
const options = {
  // 한 줄은 80자를 넘을 수 없다
  printWidth: 80,
  // 탭의 길이는 스페이스 문자 2개
  tabWidth: 2,
  // statement가 시작할 때만 세미콜론을 붙인다
  semi: false,
  // 문자열에 홑 따옴표를 사용한다
  singleQuote: true,
  // 탭 문자는 사용하지 않는다
  useTabs: false,
  // 필요할 때만 프로퍼티 이름에 홑 따옴표를 붙인다
  quoteProps: 'as-needed',
  // jsx에는 큰 따옴표만 사용한다
  jsxSingleQuote: false,
  // 코드를 여러 줄로 작성하면, 가장 마지막줄에는 콤마를 붙인다
  trailingComma: 'all',
  // 중괄호 전후로 공백문자를 넣는다
  bracketSpacing: true,
  // jsx가 길어지면, 한줄을 더 띄우고 꺽쇠를 넣는다
  bracketSameLine: false,
  // 화살표 함수의 인자는 반드시 괄호로 감싼다
  arrowParens: 'always',
  // 파일 끝 문자를 리눅스 스타일로 강제한다
  endOfLine: 'lf',
  // 템플릿 문자열 안의 코드를 자동으로 정렬한다
  embeddedLanguageFormatting: 'auto',
}

module.exports = options
