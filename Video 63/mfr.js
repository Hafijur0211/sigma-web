// map filter and reduce

let arr = [1, 23, 87, 90, 5, 7];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2);
// }

let newArr = arr.map((e, index, array) => {
    return e ** 2;
});

console.log(newArr);

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
};
console.log(arr.filter(greaterThanSeven));

// reduce

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))
