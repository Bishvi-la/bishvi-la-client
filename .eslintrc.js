module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@react-native-community',
    'plugin:prettier/recommended',
    'expo',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'import/default': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'import/no-unresolved': 'error',
    'no-duplicate-imports': 'error',
    'no-confusing-arrow': 'error',
    'no-else-return': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    curly: 'error',
    'default-case': 'error',
    'no-nested-ternary': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'default-param-last': 'error',
    'prefer-const': 'error',
    'no-return-await': 'error',
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'no-undef-init': 'error',
    'no-useless-return': 'error',
    'no-return-assign': 'error',
    'require-await': 'error',
    'no-lonely-if': 'error',
    eqeqeq: ['error', 'always'],
    'react-refresh/only-export-components': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
