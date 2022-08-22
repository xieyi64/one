

oneSearch.config.searchList = {
    //搜索引擎
    "baidu": {
        "icon": "",
        "title": "百度",
        "index": "https://www.baidu.com/",
        "search": "https://www.baidu.com/",
        "url": "https://www.baidu.com/s?wd={keyword}",
    },
    "google": {
        "icon": "",
        "title": "谷歌",
        "index": "https://www.google.com/",
        "search": "https://www.google.com/",
        "url": "https://www.google.com/?q={keyword}",
    },
    "so": {
        "icon": "",
        "title": "360",
        "index": "https://www.so.com/",
        "search": "https://www.so.com/",
        "url": "https://www.so.com/s?q={keyword}",
    },
    "sogou": {
        "icon": "",
        "title": "搜狗",
        "index": "https://sogou.com/",
        "search": "https://sogou.com/",
        "url": "https://sogou.com/web?query={keyword}",
    },
    "f": {
        "icon": "",
        "title": "F",
        "description": "国内无广告搜索引擎",
        "index": "https://fsoufsou.com/",
        "search": "https://fsoufsou.com/",
        "url": "https://fsoufsou.com/search?q={keyword}",
    },
    "bing": {
        "icon": "",
        "title": "必应",
        "index": "https://www.bing.com/",
        "search": "https://www.bing.com/",
        "url": "https://www.bing.com/search?ensearch=1&q={keyword}",
    },
    "yandex": {
        "icon": "",
        "title": "Yandex",
        "description": "俄罗斯搜索引擎",
        "index": "https://yandex.com/",
        "search": "https://yandex.com/",
        "url": "https://yandex.com/search/?text={keyword}",
    },
    "duckduckgo": {
        "icon": "",
        "title": "DuckDuckGo",
        "description": "不追踪隐私的搜索引擎",
        "index": "https://duckduckgo.com/",
        "search": "https://duckduckgo.com/",
        "url": "https://duckduckgo.com/?q={keyword}",
    },
    "qwant": {
        "icon": "",
        "title": "Qwant",
        "description": "法国搜索引擎",
        "index": "https://www.qwant.com/",
        "search": "https://www.qwant.com/",
        "url": "https://www.qwant.com/?q={keyword}",
    },
    //技术搜索
    "baidu-csdn": {
        "icon": "",
        "title": "百度-CSDN",
        "index": "https://www.baidu.com/",
        "search": "https://www.baidu.com/",
        "url": "https://www.baidu.com/s?wd={keyword}%20-csdn",
    },
    "google-csdn": {
        "icon": "",
        "title": "谷歌-CSDN",
        "index": "https://www.google.com/",
        "search": "https://www.google.com/",
        "url": "https://www.google.com/?q={keyword}%20-csdn",
    },
    "github": {
        "icon": "",
        "title": "github",
        "index": "https://github.com/",
        "search": "https://github.com/search/advanced",
        "url": "https://github.com/search?s=stars&q={keyword}",
        "blocked": true
    },
    "stackoverflow":{
        "icon": "",
        "title": "StackOverFlow",
        "index": "https://stackoverflow.com/",
        "search": "https://stackoverflow.com/search",
        "url": "https://stackoverflow.com/search?q={keyword}",
    },
    //资讯搜索
    "zhihu": {
        "icon": "",
        "title": "知乎",
        "index": "https://www.zhihu.com/",
        "search": "https://www.zhihu.com/search",
        "url": "https://www.zhihu.com/search?q={keyword}",
        "blocked": true
    },
    "weixin-article": {
        "icon": "",
        "title": "微信",
        "index": "https://weixin.sogou.com/",
        "search": "https://weixin.sogou.com/",
        "url": "https://weixin.sogou.com/weixin?type=2&query={keyword}",
    },
    "weixin-account": {
        "icon": "",
        "title": "微信号",
        "index": "https://weixin.sogou.com/",
        "search": "https://weixin.sogou.com/",
        "url": "https://weixin.sogou.com/weixin?type=1&query={keyword}",
    },
    "toutiao": {
        "icon": "",
        "title": "头条",
        "index": "https://toutiao.com/",
        "search": "https://so.toutiao.com/",
        "url": "https://so.toutiao.com/search?keyword={keyword}",
        "blocked": true
    },
    "36kr": {
        "icon": "",
        "title": "36氪",
        "index": "https://36kr.com/",
        "search": "https://36kr.com/search/articles/%20",
        "url": "https://36kr.com/search/articles/{keyword}",
        "blocked": true
    },
    //视频搜索
    "tx-video": {
        "icon": "",
        "title": "腾讯视频",
        "index": "https://v.qq.com/",
        "search": "https://v.qq.com/x/search",
        "url": "https://v.qq.com/x/search/?q={keyword}",
    },
    "iqiyi": {
        "icon": "",
        "title": "爱奇艺",
        "index": "https://www.iqiyi.com/",
        "search": "https://so.iqiyi.com/",
        "url": "https://so.iqiyi.com/so/q_{keyword}",
    },
    "youku": {
        "icon": "",
        "title": "优酷",
        "index": "https://youku.com/",
        "search": "https://so.youku.com/search_video/q_%20",
        "url": "https://so.youku.com/search_video/q_{keyword}",
    },
    "mgtv": {
        "icon": "",
        "title": "芒果TV",
        "index": "https://www.mgtv.com/",
        "search": "https://so.mgtv.com/",
        "url": "https://so.mgtv.com/so?k={keyword}",
    },
    "bilibili": {
        "icon": "",
        "title": "B站",
        "index": "https://www.bilibili.com/",
        "search": "https://search.bilibili.com/",
        "url": "https://search.bilibili.com/all?keyword={keyword}",
    },
    "youtube":{
        "icon": "",
        "title": "Youtube",
        "index": "https://www.youtube.com/",
        "search": "https://www.youtube.com/results",
        "url": "https://www.youtube.com/results?search_query={keyword}",
    },
    "douyin":{
        "icon": "",
        "title": "抖音",
        "index": "https://www.douyin.com/",
        "search": "https://www.douyin.com/search/",
        "url": "https://www.douyin.com/search/{keyword}",
    },
    //软件搜索
    "baoku360": {
        "icon": "",
        "title": "软件管家",
        "index": "http://baoku.360.cn/",
        "search": "https://baoku.360.cn/soft/search",
        "url": "http://baoku.360.cn/soft/search?kw={keyword}",
    },
    "yingyongbao": {
        "icon": "",
        "title": "应用宝",
        "index": "https://webcdn.m.qq.com/webapp/homepage/index.html#/",
        "search": "https://webcdn.m.qq.com/webapp/homepage/index.html#/",
        "url": "https://webcdn.m.qq.com/webapp/homepage/index.html#/appSearch?kw={keyword}",
    },
    "play": {
        "icon": "",
        "title": "Play",
        "index": "https://play.google.com/store/apps",
        "search": "https://play.google.com/store/search?c=apps",
        "url": "https://play.google.com/store/search?q={keyword}",
    },
    "mstore": {
        "icon": "",
        "title": "微软商店",
        "index": "https://apps.microsoft.com/store/apps",
        "search": "https://apps.microsoft.com/store/search/",
        "url": "https://apps.microsoft.com/store/search/{keyword}",
    },
    "appinn": {
        "icon": "",
        "title": "小众软件",
        "index": "https://www.appinn.com/",
        "search": "https://www.appinn.com/",
        "url": "https://www.appinn.com/?s={keyword}",

    },
    //游戏搜索:
    "taptap" : {
        "icon": "",
        "title": "TapTap",
        "index": "https://www.taptap.com/",
        "search": "https://www.taptap.com/search/",
        "url": "https://www.taptap.com/search/{keyword}",
    },
    "gamersky": {
        "icon": "",
        "title": "游民星空",
        "index": "https://www.gamersky.com/",
        "search": "https://so.gamersky.com/",
        "url": "https://so.gamersky.com/?s={keyword}",
    },
    "steam": {
        "icon": "",
        "title": "Steam",
        "index": "https://store.steampowered.com/",
        "search": "https://store.steampowered.com/search/",
        "url": "https://store.steampowered.com/search/?term={keyword}",
    },
    //购物搜索
    "taobao": {
        "icon": "",
        "title": "淘宝",
        "index": "https://www.taobao.com/",
        "search": "https://s.taobao.com/",
        "url": "https://s.taobao.com/search?q={keyword}",
    },
    "jd": {
        "icon": "",
        "title": "京东",
        "index": "https://www.jd.com/",
        "search": "https://search.jd.com/",
        "url": "https://search.jd.com/Search?keyword={keyword}",
    },
    "tmall":{
        "icon": "",
        "title": "天猫",
        "index": "https://www.tmall.com/",
        "search": "https://www.tmall.com/",
        "url": "https://list.tmall.com/search_product.htm?q={keyword}",
    },
    "xiaomi":{
        "icon": "",
        "title": "小米",
        "index": "https://www.mi.com/shop",
        "search": "https://www.mi.com/shop/search",
        "url": "https://www.mi.com/shop/search?keyword={keyword}",
    },
    "huawei":{
        "icon": "",
        "title": "华为",
        "index": "https://www.vmall.com/",
        "search": "https://www.vmall.com/portal/search/#/",
        "url": "https://www.vmall.com/portal/search/?searchWord={keyword}",
    },
    "smzdm":{
        "icon": "",
        "title": "什么值得买",
        "index": "https://www.smzdm.com/",
        "search": "https://search.smzdm.com/",
        "url": "https://search.smzdm.com/?s={keyword}",
    },
    "amazon":{
        "icon": "",
        "title": "亚马逊",
        "index": "https://www.amazon.com/",
        "search": "https://www.amazon.com/",
        "url": "https://www.amazon.com/s?k={keyword}",
    },
    //生活搜索
    "meituan":{
        "icon": "",
        "title": "美团",
        "index": "https://meituan.com/",
        "search": "https://meituan.com/s/",
        "url": "https://meituan.com/s/{keyword}/",
    },
    "dianping":{
        "icon": "",
        "title": "点评",
        "index": "https://www.dianping.com/",
        "search": "https://www.dianping.com/search/keyword",
        "url": "https://www.dianping.com/search/keyword/344/0_{keyword}",
    },
    "kuaidi100":{
        "icon": "",
        "title": "快递",
        "index": "https://www.kuaidi100.com/",
        "search": "https://www.kuaidi100.com/",
        "url": "https://www.kuaidi100.com/",
    },
    "gaodemap":{
        "icon": "",
        "title": "高德",
        "index": "https://www.amap.com/",
        "search": "https://www.amap.com/",
        "url": "https://www.amap.com/search?query={keyword}",
    },
    "baidumap":{
        "icon": "",
        "title": "百度地图",
        "index": "https://map.baidu.com/",
        "search": "https://map.baidu.com/",
        "url": "https://map.baidu.com/search/{keyword}/",
    },
    "gugemap":{
        "icon": "",
        "title": "谷歌地图",
        "index": "https://www.google.com/maps",
        "search": "https://www.google.com/maps",
        "url": "https://www.google.com/maps?q={keyword}",
    },
    "mafengwo":{
        "icon": "",
        "title": "马蜂窝",
        "index": "https://www.mafengwo.cn/",
        "search": "https://www.mafengwo.cn/",
        "url": "https://www.mafengwo.cn/search/q.php?q={keyword}",
    },
    "qyer":{
        "icon": "",
        "title": "穷游",
        "index": "https://www.qyer.com/",
        "search": "https://search.qyer.com/qp/",
        "url": "https://search.qyer.com/qp/?keyword={keyword}",
    },
    //音乐搜索
    "yqq":{
        "icon": "",
        "title": "qq音乐",
        "index": "https://y.qq.com/",
        "search": "https://y.qq.com/n/ryqq/search",
        "url": "https://y.qq.com/n/ryqq/search?w={keyword}",
    },
    "applemusic":{
        "icon": "",
        "title": "苹果音乐",
        "index": "https://music.apple.com/",
        "search": "https://music.apple.com/cn/search",
        "url": "https://music.apple.com/cn/search?term={keyword}",
    },
    "music163":{
        "icon": "",
        "title": "网易云音乐",
        "index": "https://music.163.com/",
        "search": "https://music.163.com/#/search",
        "url": "https://music.163.com/#/search/m/?s={keyword}",
    },
    "kugou":{
        "icon": "",
        "title": "酷狗音乐",
        "index": "https://www.kugou.com/",
        "search": "https://www.kugou.com/yy/html/search.html#searchKeyWord=",
        "url": "https://www.kugou.com/yy/html/search.html#searchKeyWord={keyword}",
    },
    "kuwo":{
        "icon": "",
        "title": "酷我",
        "index": "http://www.kuwo.cn/",
        "search": "https://www.kuwo.cn/search/list?key=",
        "url": "http://www.kuwo.cn/search/list?key={keyword}",
    },
    //百科翻译
    "wikipedia":{
        "icon": "",
        "title": "维基",
        "index": "https://www.wikipedia.org/",
        "search": "https://zh.wikipedia.org/",
        "url": "https://zh.wikipedia.org/wiki/{keyword}",
    },
    "qcc": {
        "icon": "",
        "title": "企查查",
        "index": "https://www.qcc.com/",
        "search": "https://www.qcc.com/",
        "url": "https://www.qcc.com/web/search?key={keyword}",
        "blocked":true
    },
    "mbalib": {
        "icon": "",
        "title": "MBA智库",
        "index": "https://www.mbalib.com/",
        "search": "https://www.mbalib.com/",
        "url": "https://www.mbalib.com/s?q={keyword}",
    },
    "youdao": {
        "icon": "",
        "title": "有道",
        "index": "https://youdao.com/",
        "search": "https://youdao.com/",
        "url": "https://youdao.com/result?lang=en&word={keyword}",
    },
    "tsgg":{
        "icon": "",
        "title": "谷歌翻译",
        "index": "https://translate.google.cn/",
        "search": "https://translate.google.cn/",
        "url": "https://translate.google.cn/?text={keyword}",
    },
    //社区搜索
    "douban":{
        "icon": "",
        "title": "豆瓣",
        "index": "https://www.douban.com/",
        "search": "https://www.douban.com/search",
        "url": "https://www.douban.com/search?q={keyword}",
    },
    "weibo":{
        "icon": "",
        "title": "微博",
        "index": "https://weibo.com/",
        "search": "https://s.weibo.com/",
        "url": "https://s.weibo.com/weibo?q={keyword}",
    },
}

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
        "items": {"baidu":{},"google":{},"bing":{},"sogou":{},"so":{},"weixin-article":{},"bilibili":{}}
    },
    "tech": {
        "icon": "",
        "title": "技术搜索",
        "items": {"baidu-csdn":{},"google-csdn":{},"weixin-article":{},"github":{},"bilibili":{},"stackoverflow":{}}
    },
    "info": {
        "icon": "",
        "title": "资讯搜索",
        "items": {"baidu":{},"google":{},"toutiao":{},"weixin-article":{},"36kr":{},"zhihu":{},"weixin-account": {
                "icon": "",
                "title": "微信号",
                "index": "https://weixin.sogou.com/",
                "search": "https://weixin.sogou.com/",
                "url": "https://weixin.sogou.com/weixin?type=1&query={keyword}",
            }}
    },
    "video": {
        "icon": "",
        "title": "影视搜索",
        "items": {"tx-video":{},"iqiyi":{},"youku":{},"mgtv":{},"bilibili":{},"youtube":{},"douyin":{}}
    },
    "material": {
        "icon": "",
        "title": "素材搜索",
        "items": {"baidu":{}}
    },
    "software": {
        "icon": "",
        "title": "软件搜索",
        "items": {"baidu":{},"baoku360":{},"yingyongbao":{},"play":{},"mstore":{},"appinn":{}}
    },
    "data": {
        "icon": "",
        "title": "数据搜索",
        "items": {"baidu":{}}
    },
    "shopping": {
        "icon": "",
        "title": "购物搜索",
        "items": {"taobao":{},"jd":{},"tmall":{},"xiaomi":{},"huawei":{},"smzdm":{},"amazon":{}}
    },
    "scholar": {
        "icon": "",
        "title": "学术搜索",
        "items": {"baidu":{}}
    },
    "music": {
        "icon": "",
        "title": "音乐搜索",
        "items": {"baidu":{},"yqq":{},"applemusic":{},"music163":{},"kugou":{},"kuwo":{}}
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
        "items": {"baidu":{},"douban":{},"weibo":{}}
    },
    "life": {
        "icon": "",
        "title": "生活搜索",
        "items": {"meituan":{},"dianping":{},"kuaidi100":{},"gaodemap":{},"baidumap":{},"gugemap":{},"mafengwo":{},"qyer":{}}
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
        "items": {"baidu":{},"taptap":{},"gamersky":{},"steam":{}}
    },
    "custom": {
        "icon": "",
        "title": "自定义搜索",
        "items": {"baidu":{},"qcc":{},"youdao":{},"mbalib":{},"weixin-account":{},"wikipedia":{},"tsgg":{}}
    },
}