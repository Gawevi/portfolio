import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import reactHooks from "eslint-plugin-react-hooks";

export default {
  extends: "react-app",
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } }
  },
  globals: globals.browser,
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    "plugin:prettier/recommended"
  ],
  plugins: {
    "react-hooks": reactHooks,
    "prettier": eslint-plugin-prettier
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
