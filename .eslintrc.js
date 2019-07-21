module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "@typescript-eslint",
    "babel",
    "import",
    "promise",
    "prettier",
    "react",
    "react-hooks"
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/interface-name-prefix": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'import/no-named-default': 'error',
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external", "internal"],
          ["parent"], ["sibling", "index"]
        ],
        "newlines-between": "always-and-inside-groups"
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
