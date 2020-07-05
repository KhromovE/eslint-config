module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  extends: ['@khromove/eslint-config-typescript', '@khromove/eslint-config-javascript-react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
  },
}
