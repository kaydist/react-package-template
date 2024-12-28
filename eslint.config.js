const { defineConfig } = require('eslint-define-config');
const react = require('eslint-plugin-react');
const TypescriptEslint = require('@typescript-eslint/eslint-plugin');
const PrettierPlugin = require('eslint-plugin-prettier');
const RecommendedPrettierPlugin = require('eslint-plugin-prettier/recommended');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

module.exports = defineConfig([
  RecommendedPrettierPlugin,
  react.configs.flat.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),

  // use our plugin by itself
  ...compat.plugins('@typescript-eslint'),
  // this will define make our rules available as `@typescript-eslint/`

  // or translate an entire eslintrc style config!
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended-type-checked'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
  }),
  {
    ignores: ['node_modules', 'build', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
  {
    plugins: {
      react,
      prettier: PrettierPlugin,
      '@typescript-eslint': TypescriptEslint,
    },
  },
]);
