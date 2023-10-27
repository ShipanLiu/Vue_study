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
    "keyword-spacing": ["error", { overrides: { if: { after: false } } }], // if 和 后面的 () 之间不用有 space， 但是 eslint 是要求有的。
    "arrow-parens": "off", // a single argument of an arror function can also have a ()
    "vue/v-on-event-hyphenation": "off", // 可以使用 驼峰naming, not necessarily hyphen
    "no-console": "off", // because using console.log statements is generally discouraged in production code, as it could potentially leak sensitive information to the console,我这里允许使用console without getting a warning
    "vue/singleline-html-element-content-newline": "off", // 可以使用 <p>x</p> 不用x单独在一行
    "space-before-function-paren": "off", // fun()  or  fun ()
  },
};
