import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: tseslintPlugin.configs.recommended.rules,
  },
  eslintPluginReact.configs.recommended,
  eslintPluginReactHooks.configs.recommended,
  eslintPluginImport.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // import 순서 정렬
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // 사용하지 않는 변수 에러
      '@typescript-eslint/no-unused-vars': 'error',
      // 명시적인 any 타입 사용 에러
      '@typescript-eslint/no-explicit-any': 'error',
      // 사용하지 않는 import 에러
      'import/no-unused-modules': 'error',
      // 존재하지 않는 import 에러
      'import/no-unresolved': 'error',
      // 중복된 import 에러
      'import/no-duplicates': 'error',
      // React 17+에서는 JSX를 사용하기 위해 React를 import할 필요가 없음
      'react/react-in-jsx-scope': 'off',
      // prop-types는 TypeScript 사용 시 불필요
      'react/prop-types': 'off',
      // 타입 체크 강화
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
    },
  },
];

export default eslintConfig;
