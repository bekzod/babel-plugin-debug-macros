module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier', 'node'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },

  overrides: [
    {
      files: ['tests/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
};
