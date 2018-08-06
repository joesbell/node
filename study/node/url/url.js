const url=require("url")
// 解析
let urlparams = url.parse("https://www.imooc.com/video/6710?id='2154'&token='1545232'",true)
console.log(urlparams);
let fullUrl = url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.imooc.com',
    port: null,
    hostname: 'www.imooc.com',
    hash: null,
    search: '?id=%272154%27&token=%271545232%27',
    query: { id: '\'2154\'', token: '\'1545232\'' },
    pathname: '/video/6710',
    path: '/video/6710?id=%272154%27&token=%271545232%27',
    href:
        'https://www.imooc.com/video/6710?id=%272154%27&token=%271545232%27'
},true)
console.log(fullUrl)