import type { Linter } from "eslint";

export const config: Partial<Linter.Config> = {
  env: {
    browser: false,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["import", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-shadow": "warn",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    camelcase: 0,
    "no-underscore-dangle": 0,
    "no-nested-ternary": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "global-require": 0,
  },
};

export default config;
