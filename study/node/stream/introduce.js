let fs=require("fs")
let readstream=fs.createReadStream("video.mp4")
let x="data";
let n=0;
readstream
    .on("data",function (chunk) {
        n++;
        console.log(`${x} emits`);
        console.log(Buffer.isBuffer(chunk));
        console.log(chunk);
        
        // console.log(chunk.toString("utf8"));        
 
        
    })
    .on('readable',function(){
        console.log("data readable");
        readstream.pause()
        console.log(`${x} pause`);
        setTimeout(() => {
            console.log(`${x} pause end`);
            readstream.resume()
        }, 10);
    })
    .on("end",function (params) {
        console.log(n);
        
        console.log("data end");
    })
    .on("close",function (params) {
        console.log("data close");
    })
    .on("error",function (e) {
        console.log(`data read error${e}`);
        
    })