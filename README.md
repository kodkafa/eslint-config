# @kodkafa/eslint-config

This package includes the shareable ESLint and Prettier configuration used by KODKAFA.

First, install this package and ESLint.
```
pnpm add -D @kodkafa/eslint-config
```

Then create a file named `.eslintrc.json` with following contents
in the root folder of your project:
```
{
"extends": "@kodkafa"
}
```
OR
```
{
"extends": "@kodkafa/eslint-config/react"
}
```

And then create a file named `.prettierrc.json` with following contents
in the root folder of your project:
```
"@kodkafa/eslint-config/prettier-config"
```

### CONFIG

#### ESLint Rules:
```js
  "@typescript-eslint/no-shadow": "warn",
  indent: ["error", 2],
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
  "react/react-in-jsx-scope": 0, // in react
```

#### Prettier Config:
```js
  arrowParens: "always",
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "all",
```