let fs=require("fs")
fs.readFile("logo.jpg",function (err,originbuffer) {
    console.log(Buffer.isBuffer(originbuffer));
    fs.writeFile("logo_buffer.jpg",originbuffer,function (err) {
        if(err){
            console.log(err);
            
        }
    })
    let base64Img=originbuffer.toString("base64")
    console.log(base64Img);
    var decodeImg = new Buffer(base64Img,"base64")
    console.log(Buffer.compare(decodeImg, originbuffer));
    fs.writeFile("logo_deco.jpg", decodeImg,function (err) {
        console.log(err);
        
    })
    
})
