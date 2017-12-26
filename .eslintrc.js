module.exports = {
  extends: ['react-app', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['jsx-a11y', 'flowtype', 'prettier'],
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],
  },
  env: {
    node: true,
  },
  globals: {},
};
