// .eslintrc.cjs
// By default, if your package.json contains "type": "module", then Node.js will treat all .js files
// as ESM (ECMAScript Modules). But ESLint, as of now, expects its config files to be in CommonJS format.
// This is why the .cjs extension is often recommended.

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // Only needed if you are using TypeScript
  },
  extends: [
    "@nuxtjs/eslint-config-typescript", // Only needed if you are using TypeScript
    "plugin:prettier/recommended",
  ],
  plugins: [],
  rules: {},
};
