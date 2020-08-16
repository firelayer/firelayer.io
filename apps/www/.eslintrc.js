module.exports = {
  root: true,
  extends: [
    '@firelayer/eslint-config-vue'
  ],
  rules: {
    // https://github.com/babel/babel-eslint/issues/681
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }]
  }
}
