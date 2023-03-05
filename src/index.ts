import eslint from "./config/eslint";
import prettier from "./config/prettier";

eslint.rules = Object.assign(eslint.rules as object, {
  "prettier/prettier": ["error", prettier],
});

export = eslint;
