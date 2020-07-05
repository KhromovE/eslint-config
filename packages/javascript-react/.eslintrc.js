module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', '@khromove/eslint-config-javascript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}
