const http=require("http");
const qs=require("querystring")
// let server=http.createServer((req,res)=>{
//     res.writeHead("200",{"Content-type":"text/plain"})
//     res.end("hello node")
// })
// server.listen(8011,"127.0.0.1")
// console.log("node server is good");
// 发送请求
var req=http.request(options,function (res) {
    res.on("data",function (chunk) {
        
    })
    res.on("end",function (params) {
        
    })
})
// 异常
req.on("error",function (e) {
    
})
// 发送数据
req.write(postdata)
// 完成请求
req.end();