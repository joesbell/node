// let buf=new Buffer("hello 姜大森")
// console.log(buf);
// let bufbase = new Buffer("hello 姜大森","base64")
// console.log(bufbase);

// let buflen=new Buffer(8);
// buflen.write("123456789")

// console.log(buflen);
// let bufary=new Buffer([1,2,3,4])
// console.log(bufary[1]);



// buffer实例方法
// buffer[index]
// buffer.length
// buffer.write(string,offset=0,length,encoding="utf8")
// buffer.toString(encoding,start=0,end=buffer.length)
// buffer.copy(target,start=0,end=buffer.length)
// buffer.slice(start,end)
// buffer.compare(otherBuffer)
// buffer.equals(otherBuffer)
// buffer.fill(value,offset,end)


let buffer=new Buffer("hello,姜大森")
console.log(buffer.length);
buffer.write("hi,j",5,"utf8")
console.log(buffer.toString());
let buffer2=new Buffer(5)
buffer.copy(buffer2,0,1)
console.log(buffer2.toString());


//img2.mukewang.com/5b14b0480001672706000338-240-135.jpg
