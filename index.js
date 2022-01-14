const functionalRules = {
  // let은 사용할 수 없다
  'functional/no-let': ['error'],
  // 객체와 배열은 immutable이다.
  'functional/immutable-data': ['error'],
  // 반복문은 사용할 수 없다
  'functional/no-loop-statement': ['error'],
  // rest parameter 사용을 제한한다
  'functional/functional-parameters': [
    'error',
    {
      allowRestParameter: false,
      allowArgumentsKeyword: false,
      enforceParameterCount: false,
    },
  ],
}

const eslintRules = {
  // var는 사용할 수 없다
  'no-var': ['error'],
  // 띄워쓰기는 스페이스문자 2개
  indent: ['error', 2],
  // Function.prototype.apply() 를 사용할 때는 spread 연산자를 사용해야 한다
  'prefer-spread': ['error'],
  // 선언한 표현식은 반드시 사용해야 한다
  'no-unused-expressions': ['error'],
  // Function 객체에 new 연산자를 사용할 수 없다
  'no-new-func': ['error'],
  // goto 구문의 label을 사용할 수 없다
  'no-labels': ['error'],
  // 프로토타입을 동적으로 확장할 수 없다
  'no-extend-native': ['error'],
  // eval을 사용할 수 없다
  'no-eval': ['error'],
  // 생성자 함수는 return을 할 수 없다
  'no-constructor-return': ['error'],
  // if 문에서 return을 하면 else 문에서 return을 할 수 없다
  'no-else-return': ['error'],
  // 안전하지 못한 옵셔널 체이닝을 할 수 없다
  'no-unsafe-optional-chaining': ['error'],
  // 불필요한 반복문은 사용할 수 없다
  'no-unreachable-loop': ['error'],
  // 도달하지 못하는 코드는 사용할 수 없다
  'no-unreachable': ['error'],
  // import한 심볼은 읽기 전용이다
  'no-import-assign': ['error'],
  // 파라미터는 읽기 전용이다
  'no-param-reassign': ['error'],
  // 호이스팅을 허용하지 않는다
  'no-use-before-define': ['error'],
  // if ~ else 중첩은 허용하지 않는다
  'max-depth': [
    'error',
    {
      max: 1,
    },
  ],
  // return 문 이전에는 반드시 빈 줄이 있어야 한다
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
  ],
  // 삼항연산자를 허용하지 않는다
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],
  // 문자열 선언에는 백틱을 사용한다
  quotes: [
    'error',
    'backtick',
    {
      avoidEscape: true,
    },
  ],
  // computed property 앞뒤에는 공백이 있어야 한다.
  'computed-property-spacing': [
    'error',
    'never',
    {
      enforceForClassMembers: true,
    },
  ],
  // 중첩된 object 앞뒤에는 공백이 있어야 한다.
  'object-curly-spacing': ['error', 'always'],
  // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
  'array-bracket-spacing': ['error', 'never'],
  // 세미콜론 사용금지
  // prettiier를 사용할 것이므로 명시적으로 끔
  semi: ['off'],
  // import문은 정렬되어 있어야 한다
  // eslint-plugin-import의 룰을 사용할 것이므로 명시적으로 끔
  'sort-imports': ['off'],
  // 중괄호의 스타일을 통일
  'brace-style': ['error'],
  // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
  curly: ['error', 'multi-line', 'consistent'],
  // debugger 는 사용을 권장하지 않는다
  'no-debugger': ['warn'],
  // no-alert 룰과 충돌하므로 끔
  'no-restricted-globals': ['off'],
  // alert, confirm, prompt 는 사용을 권장하지 않는다
  'no-alert': ['warn'],
  // console.log 는 사용할 수 없다
  'no-console': [
    'warn',
    {
      allow: ['warn', 'error'],
    },
  ],
  // jsx에는 쌍 따옴표를 사용해야 한다.
  'jsx-quotes': ['error', 'prefer-double'],
  // 문자열 연결에는 템플릿 문자열을 사용해야 한다
  'prefer-template': ['error'],
}

const tslintRules = {
  // 명시적으로 any를 사용할 수 없다
  '@typescript-eslint/no-explicit-any': ['error'],
  // 선언한 변수는 반드시 사용해야 한다
  // eslint-plugin-unused-imports 플로그인과 충돌하므로 끔
  '@typescript-eslint/no-unused-vars': ['off'],
  // 숫자와 문자열에 + 연산자를 사용할 수 없다
  // tsconfig 설정을 요구하므로 삭제함
  // '@typescript-eslint/restrict-plus-operands': ['error'],
  // 대괄호 연산자를 연속해서 호출할 수 없다
  // tsconfig 설정을 요구하므로 삭제함
  // '@typescript-eslint/no-unsafe-member-access': ['error'],
  // this의 참조를 변수에 할당할 수 없다
  '@typescript-eslint/no-this-alias': ['error'],
  // 빈 인터페이스는 선언할 수 없다
  '@typescript-eslint/no-empty-interface': ['error'],
  // 선언 후에 사용해야 한다
  '@typescript-eslint/no-use-before-define': ['error'],
}

const reactHookRules = {
  // hook은 반드시 react 함수 안에서 호출해야 한다
  'react-hooks/rules-of-hooks': ['error'], // Checks rules of Hooks
  // hook의 dep array는 반드시 지켜야 한다
  'react-hooks/exhaustive-deps': ['error'], // Checks effect dependencies
}

const reactRules = {
  // boolean 값을 props로 넘길 때는 우변을 생략한다
  'react/jsx-boolean-value': ['error'],
  // jsx의 닫는 꺽쇠는 정렬해야 한다
  'react/jsx-closing-bracket-location': ['error'],
  // jsx의 닫는 태그는 정렬해야 한다
  'react/jsx-closing-tag-location': ['error'],
  // jsx의 props는 2칸을 띄워야 한다
  'react/jsx-indent-props': [2, { indentMode: 2, ignoreTernaryOperator: true }],
  // javascript url은 사용할 수 없다
  'react/jsx-no-script-url': ['error'],
  // 불필요한 플래그먼트 금지
  'react/jsx-no-useless-fragment': ['error'],
  // props의 스프레딩 금지
  'react/jsx-props-no-spreading': ['error'],
  // jsx의 중복 공백열 금지
  'react/jsx-props-no-multi-spaces': ['error'],
  // props는 알파벳순서로 정렬이 되어야 한다
  'react/jsx-sort-props': ['error'],
  // dangerouslySetInnerHTML는 사용할 수 없다
  'react/no-danger': ['error'],
  // deprecated 된 속성은 사용할 수 없다
  'react/no-deprecated': ['error'],
  // children을 props으로 넘길 수 없다
  'react/no-children-prop': ['error'],
  // children이 없는 컴퍼넌트는 스스로 닫혀야 한다
  'react/self-closing-comp': ['error'],
  // findDOMNode 메소드는 사용할 수 없다
  'react/no-find-dom-node': ['error'],
  // ref로 string을 넘길 수 없다
  'react/no-string-refs': ['error'],
}

const unusedImportRules = {
  // 사용하지 않는 import 구문은 삭제한다
  'unused-imports/no-unused-imports': ['error'],
  // 사용하지 않는 변수는 삭제한다
  'unused-imports/no-unused-vars': ['error'],
}

const importRules = {
  // 스스로를 import 할 수 없다
  'import/no-self-import': ['error'],
  // dynamic import에는 반드시 chunk name이 있어야 한다
  'import/dynamic-import-chunkname': ['error'],
  // 익명으로 default export는 할 수 없다
  'import/no-anonymous-default-export': ['error'],
  // import문 다음 1줄은 공백이어야 한다
  'import/newline-after-import': ['error', { count: 1 }],
  // import문은 정렬되어 있어야 한다
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    },
  ],
  // 출처가 같은 곳에서 중복 import를 할 수 없다
  'import/no-duplicates': ['error'],
  // commonjs 문법을 사용할 수 없다
  'import/no-commonjs': ['error'],
  // 불필요한 path segment를 사용할 수 없다
  'import/no-useless-path-segments': ['error'],
}

module.exports = {
  // eslint 파서를 지정
  parser: '@typescript-eslint/parser',
  // 기반이 되는 rule
  extends: [
    'react-app',
    'react-app/jest',
    // react17 이상에 내장된 jsx-runtime의 사용을 react플러그인을 사용해 명시함
    'plugin:react/jsx-runtime',
    // import 플러그인을 활성화함
    'plugin:import/typescript',
  ],
  // 플러그인 목록
  plugins: [
    '@typescript-eslint',
    'functional',
    'react',
    'unused-imports',
    'import',
  ],
  // 허용하는 전역 변수 목록을 명시한다
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    es2021: true,
    browser: true,
    jest: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        ...eslintRules,
        ...tslintRules,
        ...functionalRules,
        ...importRules,
        ...unusedImportRules,
        ...reactRules,
        ...reactHookRules,
      },
    },
  ],
}
