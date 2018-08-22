let fs =require("fs")
let readStream=fs.createReadStream("video.mp4")
let writeStream=fs.createWriteStream("stream_copy.mp4")
readStream
    .on("data",function (chunk) {
        // 如果数据还没有写入完毕,还在缓存区
        if (writeStream.write(chunk)==false){
            console.log("still cache");
            readStream.pause()
        }
    })
    .on("end",function (params) {
        writeStream.end()
    })


    // 数据读取完毕
writeStream.on("drain",function (params) {
    console.log("data drains");
    readStream.resume()
})