// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

// Reuse plugin references already registered by expoConfig to avoid re-registration errors
const tsPlugin = expoConfig.find((c) => c.plugins?.['@typescript-eslint'])?.plugins?.[
  '@typescript-eslint'
];
const reactHooksPlugin = expoConfig.find((c) => c.plugins?.['react-hooks'])?.plugins?.[
  'react-hooks'
];

module.exports = defineConfig([
  ...expoConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      ...(tsPlugin && { '@typescript-eslint': tsPlugin }),
      ...(reactHooksPlugin && { 'react-hooks': reactHooksPlugin }),
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['node_modules/', '.expo/', 'dist/', 'build/'],
  },
]);
