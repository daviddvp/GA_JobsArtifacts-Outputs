import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // Configuración global para archivos .js, .vue, etc.
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: { ...require("globals").browser } }, // Utilizando globals de forma correcta
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // Puedes agregar reglas generales aquí
    },
  },
  
  // Configuración específica para JSX
  {
    files: ["*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    rules: {
      // Reglas específicas para JSX
    },
  },

  // Configuración recomendada para JavaScript
  pluginJs.configs.recommended,
  // Configuración recomendada para Vue
  ...pluginVue.configs["flat/essential"],
];

export default eslintConfig;

