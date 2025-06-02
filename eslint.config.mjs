import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  tseslint.configs.recommended,
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
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'pathGroups': [
            {
              'pattern': 'react',
              'group': 'external',
              'position': 'before',
            },
            {
              'pattern': 'next**',
              'group': 'external',
              'position': 'before',
            },
            {
              'pattern': '@/**',
              'group': 'internal',
            },
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true,
          },
        },
      ],
      // 사용하지 않는 변수 경고
      '@typescript-eslint/no-unused-vars': 'warn',
      // 명시적인 any 타입 사용 경고
      '@typescript-eslint/no-explicit-any': 'warn',
      // React 17+에서는 JSX를 사용하기 위해 React를 import할 필요가 없음
      'react/react-in-jsx-scope': 'off',
      // prop-types는 TypeScript 사용 시 불필요
      'react/prop-types': 'off',
    },
  },
];

export default eslintConfig;
