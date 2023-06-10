module.exports = {
  extends: ["@0xforkitall/eslint-config", "next/core-web-vitals"],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
