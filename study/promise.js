// let promise=new Promise((resolve,reject)=>{
//     if(success){
//         resolve()  //pending>>resolve
//     }else {
//         reject(err)//pending>>reject
//     }
// })
// function promise() {
//     return new Promise((resolve,reject)=>{
//         if(success){
//             resolve()
//         }else {
//             reject(err)
//         }
//     })
// }
// // 实例化的promise对象会立刻执行
//
// promise.then(()=>{
//     console.log('success')
// }).catch(()=>{
//     console.log("err")
// });
// let success = true;
// let p1 = new Promise((resolve, reject) => {
//     if (success) {
//         resolve("p1")
//     } else {
//         reject("p1 err")
//     }
// })
// let p2 = new Promise((resolve, reject) => {
//     if (success) {
//         resolve("p2")
//     } else {
//         reject("p2 err")
//     }
// })
// let p3 = new Promise((resolve, reject) => {
//     if (success) {
//         resolve("p3")
//     } else {
//         reject("p3 err")
//     }
// })
//
//
// function p1all() {
//
//     p1.then((re) => {
//         console.log(re)
//         return p2
//     }).then((re) => {
//         console.log(re)
//         return p3
//     }).then((re) => {
//         console.log(re)
//     })
//
// }
//
// // p1all();


function po1(po1) {
    return new Promise((resolve, reject) => {
        console.log(`po1${po1}`)
        setTimeout(() => {
            resolve(`po1${po1}`)
   
        }, 3000)
    })
}
// async function po1(po1) {
//     console.log(`po1${po1}`)
//         return `po1${po1}`
// }


function po2(po2) {
    return new Promise((resolve, reject) => {
        console.log(`${po2}po2`)
        setTimeout(() => {
            resolve(`${po2}po2`)
        }, 1000)
    })
}
// async function po2(po2) {
//     console.log(`${po2}po2`)
//         return `${po2}po2`
//
// }

function po3(po3) {
    return new Promise((resolve, reject) => {
        console.log(`${po3}po3`)
        setTimeout(() => {
            resolve(`${po3}po3`)
        }, 1000)
    })
}
// async function po3(po3) {
//     console.log(`${po3}po3`)
//         return `${po3}po3`
// }

// po1("执行").then(po2).then(po3).then((re)=>{
//     console.log(re)
// })
//
async  function test() {
    await po1("执行").catch(function (err) {
        console.log(err)
    });
    // let x2= await  po2(x1).catch(function (err) {
    //     console.log(err)
    // })
    // let x3= await po3(x2).catch(function (err) {
    //     console.log(err)
    // });
    console.log("sdkfjdkl")
}
test();


// async function test2(name) {
//         console.log("sdsdsds")
//         return name
// }
// test2("haha").then((re)=>{
//     console.log(re)
// });

// function po1all() {
//
//         po1("执行").then(po2).then(po3).then((re)=>{
//     console.log(re)
// })

// }

// let promiseall = Promise.all([p1, p2, p3])
// promiseall.then((re) => {
//     console.log(re)
// });

// let promise=new Promise((resolve,reject)=>{
//     console.log("h1");
//     resolve("haha")
// });
// promise.then((re)=>{
//     console.log(re)
// });
//  console.log("what");
//h1
//what
//haha
// promise新建后就会立刻执行，但是promise指定的回调函数是在当前脚本所有的同步执行完之后再去执行


// 用promise对象封装一个ajax对象
function Http(type,url,data) {
    const promise=new Promise((resolve,reject)=>{
        const handler=function () {
            if(this.readyState!==4){
                return
            }
            if(this.status ==200){
                resolve(this.response)
            }else {
                reject(new Error(this.statusText));
            }

        };
        const client =new XMLHttpRequest();
        client.open(type,url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        if (type=="get"){
            client.send();
        }else if(type=="post"){
            client.send(data)
        }
    })
    return promise
}
