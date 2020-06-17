'use strict';

// task01
function recursion(x, n) {
    return (n === 1) ? x : (x * recursion(x, n - 1));
}

recursion(2, 3);

//task02
function recursionAtoB(a, b) {
    if (a === b) {
        return b;
    } else if (a < b) {
        return a + ' ' + recursionAtoB(a + 1, b);
    } else {
        return recursionAtoB(a, b + 1) + ' ' + b;
    }
}

recursionAtoB(10, 1);

//task03
function sumTo(N) {
    return (N > 1) ? (N + sumTo(N - 1)) : 1;
}

sumTo(10);// 55

//task04
function allNumReverse(N) {
    if (N !== 0) {
        return N + ' ' + allNumReverse(N - 1);

    } else {
        return N;
    }
}

allNumReverse(10);

//task05

function allNum(n) {
    if (n !== 0) {
        return allNum(n - 1) + ' ' + n;
    } else {
        return n;
    }
}

allNum(10)

//task 06
function arrayConcat() {
    const str = ['a', 'b', 'c'];
    const arr2 = [1, 2, 3, 4, 5];
    let result = str.concat(arr2);
    console.log(result);
}

arrayConcat();

//task07
function arrayPush() {
    const str = ['a', 'b', 'c'];
    str.push(1, 2, 3);
    console.log(str);
}

arrayPush();

//task 08
function arrayUnshift() {
    const arr = [1, 2, 3];
    arr.unshift(4, 5, 6);
    console.log(arr)
}

arrayUnshift();

//task 09
function arraySlice() {
    const arr = [1, 2, 3, 4, 5]
    console.log(arr.slice(0, 3));
}

arraySlice();

//task10
function arraySlices() {
    const arr = [1, 2, 3, 4, 5]
    console.log(arr.slice(3, 5));
}

arraySlices();


//task 11
function arraySplice() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    console.log(arr);

}

arraySplice();

//task 12
function arraySplice2() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(5, 0,2,3,4);
    console.log(arr);
}
arraySplice2();
//task 13
function arraySplice3() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(3,0 ,'a','b','c');
    console.log(arr);
}
arraySplice3();


//task 14
function arraySplice4() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    console.log(arr)
}
arraySplice4()
// task 15
function someObject() {
    let obj = {js:'test', jq: 'hello', css: 'world'};
    const arr = Object.keys(obj);
    console.log(arr);
}
someObject()
