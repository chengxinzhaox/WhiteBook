module.exports = {
    // 基本信息
    title: 'WhiteBook',
    description: 'WhiteBook',
    isbn: '123-456-789',
    author: 'WhiteBook Team',
    lang: 'zh-cn',

    //插件列表
    plugins: ['-lunr', '-search', 'search-plus', '-sharing', 'prism', 'url-embed', 'hints', 'expandable-chapters-small', 'favicon'],

    //插件全局设置
    pluginsConfig: {
        //网站图标
        favicon: {
            "shortcut": "assets/image/gb-favicon.ico",
            "bookmark": "assets/image/gb-favicon.ico",
            "appleTouch": "assets/image/white-icon.png",
            "appleTouchMore": {
                "120x120": "assets/image/white-icon.png",
                "180x180": "assets/image/white-icon.png",
            },
        },
    },

    //模版变量
    variables: {
        "theme": "default"
    },
}