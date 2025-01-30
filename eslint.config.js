import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    overrides: [
      {
        files: ["*.jsx"],
        parserOptions: {
          ecmaVersion: 12,
          sourceType: "module",
        },
        rules: {
          // Aquí puedes definir reglas adicionales para JSX
        },
      },
    ],
  },
  // Esto es para asegurarte de que ESLint escanee el directorio correcto
  {
    root: true,
  },
];

export default eslintConfig;
