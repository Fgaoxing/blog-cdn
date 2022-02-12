function loadQexoFriends(id, url) {
    var uri = url + "/pub/friends/";
    var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';
    document.getElementById(id).className = "friends";
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
                    document.getElementById(id).innerHTML = "<style>* {margin: 0;padding: 0;}*::-webkit-scrollbar {width: 10px;}*::-webkit-scrollbar-thumb {border-radius: 5px;background-color: #d4d4d4;}*::-webkit-scrollbar-thumb :hover {background-color: #b3b3b3;}body {margin: 100px 0;background-position: center;background-size: cover;background-repeat:no-repeat;background-size:100%% 100%; background-attachment: fixed;}a {text-decoration: none;}#card_one {margin-left: 20%;}.card {box-sizing: border-box;margin-top: 20px;margin-right:1vw; margin-left: 3vw;width: 20vw;background: rgba(255, 255, 255, 0.25);box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);backdrop-filter: blur(8.0px);-webkit-backdrop-filter: blur(8.0px);border-radius: 10px;border: 1px solid rgba(255, 255, 255, 0.18);display: inline-block; height: 225px;transition: 0.3s;}.card:hover {box-shadow: 0 8px 39px 0 rgba(0, 0, 0, 0.37);transform: translateY(-10px);}.card-img {height: 160px;overflow: hidden;border-radius: 10px;margin: 2.5px;background-position: center;background-size: cover;}.card-u {padding-top: 10px;height: 45px;position: relative;}.card-u-a {width: 50px;position: absolute;left: 0;top: 10px;}.card-u-avatar {width: 35px;height: 35px;border-radius: 10px;margin: 5px;}.card-u-t {box-sizing: border-box;width: 100%;padding-left: 50px;}.card-u-t-title {color: #000;line-height: 25px;}.card-u-t-text {font-size: 10px;color: #515151e;line-height: 20px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}@media (max-width: 1000px) {.card {width: 40vw !important;}}</style>";
                    for (let i = 0; i < friends.length; i++) {
                        document.getElementById(id).innerHTML += '<div class="card"><a target="_blank" rel="nofollow" href="' + friends[i]["url"] + '" title="' + friends[i]["description"] + '"><div class="card-img" style="background-image: url(https://image.thum.io/get/' + friends[i]["url"] + ');"></div><div class="card-u"><div class="card-u-a"><img class="card-u-avatar" src="' + friends[i]["image"] + '"></div><div class="card-u-t"><b class="card-u-t-title">' + friends[i]["name"] + '</b><p class="card-u-t-text">' + friends[i]["description"] + '</p></div></div></a></div>'
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