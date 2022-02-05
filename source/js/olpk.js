function lolinpike(id) {
    var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">数据获取中...</p></div>';
    document.getElementById(id).className = "olpk";
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
    ajax.open("get", "http://apia.yikeapi.com/olympic/?appid=43656176&appsecret=I42og6Lm", true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var res = JSON.parse(ajax.response);
                if (res["errcode"] === 0) {
                    var list = res["list"];
                    document.getElementById(id).innerHTML = "<style>div#olpk {border-radius: .75rem;padding-right: 10px;padding-left: 10px;margin-left: auto;padding-left: 20px;padding-right: 20px;webkit-box-sizing: border-box;moz-box-sizing: border-box;box-sizing: border-box;display: block;}div#cards {border-radius: .75rem;padding-right: 10px;padding-left: 10px;margin-left: auto;padding-left: 20px;padding-right: 20px;webkit-box-sizing: border-box;moz-box-sizing: border-box;box-sizing: border-box;display: block;border-radius: 10px;background: #ffffff;box-shadow: 15px 15px 25px #a9a8a8, -15px -15px 25px #ffffff;margin-right: auto;margin-left: auto;box-sizing: border-box;padding-left: 20px;padding-right: 20px;padding-top: 5px;padding-bottom: 5px;}img.flag {border-radius: 5px;width: 70;height: 47;}.header {font-size: 16px;line-height: 22px;}h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {color: #363b40;font-weight: 500;}h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, " + "h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {font-weight: normal;line-height: 1;color: #777;font-size: 85%;padding: 3px 0 0 0;color: #919699;font-size: 12px;font-weight: 300;text-transform: none;}.card {height: 189px;}<style>";
                    for (let i = 0; i < list.length; i++) {
                        document.getElementById(id).innerHTML += '<div id="cards" class="card"><div class="i"> <div class="panel panel-block panel-block-sm panel-location"><div class="header"> <h3 class="name"><img class="flag" src="' + list[i]['flag'] + '"> ' + list[i]['country'] + ' <small>' + list[i]['country_en'] + '</small></h3></div><ul class="jingpai">     <li><span>金牌:' + list[i]['jin'] + '</span></li>        <li><span>银牌:' + list[i]['yin'] + '</span></li><li><span>铜牌:' + list[i]['tong'] + '</span></li></ul>  </div> </div></div><br>'; 
                    }
                        document.getElementById(id).innerHTML += '<footer><!-----------  footer-----------><center><p>' + list[i]['update_time'] + '</p></center></footer>'
                } else {
    document.getElementById(id).innerHTML = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">获取失败...</p></div>';
                }
            } else {
    document.getElementById(id).innerHTML = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">加载失败...</p></div>';
            }
        }
    };
    ajax.send(null);
}