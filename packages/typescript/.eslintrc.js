module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  extends: [
    '@khromove/eslint-config-javascript',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
