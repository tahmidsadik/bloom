module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
      impliedStrict: true
    },
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prefer-const': 2,
    'eol-last': 2,
    'no-var': 2,
    'prefer-const': 2,
    'no-console': '2',
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-console': 0,
    'no-extra-bind': 2,
    'no-undef': 2
    // 'react/jsx-boolean-value': [2, 'always'],
    // 'react/jsx-closing-bracket-location': [2, { location: 'tag-aligned' }],
    // 'react/jsx-curly-spacing': [2, 'never'],
    // 'react/jsx-no-duplicate-props': 2,
    // 'react/jsx-no-undef': 2,
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2,
    // 'react/no-danger': 1,
    // 'react/no-did-mount-set-state': 2,
    // 'react/no-did-update-set-state': 2,
    // 'react/no-unknown-property': 2,
    // 'react/prop-types': 1,
    // 'react/react-in-jsx-scope': 2,
    // 'react/jsx-key': 'error',
    // 'react/no-deprecated': 'error',
    // 'react/no-find-dom-node': 'error',
    // 'react/no-children-prop': 'error',
    // 'react/jsx-no-target-blank': 'error',
    // 'react/no-unknown-property': 2,
    // 'react/self-closing-comp': ['error', { component: true, html: false }]
  }
};
