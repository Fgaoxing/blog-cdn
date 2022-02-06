//判断是国家公祭日12.13，加载css样式。
(function () {
    var date=new Date();
    var month =date.getMonth();//0~11
    var day = date.getDate();//1-31

    if(month===11&&day===13){
        var styleNode = document.createElement('style');
        styleNode['type'] = 'text/css' ;
        var cssText = `
           html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
}
        `;

        if(styleNode.styleSheet){
            styleNode.styleSheet.cssText = cssText;
        }
        else{
            styleNode.appendChild(document.createTextNode(cssText));
        }

        var head = document.getElementsByTagName('head')[0] ;
        head.appendChild(styleNode);
    }
})();
//判断是春节，显示小灯笼
(function () {
    var date=new Date();
    var month =date.getMonth();//0~11
    var day = date.getDate();//1-31

    if(month<2){
        var styleNode = document.createElement('script');
        styleNode['src'] = 'https://api.vvhan.com/api/denglong' ;
        var cssText = `
`;

        if(styleNode.styleSheet){
            styleNode.styleSheet.cssText = cssText;
        }
        else{
            styleNode.appendChild(document.createTextNode(cssText));
        }

        var head = document.getElementsByTagName('head')[0] ;
        head.appendChild(styleNode);
    }
})();
