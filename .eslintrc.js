module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '@react-native',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': ['error', 'never'],
    'prettier/prettier': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['metro.config.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
};
