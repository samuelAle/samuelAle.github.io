module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['xo-space/esnext', 'xo-react/space'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-tag-spacing': 0,
    'react/prop-types': 0,
    'no-warning-comments': 0,
    'complexity': 0,
  },
};
