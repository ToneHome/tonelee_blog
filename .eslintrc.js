module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        // '@nuxtjs',
        'plugin:nuxt/recommended',
        // 'plugin:prettier/recommended',
        // 'prettier',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        // 'nuxt/no-cjs-in-config': 'off',
        indent: ['off', 2], // 4个空格缩进
        /* 更多配置请戳 http://eslint.cn/docs/rules/ */
    },
}
