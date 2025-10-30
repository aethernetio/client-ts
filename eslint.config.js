module.exports = {
  files: ["src/**/*.ts", "src/**/*.tsx"],
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: {
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin")
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "warn"
  }
};
