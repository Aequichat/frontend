module.exports = {
    env: {
        node: true,
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: ['error', 4]
    },
};
