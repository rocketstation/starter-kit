module.exports = {
  env: { es6: true },
  extends: ['standard', 'prettier', 'prettier/standard'],
  globals: {
    ENV: 'readonly',
    ID: 'readonly',
    IS_DEVELOPMENT: 'readonly',
    MODE: 'readonly',
    NAME: 'readonly',
    VERSION: 'readonly',
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': ['error', 'always'],
    'complexity': ['error', 5],
    'curly': ['error', 'multi-line'],
    'max-lines': ['error', 255],
    'prettier/prettier': 'error',
    'sort-keys': ['error', 'asc', {
      caseSensitive: false,
      natural: true
    }]
  },
}
