// 1: 回文
let str='abcdefg';
let reverseFun=(str)=>{
    return str.split("").reverse().join("")
};
console.log(reverseFun(str));

// 2:数组去重
let arr=[1,2,3,1,1,3,5,7,7,9];
let unique=(arr)=>{
    let hashObj={};
    let Arr=[];
    for(let i of arr){
        if(!hashObj[i]){
            hashObj[i]=true;
            Arr.push(i)
        }
    }
    return Arr
};
console.log(unique(arr));
let set=new Set(arr);
console.log([...set]);

// 3: 统计一个字符串中出现次数最多的字母
 let findStr="abaaacddddddfgh";
let findMax=(str)=>{
    if(str.length==1){
        return str;
    }
    let obj={};
    for(let i of str){
        if(!obj[i]){
            obj[i]=1
        }else {
            obj[i]+=1
        }
    }
    let maxStr='';
    let maxValue=1;
    for(let k in obj){
        if(obj[k]>=maxValue){
            maxStr=k;
            maxValue=obj[k]
        }
    }
    return maxStr
};
console.log(findMax(findStr));

// 统计一个字符串中所有重复的字符
let findRepeat=(str)=>{
    let obj={};
    let arr=[];
    for(let i of str){
        if(!obj[i]){
            obj[i]=true;
        }else {
            obj[i]=false;
        }
    }
    for(let k in obj){
        if(obj[k]==false){
            arr.push(k)
        }
    }
    return arr
};
console.log(findRepeat(findStr));

// 排序
let sortArr=[2,4,1,7,20,5,1,6,15];
var arr2=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 冒泡排序
let sortFun=(arr)=>{
    console.time('2.快速排序耗时');
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    console.timeEnd('2.快速排序耗时');
    return arr
};
console.log(sortFun(arr2))


// 快速排序
// var quickSort2 = function(arr) {
//     console.time('2.快速排序耗时');
//     if (arr.length <= 1) { return arr; }
//     var pivotIndex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotIndex, 1)[0];
//     console.log(pivot)
//     var left = [];
//     var right = [];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     console.timeEnd('2.快速排序耗时');
//     return quickSort2(left).concat([pivot], quickSort2(right));
// };
// var arrq=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(quickSort2(arrq));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]；
function quickSort(array, left, right) {
    console.time('快速排序耗时');
    if (left < right) {
        var x = array[right], i = left - 1, temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            console.log(array)
        }
        // console.log(array) ;
        // console.log(left,i) ;
        // quickSort(array, left, i - 1);
        // console.log(array)
        // console.log(i,right)
        quickSort(array, i + 1, right);
    }
    console.timeEnd('快速排序耗时');
    // console.log(array)
    return array;
}

console.log(quickSort(arr2,0,arr2.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];