// import http from 'http'
var http = require("http");
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Conten-type":"text/plain"})
    res.end("hello,nodejs")
    
})
server.listen(8012,"127.0.0.1")
console.log("server running")