var EventEmitter = require("events").EventEmitter
// 增加最大监听数量
var life = new EventEmitter();
life.setMaxListeners(11)
var warter = function (params) {
    console.log("demo1" + params)
}

// life.removeListener('test1',warter)

// console.log(a1,a2);


life.on('test1', warter)
life.on('test1', function (params) {
    console.log("demo2" + params)
})
life.on('test1', function (params) {
    console.log("demo3" + params)
})
life.on('test1', function (params) {
    console.log("demo4" + params)
})
life.on('test1', function (params) {
    console.log("demo5" + params)
})
life.on('test1', function (params) {
    console.log("demo6" + params)
})
life.on('test1', function (params) {
    console.log("demo7" + params)
})
life.on('test1', function (params) {
    console.log("demo8" + params)
})
life.on('test1', function (params) {
    console.log("demo9" + params)
})
life.on('test1', function (params) {
    console.log("demo10" + params)
})
life.on('test1', function (params) {
    console.log("demo11" + params)
})

life.on('test2', function (params) {
    console.log("param01" + params)
})
life.on('test2', function (params) {
    console.log("param02" + params)
})

var a1 = life.emit('test1', "000")
var a2 = life.emit('test2', "000")
// 批量删除监听事件
life.removeAllListeners("test1")

// 计算监听的事件的个数
console.log(EventEmitter.listenerCount(life, "test1"));