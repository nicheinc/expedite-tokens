import ESLintJS from '@eslint/js'
import TypeScriptESLint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import progress from 'eslint-plugin-file-progress'
import tsParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'

export default [
    {
        ignores: ['**/dist', '**/.gitignore'],
    },
    ESLintJS.configs.recommended,
    ...TypeScriptESLint.configs.recommended,
    progress.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ['scripts/', 'tokens/'],
    },
    {
        languageOptions: {
            ecmaVersion: 2018,
            globals: {
                ...globals.node,
            },
            parser: tsParser,
            parserOptions: {
                allowImportExportEverywhere: true,
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            '@typescript-eslint/indent': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
]
