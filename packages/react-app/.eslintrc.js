module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'comma-spacing': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'no-alert': 'error',
    curly: 'error',
    'brace-style': ['error', '1tbs'],
    'object-curly-spacing': ['error', 'always'],
    'function-call-argument-newline': ['error', 'consistent'],
    'one-var-declaration-per-line': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
  plugins: ['prettier'],
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
};
