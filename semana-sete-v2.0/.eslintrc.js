module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'airbnb-typescript/base'],
  parserOptions: {project: './tsconfig.json'},
  overrides: [
  ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module'
  // },
  rules: {
  }
}
