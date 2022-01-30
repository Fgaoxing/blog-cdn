function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';
    document.getElementById(id).className = "list entry navigation";
    document.getElementById(id).innerHTML = loadStyle;
    var ajax;
    try {
        // Firefox, Opera 8.0+, Safari
        ajax = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("糟糕,你的浏览器不能上传文件!");
                return false;
            }
        }
    }
    ajax.open("get", uri, true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var res = JSON.parse(ajax.response);
                if (res["status"]) {
                    var friends = res["data"];
                    document.getElementById(id).innerHTML = "";
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += '<li><a class="flat-box" title="' + friends[i]["description"] + '" target="_blank" rel="noopener" href="' + friends[i]["url"] + '" active-action="action-' + friends[i]["url"] + '"><div class="name"><img class="lazyload loaded" alt="哎呀，图片丢了" src="' + friends[i]["image"] + '" srcset="' + friends[i]["image"] + '" data-ll-status="loaded" height="20" width="20">' + friends[i]["name"] + '</div></a></li>'; 
                    }
                } else {
                    alert("友链载入失败!");
                }
            } else {
                alert("友链获取失败!");
            }
        }
    };
    ajax.send(null);
}