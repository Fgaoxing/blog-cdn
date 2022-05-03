function walinelast(id, url, count) {
    var uri = url + '/comment?type=recent&count='+count;
    var loadStyle = '<center><div class="waline_loading"><div class="waline_part"><div style="display: flex; justify-content: center"><div class="waline_loader"><div class="waline_inner one"></div><div class="waline_inner two"></div><div class="waline_inner three"></div></div></div></div><p style="text-align: center; display: block">最近评论加载中...</p></div><center>';
    document.getElementById(id).className = "recent-comments-list";
    document.getElementById(id).innerHTML = loadStyle;
    //GET请求fetch(url)
    fetch(uri)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            var html = '';
            for (var i = 0; i < json.length; i++) {
                html += '<li class="recent-comments"><div class="recent-comments-left"><a href="'+json[i].link+'" style="text-decoration: none;"><div class="avatar"><img class="avatar" id="avatar" src="'+json[i].avatar+'"></div><span class="name">'+json[i].nick+'</span></a></div><div class="recent-comments-right"><div class="text" style="word-wrap:break-word"><p>'+json[i].comment+'</p></div><div class="vmeta" aria-hidden="true"><span>'+json[i].insertedAt.split('T')[0]+'</span><span>'+json[i].browser+'</span><span>'+json[i].os+'</span></div></div></li><hr>';
            }
            document.getElementById(id).innerHTML = html;
        })
        .catch(function (e) {
            alert('最近评论加载失败，请刷新页面重试！');
        });
}
