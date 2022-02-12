function MirrorProtection(url) {
	var uri = window.location.href;
	console.log();
	if (uri.includes(url)) {
	console.log('网址验证成功');
	}else{
	console.log('发现镜像站！！！');
	window.location.href='https://www.yt-blog.top/MirrorProtection/?url='+url+'&uri='+uri;
}
};
