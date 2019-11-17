module.exports = {
    extends: [
      'react-app',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'warn',
      'no-param-reassign': ['warn', { props: false }],
      'react/self-closing-comp': 'warn',
    },
  };
  