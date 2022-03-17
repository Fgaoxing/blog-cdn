function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<center><div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div><center>';
    document.getElementById(id).className = "friend-content";
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
                        document.getElementById(id).innerHTML += '<a class="friend-card" target="_blank" rel="external noopener friend" href="' + friends[i]["url"] + '" title="' + friends[i]["description"] + '"><div class="friend-left"><img class="avatar" src="' + friends[i]["image"] + '" alt="哎呀，图片丢了" height="60" width="60"></div><div class="friend-right"><p class="friend-name">' + friends[i]["name"] + '</p><div class="friend-tags-wrapper"><p class="tags">' + friends[i]["description"] + '</p></div></div></a>'; 
                    }
                    document.getElementById(id).innerHTML += '<br>';
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
