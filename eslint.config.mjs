import globals from 'globals';
import pluginJs from "@eslint/js";
import pluginTypeScript from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-config-prettier";

export default [
  {
    files: ["/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginJs.configs.recommended,
    ...pluginTypeScript.configs.recommended,
    ...pluginReactConfig.configs.flat.recommended,
    // pluginReactHooks.configs.recommended,
    ...pluginImport.flatConfigs.recommended,
    ...pluginImport.flatConfigs.typescript,
    ...pluginImport.flatConfigs.react,
    ...pluginPrettier,
  },
  {
    files: ["/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: [
        globals.browser,
        globals.node, globals.es6],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      "import/no-named-as-default": "off",
      "import/no-named-default": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal"],
            ["parent"],
            ["sibling", "index"]
          ],
          "newlines-between": "always-and-inside-groups"
        }
      ]
    }
  },
];

