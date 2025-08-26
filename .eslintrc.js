module.exports = {
  root: true, // Adiciona esta linha para garantir que o ESLint pare de procurar configurações em diretórios pais
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base', // Mantenha esta linha para as regras base
    'airbnb-typescript/base', // Mantenha esta linha para as regras base do TypeScript
    'prettier', // Desativa as regras de formatação do ESLint
    'plugin:prettier/recommended', // Usa o Prettier como uma regra, reportando erros de formatação
    '@mate-academy/eslint-config', // Mantenha a sua configuração específica por último para ter prioridade
  ],

  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    es2021: true,
    node: true, // Adicione para ambiente de Node.js
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: __dirname + '/tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    // Estas regras são redundantes ou entram em conflito e podem ser removidas
    // 'no-unused-vars': 'off', // A regra do TypeScript já lida com isso
    // 'no-shadow': 'off', // A regra do TypeScript já lida com isso
    // '@typescript-eslint/indent': ['error', 2], // Deixe o Prettier lidar com indentação
    // '@typescript-eslint/explicit-function-return-type': 'error', // Removida porque entra em conflito com o `airnbnb-base`
    // '@typescript-eslint/no-explicit-any': 'error', // Regra já está no `@typescript-eslint/recommended`

    // Regras que fazem sentido manter
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Melhorado para permitir variáveis prefixadas com _
    '@typescript-eslint/no-shadow': ['error'],
    'max-classes-per-file': 'off',
    'no-new': 'off',
    'arrow-body-style': 'off',

    // Nova regra para manter a consistência com o seu projeto
    'no-underscore-dangle': 'off',
  },
};
