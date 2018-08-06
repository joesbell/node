let fun=()=>{
    // return new Promise((resolve => {
        setTimeout(()=>{
            // resolve("hahahaaha")
            console.log('jkhuhiiu')
        },1000)
    // }))

};
async function test() {
    let x=await fun();
    console.log(x);
    console.log("111111")
}
test();