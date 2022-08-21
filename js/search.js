var oneSearch = {};
oneSearch.config = {}
oneSearch.event = {};
oneSearch.ui = {}
oneSearch.tool = {};
oneSearch.status = {};
oneSearch.status.display = ["iframe-home"]; // home,tools,navigator,search1,search2,search3,search4
oneSearch.param = {};


oneSearch.init = function (){
    oneSearch.config.loadParam();
    oneSearch.config.loadNavBtn();
    oneSearch.config.loadLayout()
    oneSearch.config.loadKeyword();
    oneSearch.config.loadEngineOpt();
    oneSearch.config.loadSearchBar()
    oneSearch.config.loadSearchBtn();
    oneSearch.config.loadIframe();
    oneSearch.config.updateByParam();
}

oneSearch.ui.hiddenByClass = function (className) {
    let elements = document.getElementsByClassName(className);
    for (const element of elements) {
        element.style.display = "none";
    }
}
oneSearch.ui.resizeFrame = function () {
    let iframeSize = oneSearch.ui.computeIframeSize();
    if (oneSearch.status.layout===1 || oneSearch.status.layout===undefined) {
        let fullIframes = document.getElementsByClassName("iframe-full");
        for (const fullIframe of fullIframes) {
            fullIframe.style.height = iframeSize.height1_1;
        }
    }else if (oneSearch.status.layout===2 || oneSearch.status.layout===3) {
        for (let i = 1; i <=oneSearch.status.layout ; i++) {
            let iframe = document.getElementById("iframe-search"+i);
            iframe.style.height = iframeSize.height1_1;
        }
    }if (oneSearch.status.layout===4) {
        let upIframes = document.getElementsByClassName("iframe-up");
        for (const upIframe of upIframes) {
            upIframe.style.height = iframeSize.height2_1;
        }
        let downIframes = document.getElementsByClassName("iframe-down");
        for (const downIframe of downIframes) {
            downIframe.style.height = iframeSize.height2_2;
        }
    }
}
oneSearch.ui.computeIframeSize = function () {
    return {
        height1_1 : document.documentElement.clientHeight-38 + "px",
        height2_1 : (document.documentElement.clientHeight)/2-19 + "px",
        height2_2 : (document.documentElement.clientHeight)/2-24 + "px",
        width1 : "100%" ,
        width2 : "49.8%" ,
        width3 : "33.1%" ,
    }
}
oneSearch.ui.refreshDansou = function (name) {
    let iframeSize = oneSearch.ui.computeIframeSize();
    let iframeBox = document.getElementById("iframeBox");
    let iframe = document.getElementById(name);
    if (iframe===null) {
        iframe = document.createElement("iframe");
        iframe.setAttribute("id",name);
        iframe.setAttribute("class","iframe iframe-search iframe-full");
        iframe.setAttribute("width",iframeSize.width1);
        iframe.setAttribute("height",iframeSize.height1_1);
        iframe.setAttribute("board","0");

        iframeBox.appendChild(iframe);
    }
    let kw = document.getElementById("kw").value;
    let iframeVersion = parseInt(iframe.getAttribute("version"));

    oneSearch.ui.hiddenByClass("iframe");
    if (isNaN(iframeVersion) || iframeVersion<oneSearch.status.version) {
        iframe.src = oneSearch.tool.getUrl(kw,name.substring(name.indexOf("-","iframe".length+1)+1));
        iframe.setAttribute("version",oneSearch.status.version);
    }
    iframe.style.display = "inline";
    oneSearch.status.display = [name];
    oneSearch.status.dansou = name;
    oneSearch.status.layout = 1;
    return iframe;
}
oneSearch.ui.refreshMultisou = function (layout) {
    let iframes = [];
    iframes[0] = document.getElementById("iframe-search0");
    iframes[1] = document.getElementById("iframe-search1");
    iframes[2] = document.getElementById("iframe-search2");
    iframes[3] = document.getElementById("iframe-search3");
    iframes[4] = document.getElementById("iframe-search4");
    let iframeSize = oneSearch.ui.computeIframeSize();
    if(layout===2) {
        iframes[1].style.height = iframeSize.height1_1;
        iframes[2].style.height = iframeSize.height1_1;
        iframes[1].style.width = iframeSize.width2;
        iframes[2].style.width = iframeSize.width2;
    }else if (layout===3) {
        iframes[1].style.height = iframeSize.height1_1;
        iframes[2].style.height = iframeSize.height1_1;
        iframes[3].style.height = iframeSize.height1_1;
        iframes[1].style.width = iframeSize.width3;
        iframes[2].style.width = iframeSize.width3;
        iframes[3].style.width = iframeSize.width3;
    }else if (layout===4) {
        iframes[1].style.height = iframeSize.height2_1;
        iframes[2].style.height = iframeSize.height2_1;
        iframes[3].style.height = iframeSize.height2_2;
        iframes[4].style.height = iframeSize.height2_2;
        iframes[1].style.width = iframeSize.width2;
        iframes[2].style.width = iframeSize.width2;
        iframes[3].style.width = iframeSize.width2;
        iframes[4].style.width = iframeSize.width2;
    }

    let kw = document.getElementById("kw").value;
    oneSearch.ui.hiddenByClass("iframe");
    for (let i = 1; i <= layout; i++) {
        let iframeVersion = parseInt(iframes[i].getAttribute("version"));
        let key = document.getElementById("search"+i).value;
        if (isNaN(iframeVersion) || iframeVersion<oneSearch.status.version) {
            iframes[i].src = oneSearch.tool.getUrl(kw,key);
            iframes[i].setAttribute("version",oneSearch.status.version);
        }
        iframes[i].style.display = "inline";
        oneSearch.status.display[i] = "iframe-search"+i;
    }
    oneSearch.status.layout = layout;
    return iframes;
}
oneSearch.ui.refreshMultisouOne = function (num) {
    let iframe = document.getElementById("iframe-search"+num);
    let kw = document.getElementById("kw").value;
    let key = document.getElementById("search"+num).value
    iframe.src = oneSearch.tool.getUrl(kw,key);
}
oneSearch.ui.refreshBar = function (layout) {
    if (layout===1) {
        let engine = document.getElementById("engine").value;
        oneSearch.ui.hiddenByClass("search-bar");

        let engineBar = document.getElementById(engine+"Bar");
        if (engineBar==null) oneSearch.config.loadSearchBar(engine);
        else engineBar.style.display="inline";

        document.getElementById("engine").style.display = "inline";
        document.getElementById("searchBox").style.display = "inline";
        for (let i = 1; i <=4 ; i++) {
            document.getElementById("search"+i).style.display = "none";
        }
    }else {
        document.getElementById("engine").style.display = "none";
        document.getElementById("searchBox").style.display = "none";
        for (let i = 1; i <=layout ; i++) {
            document.getElementById("search"+i).style.display = "inline";
        }
        for (let i = layout+1; i <=4 ; i++) {
            document.getElementById("search"+i).style.display = "none";
        }
    }
}

oneSearch.tool.getUrl = function (kw,key) {
    let url = oneSearch.config.searchList[key]["url"];
    url = kw === "" ? oneSearch.config.searchList[key]["search"] : url.replace("{keyword}",kw);
    if (oneSearch.config.searchList[key]["blocked"]===true) url = "./block.html?url="+encodeURI(url)
    return url;
}
oneSearch.tool.refreshHash = function () {
    location.hash = "#!/" + [
        "n" + "/" + oneSearch.param.n,
        "l" + "/" + oneSearch.param.l,
        "k" + "/" + oneSearch.param.k,
        "e" + "/" + oneSearch.param.e,
        "s" + "/" + oneSearch.param.s,
        "s1" + "/" + oneSearch.param.s1,
        "s2" + "/" + oneSearch.param.s2,
        "s3" + "/" + oneSearch.param.s3,
        "s4" + "/" + oneSearch.param.s4
    ].join("/");
}
oneSearch.tool.trim = function(str, ch) {
    let start = 0, end = str.length;
    while(start < end && str[start] === ch)
        ++start;
    while(end > start && str[end - 1] === ch)
        --end;
    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}


oneSearch.event.navClick = function (e) {
    let key = e.target.getAttribute("key");
    oneSearch.ui.hiddenByClass("iframe");
    if (key==="home") {
        // document.getElementById("iframe-home").style.display="inline";
        return location.href = "./";
    }else if (key==="tools") {
        document.getElementById("iframe-tools").style.display="inline";
    }else if (key==="navigator") {
        document.getElementById("iframe-navigator").style.display="inline";
    }
    oneSearch.param["n"] = key;
    oneSearch.tool.refreshHash();
}
oneSearch.event.layoutChange = function (e) {
    let layout = parseInt(e.target.value) ;
    oneSearch.ui.refreshBar(layout);
    if (layout===1) {
        let iframe = oneSearch.ui.refreshDansou(oneSearch.status.dansou);
    }else {
        oneSearch.ui.refreshBar(layout);
        let iframes = oneSearch.ui.refreshMultisou(layout);
    }
    oneSearch.param["l"] = layout;
    oneSearch.tool.refreshHash();
}
oneSearch.event.engineChange = function (e) {
    let engine = e.target.value;
    oneSearch.ui.refreshBar(1);

    let key = document.querySelector("#"+engine+"Bar").firstChild.getAttribute("key");
    let iframe = oneSearch.ui.refreshDansou("iframe-"+engine+"-"+key);
    oneSearch.param["e"] = engine;
    oneSearch.tool.refreshHash();
    oneSearch.status.engine = engine;
}
oneSearch.event.searchClick = function (e) {
    let kw = document.getElementById("kw").value;
    let engine =  document.getElementById("engine").value;
    let layout = parseInt(document.getElementById("layout").value);
    let key = e.target.getAttribute("key");
    if (key==null) {
        key = document.querySelector("#"+engine+"Bar").firstChild.getAttribute("key");
    }
    if (layout===1) {
        let iframe = oneSearch.ui.refreshDansou("iframe-"+engine+"-"+key);
    }else {
        let iframes = oneSearch.ui.refreshMultisou(layout);
    }
    oneSearch.param["k"] = kw;
    oneSearch.param["s"] = key;
    oneSearch.tool.refreshHash();
}
oneSearch.event.searchChange = function (e) {
    let num = parseInt(e.target.getAttribute("num"));
    oneSearch.ui.refreshMultisouOne(num);
    oneSearch.param["s"+num] = e.target.value;
    oneSearch.tool.refreshHash();
}

// #!/n/home/l/1/k/%20/e/general/s/baidu/s1/baidu/s2/baidu/s3/baidu/s4/baidu
// ?n=home&l=1&k=%20&e=general&s=baidu&s1=baidu&s2=baidu&s3=baidu&s4=baidu
oneSearch.config.loadParam = function () {
    let search = location.search;
    let searchs = oneSearch.tool.trim(search.substring(1),"/").split("&");
    for (let i = 0; i < searchs.length; i++) {
        let kv = searchs[i].split("=");
        if (kv[0]==="") continue;
        oneSearch.param[kv[0]] = decodeURI(kv[1]);
    }
    let hash = location.hash;
    let hashs = oneSearch.tool.trim(hash.substring(hash.indexOf("/")+1),"/").split("/");
    for (let i = 0; i < hashs.length; i=i+2) {
        oneSearch.param[hashs[i]]=decodeURI(hashs[i+1]);
    }
    let param = JSON.parse(JSON.stringify(oneSearch.config.param));  ;
    oneSearch.param = Object.assign(param,oneSearch.param);
}
oneSearch.config.updateByParam = function () {
    document.getElementById("layout").value = oneSearch.param["l"];
    document.getElementById("kw").value = oneSearch.param["k"];
    document.getElementById("engine").value = oneSearch.param["e"];
    // document.getElementById("")
    document.getElementById("search1").value = oneSearch.param["s1"];
    document.getElementById("search2").value = oneSearch.param["s2"];
    document.getElementById("search3").value = oneSearch.param["s3"];
    document.getElementById("search4").value = oneSearch.param["s4"];

    // oneSearch.ui.refreshBar(oneSearch.param["l"]);
    oneSearch.ui.hiddenByClass("iframe");
    if (oneSearch.param["n"]!=="search") {
        document.getElementById("iframe-"+oneSearch.param["n"]).style.display = "inline";
    }else {
        let layout = parseInt(oneSearch.param["l"]);
        oneSearch.ui.refreshBar(layout);
        if(layout===1) {
            oneSearch.ui.refreshDansou("iframe-"+oneSearch.param["e"]+"-"+oneSearch.param["s"]);
        }else {
            oneSearch.ui.refreshMultisou(layout);
        }
    }
    oneSearch.tool.refreshHash();
}
oneSearch.config.loadNavBtn = function () {
    let navbtns = document.getElementsByClassName("navbtn")
    for (let navbtn of navbtns) {
        navbtn.onclick = oneSearch.event.navClick;
    }
}
oneSearch.config.loadLayout = function () {
    for (let i = 1; i <=4 ; i++) {
        let searchnElement = document.getElementById("search"+i);
        searchnElement.style.display = "none";
        let iframeElement = document.getElementById("iframe-search"+i);
        iframeElement.style.display = "none";
        for (let key in oneSearch.config.searchList) {
            let option = document.createElement("option");
            option.value = key;
            option.innerText = oneSearch.config.searchList[key]["title"];
            searchnElement.appendChild(option);
        }
        searchnElement.value= oneSearch.config.param["s"+i];
        searchnElement.onchange = oneSearch.event.searchChange;
    }

    let layoutElement = document.getElementById("layout");
    layoutElement.onchange = oneSearch.event.layoutChange;
}
oneSearch.config.loadKeyword = function () {
    let kwElement = document.getElementById("kw");
    kwElement.focus();
    kwElement.onkeyup = function (e) {
        if (e.key === "Enter" || e.keyCode===13) {
            oneSearch.event.searchClick(e);
        }
    }
    oneSearch.status.version = Date.now();
    kwElement.oninput = function () {
        oneSearch.status.version = Date.now();
    }
}
oneSearch.config.loadEngineOpt = function () {
    let engineElement = document.getElementById("engine");

    for (let key in oneSearch.config.cateList) {
        let option = document.createElement("option");
        option.value = key;
        option.innerText = oneSearch.config.cateList[key]["title"];
        engineElement.appendChild(option);
    }

    engineElement.onchange = oneSearch.event.engineChange;
}
oneSearch.config.loadSearchBar = function (engine) {
    let searchBoxElement = document.getElementById("searchBox");
    if (engine === undefined) engine = oneSearch.param["e"];
    let spanElement = document.createElement("span");
    spanElement.setAttribute("id",engine+"Bar");
    spanElement.setAttribute("class","search-bar");
    let first = null;
    for (let key in oneSearch.config.cateList[engine]["items"]) {
        let btnElement = document.createElement("input");
        btnElement.value = oneSearch.config.searchList[key]["title"];
        btnElement.setAttribute("key",key);
        btnElement.setAttribute("type","button");
        btnElement.setAttribute("class","btn btn-outline-dark btn-sm");
        spanElement.appendChild(btnElement);
        btnElement.onclick = oneSearch.event.searchClick;
        if (first==null) first = key;
    }
    let btns = spanElement.getElementsByClassName("btn");
    if (btns.length===0) spanElement.innerText = "此分类搜索正在建设中,请稍后再来..."
    searchBoxElement.appendChild(spanElement);
    oneSearch.status.dansou = "iframe-"+engine+"-"+first;
}
oneSearch.config.loadSearchBtn = function () {
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = oneSearch.event.searchClick;
}
oneSearch.config.loadIframe = function () {

    let fullIframes = document.getElementsByClassName("iframe-full")
    for (const fullIframe of fullIframes) {
        fullIframe.style.height = oneSearch.ui.computeIframeSize().height1_1;
    }

    oneSearch.ui.resizeFrame();
    window.onresize = oneSearch.ui.resizeFrame;
}



