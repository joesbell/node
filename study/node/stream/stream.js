let fs=require("fs")
let source=fs.readFileSync("../buffer/logo.jpg")
fs.writeFileSync("streamlogo.jpg",source)