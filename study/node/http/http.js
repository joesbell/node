var http=require("http");

let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("hello wrold")
})
server.listen(3044,"127.0.0.1")
console.log("server is running")