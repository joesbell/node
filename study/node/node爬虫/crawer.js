let http=require("http")
let url="http://www.imooc.com/learn/637"
let cheerio=require("cheerio")

let chapter=[];
function filterChapters(html) {
    let $=cheerio.load(html)
    $(".chapter h3").each(function () {
        var title=$(this).text();

        chapter.push({ "title": title})
    })
    
}

let crawer=http.get(url,function (res) {
    var html=""
    res.on("data",function (data) {
        html+=data
    })
    res.on("end",function () {
        filterChapters(html)
        console.log(chapter)
    })
})
// let crawer=function () {
//     return new Promise(function (resolve,reject) {
//         resolve()
//     })
// }
crawer.on("error",function () {
    
})
crawer.end()