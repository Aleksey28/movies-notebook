module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '__dirname'],
      },
    ],
    'no-use-before-define': 'off',
    'no-console': 'off',
  },
};
