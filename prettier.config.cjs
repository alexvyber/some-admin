/** @type {import('prettier').Config} */
module.exports = {
  // ...require("@alexvyber/prettier-config"),
  endOfLine: "lf",
  printWidth: 100,
  semi: false,
  singleQuote: false,
  arrowParens: "always",
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",

  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "",
    "^@/graphql/(.*)$",
    "",
    "^@/assets/(.*)$",
    "",
    "^[./]",
  ],

  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
}
