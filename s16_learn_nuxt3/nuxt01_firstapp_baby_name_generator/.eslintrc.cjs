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
  ],
  plugins: [],

  rules: {
    "no-multiple-empty-lines": ["error", { max: 9999, maxEOF: 100 }],
    quotes: ["error", "double",], // 之所以 key 是 unquoted, 是 quotes is a single word, Quoted keys are necessary when the key contains special characters, spaces, or reserved words.
    "comma-dangle": "off", // allow a , after the last item in an object
    semi: "off", // 最后 加不加 ; 是无所谓的
    "padded-blocks": "off", // function body 里面允许有空行
    // "no-trailing-spaces": "off", // fucntion body 每一行前面允许有 空行。
  },
};
