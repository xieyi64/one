

oneSearch.config.searchList = {
    "baidu": {
        "icon": "",
        "title": "百度",
        "home": "https://www.baidu.com/",
        "url": "https://www.baidu.com/s?wd={keyword}",
    },
    "baidu-csdn": {
        "icon": "",
        "title": "百度-CSDN",
        "home": "https://www.baidu.com/",
        "url": "https://www.baidu.com/s?wd={keyword}%20-csdn",
    },
    "google": {
        "icon": "",
        "title": "谷歌",
        "home": "https://www.google.com/",
        "url": "https://www.google.com/?q={keyword}",
    },
    "google-csdn": {
        "icon": "",
        "title": "谷歌-CSDN",
        "home": "https://www.google.com/",
        "url": "https://www.google.com/?q={keyword}%20-csdn",
    },
    "zhihu": {
        "icon": "",
        "title": "知乎",
        "home": "https://www.zhihu.com/",
        "url": "https://www.zhihu.com/search?q={keyword}",
    },
    "weixin-article": {
        "icon": "",
        "title": "微信",
        "home": "https://weixin.sogou.com/",
        "url": "https://weixin.sogou.com/weixin?type=2&query={keyword}",
    },
    "weixin-account": {
        "icon": "",
        "title": "微信号",
        "home": "https://weixin.sogou.com/",
        "url": "https://weixin.sogou.com/weixin?type=1&query={keyword}",
    },
    "bing": {
        "icon": "",
        "title": "必应",
        "home": "https://www.bing.com/",
        "url": "https://www.bing.com/search?ensearch=1&q={keyword}",
    },
    "toutiao": {
        "icon": "",
        "title": "头条",
        "home": "https://toutiao.com/",
        "url": "https://so.toutiao.com/search?keyword={keyword}",
    },
    "github": {
        "icon": "",
        "title": "github",
        "home": "https://github.com/",
        "url": "https://github.com/search?s=stars&q={keyword}",
    },
    "bilibili": {
        "icon": "",
        "title": "B站",
        "home": "https://www.bilibili.com/",
        "url": "https://search.bilibili.com/all?keyword={keyword}",
    },
    "tx-video": {
        "icon": "",
        "title": "腾讯视频",
        "home": "https://v.qq.com/",
        "url": "https://v.qq.com/x/search/?q={keyword}",
    },
    "iqiyi": {
        "icon": "",
        "title": "爱奇艺",
        "home": "https://www.iqiyi.com/",
        "url": "https://so.iqiyi.com/so/q_{keyword}",
    },
    "youku": {
        "icon": "",
        "title": "优酷",
        "home": "https://youku.com/",
        "url": "https://so.youku.com/search_video/q_{keyword}",
    },
    "mgtv": {
        "icon": "",
        "title": "芒果TV",
        "home": "https://www.mgtv.com/",
        "url": "https://so.mgtv.com/so?k={keyword}",
    },
    "taobao": {
        "icon": "",
        "title": "淘宝",
        "home": "https://www.taobao.com/",
        "url": "https://s.taobao.com/search?q={keyword}",
    },
    "jd": {
        "icon": "",
        "title": "京东",
        "home": "https://www.jd.com/",
        "url": "https://search.jd.com/Search?keyword={keyword}",
    },
    "so": {
        "icon": "",
        "title": "360",
        "home": "https://www.so.com/",
        "url": "https://www.so.com/s?q={keyword}",
    },
    "sogou": {
        "icon": "",
        "title": "搜狗",
        "home": "https://sogou.com/",
        "url": "https://sogou.com/web?query={keyword}",
    },
    "36kr": {
        "icon": "",
        "title": "36氪",
        "home": "https://36kr.com/",
        "url": "https://36kr.com/search/articles/{keyword}",
    },
    "qcc": {
        "icon": "",
        "title": "企查查",
        "home": "https://www.qcc.com/",
        "url": "https://www.qcc.com/web/search?key={keyword}",
    },
    "youdao": {
        "icon": "",
        "title": "有道",
        "home": "https://youdao.com/",
        "url": "https://youdao.com/result?lang=en&word={keyword}",
    },
    "mbalib": {
        "icon": "",
        "title": "MBA智库",
        "home": "https://www.mbalib.com/",
        "url": "https://www.mbalib.com/s?q={keyword}",
    }
}

// "baidu","baidu-csdn","google","google-csdn","zhihu","weixin-article","weixin-account","bing","toutiao","github","bilibili","tx-video","iqiyi","youku","mgtv","taobao","jd","so","sogou","36kr","qcc","youdao","mbalib"

oneSearch.config.param = {
    "n":"home",
    "l":"1",
    "k":"",
    "e":"general",
    "s":"baidu",
    "s1":"baidu",
    "s2":"google",
    "s3":"bing",
    "s4":"sogou",
};
oneSearch.config.cateList = {
    "general": {
        "icon": "",
        "title": "综合搜索",
        "items": {"baidu":{},"google":{},"bing":{},"sogou":{},"so":{},"toutiao":{},"zhihu":{},"weixin-article":{},"bilibili":{}}
    },
    "tech": {
        "icon": "",
        "title": "技术搜索",
        "items": {"baidu-csdn":{},"google-csdn":{},"zhihu":{},"weixin-article":{},"toutiao":{},"github":{},"bilibili":{}}
    },
    "info": {
        "icon": "",
        "title": "资讯搜索",
        "items": {"baidu":{},"google":{},"toutiao":{},"weixin-article":{},"36kr":{}}
    },
    "video": {
        "icon": "",
        "title": "影视搜索",
        "items": {"tx-video":{},"iqiyi":{},"youku":{},"mgtv":{},"bilibili":{}}
    },
    "material": {
        "icon": "",
        "title": "素材搜索",
        "items": {"baidu":{}}
    },
    "software": {
        "icon": "",
        "title": "软件搜索",
        "items": {"baidu":{}}
    },
    "data": {
        "icon": "",
        "title": "数据搜索",
        "items": {"baidu":{}}
    },
    "shopping": {
        "icon": "",
        "title": "购物搜索",
        "items": {"taobao":{},"jd":{}}
    },
    "apk": {
        "icon": "",
        "title": "安卓搜索",
        "items": {"baidu":{}}
    },
    "scholar": {
        "icon": "",
        "title": "学术搜索",
        "items": {"baidu":{}}
    },
    "music": {
        "icon": "",
        "title": "音乐搜索",
        "items": {"baidu":{}}
    },
    "document": {
        "icon": "",
        "title": "文档搜索",
        "items": {"baidu":{}}
    },
    "book": {
        "icon": "",
        "title": "图书搜索",
        "items": {"baidu":{}}
    },
    "social": {
        "icon": "",
        "title": "社区搜索",
        "items": {"baidu":{}}
    },
    "life": {
        "icon": "",
        "title": "生活搜索",
        "items": {"baidu":{}}
    },
    "novel": {
        "icon": "",
        "title": "小说搜索",
        "items": {"baidu":{}}
    },
    "cartoon": {
        "icon": "",
        "title": "动漫搜索",
        "items": {"baidu":{}}
    },
    "game": {
        "icon": "",
        "title": "游戏搜索",
        "items": {"baidu":{}}
    },
    "custom": {
        "icon": "",
        "title": "自定义搜索",
        "items": {"baidu":{},"qcc":{},"youdao":{},"mbalib":{},"weixin-account":{}}
    },
}