// Write your versions of Javascript's array methods 1) map, 2) filter, and 3) reduce. 
// When given a // callback function and the array [1, 2, 3, 4, 5], your versions should:
// 1. Return an array where each element is doubled
// 2. Return an array where all elements are greater than 3
// 3. Return the sum of the array, i.e. it adds together all the elements 


let nums = [1, 2, 3, 4, 5];
// map function=====================================================
const mapFn = (callback, arr) => {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(callback(arr[i]))
    }
    return newArr
}

const doubleFn = (num) => {
    return num * 2
}

const mapMethod = mapFn(doubleFn, nums)
console.log(mapMethod);

// filter function===================================================
const filterFn = (callback, arr) => {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const greaterThanThree = (num) => {
    if(num >= 3){
        return num
    }
}

const filterMethod = filterFn(greaterThanThree, nums)
console.log(filterMethod);

// reducer function=========================================================
const reduceFn = (callback, initialVal, arr) => {
    let res = initialVal;
    for(let i=0; i<arr.length; i++){
       res = callback(res, arr[i])
    }
    return res
}

const sumFn = (initial,current) => {
    return initial + current
}

const reduceMethod = reduceFn(sumFn, 0, nums)
console.log(reduceMethod);