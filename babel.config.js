module.exports = {
  plugins: ['@vue/babel-plugin-jsx'],

  presets: ['@vue/app'],
    plugins: [
        [
            "import",
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    name = name.slice(3)
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
            },
        ],
    ],  

};
