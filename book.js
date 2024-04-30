module.exports = {
    // 基本信息
    title: 'My Book',
    description: 'A book about something',
    isbn: '123-456-789',
    author: 'WhiteBook',
    lang: 'zh-cn',

    //插件列表
    plugins: ['-lunr', '-search', '-sharing', 'prism', 'url-embed', 'hints'],

    //插件全局设置
    pluginsConfig: {},

    //模版变量
    variables: {
        "theme": "default"
    },
}