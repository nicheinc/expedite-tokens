module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018,
      project: './tsconfig.json',
      sourceType: 'module',
      allowImportExportEverywhere: true,
  },
  plugins: ['@typescript-eslint', 'progress'],
  rules: {
    '@typescript-eslint/indent': 'off', // let prettier handle it
  },
  ignorePatterns: ['.eslintrc.js'],
};
