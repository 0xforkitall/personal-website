module.exports = {
    extends: ['next/core-web-vitals', '@0xforkitall/eslint-config'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};
