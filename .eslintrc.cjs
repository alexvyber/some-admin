module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  "root": true,
  ignorePatterns: ["**/__generated__/*"],
  root: true,
  extends: [
    "next/core-web-vitals",
    // "turbo",
    "prettier",
    "plugin:tailwindcss/recommended",
    // "@alexvyber/eslint-config/react",
  ],
  plugins: ["tailwindcss"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "cx"],
      config: "tailwind.config.ts",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
}
