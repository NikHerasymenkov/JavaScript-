//HW_03
//task1
function arrayFill(a, b) {
    let arr = [];
    for (let i = 0; i < b; i++) {
        arr.push(a);

    }
    return arr;
}

arrayFill('x', 5);

//task2
function arrSum() {
    const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j].reduce(function (sum, item) {
                return sum + item;
            })
        }
    }
    console.log(sum);
}

arrSum();

//task3
function isNumberInRange(a) {
    return (a > 0 && a < 10) ? true : false;
}
isNumberInRange();
//task4
function isEven(a) {
    return (a % 2 === 0) ? true : false;

}

//task5
function arrNew() {
    let arr = [1, 2, 3, 4, 5, 6],
        result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            result.push(arr[i]);
        }

    }

    console.log(result);
}

arrNew();

function getDivisors(num) {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }

    }
    return arr;
}

getDivisors();

//task7
function pow(x, n) {
    return x ** n;
}

console.log(pow(2, 3));

//task8

function newAge(age) {
    if (age > 16) {
        console.log('добро пожаловать ');
    } else {
        console.log('вы еще молоды');
    }
    return age > 16;

}

console.log(newAge(17));

//task9
function controllerAge(age) {
    (!(age.length) || age === undefined) ? console.log('Введите возраст') : newAge(age);

}

console.log(controllerAge(0));

//task10
function arrNumber(...arg) {
    if (arg.length === 0) {
        console.log('Error');
    } else {
        console.log(arg.length);
    }
}

arrNumber(1, 2, 3, 4, 5, 6, 7);

//task11


function enterNumber(number) {
    let message;
    if (number > 10) {
        return number ** 2;
    } else if (number === 8 || number === 9) {
        return number - 1;
    } else if (number < 7) {
        return message = 'Меньше 7';
    }
}


console.log(enterNumber(9));

//task12
function ucFirst(str) {
    return str[0].toUpperCase() + str.substr(1, str.length)
}

let str = 'asdasdwww dssaaxcxzc asdw gdz'
str.split(' ').map(function (item) {
    return ucFirst(item);
}).join(' ');

//task13
str = 'var_text_hello';
let arr = str.split('_');
for (let i = 0; i < arr.length; i++) {
    arr[i] = ucFirst(arr[i]);
}
str = arr.join('')

//task14
let someArr = ['Hello', 2, 'easy code', 8];

function inArray(str, arr) {
    return arr.indexOf(str) >= 0;
}

console.log(inArray('easy code', someArr));


//task15
let someStr = '123456';
arr = someStr.split('');
for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        let b = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = b;

    }
}
someStr = arr.join('');
console.log(someStr);


//task16

    const generator = sequence(10, 3);
    const generator2 = sequence(7, 1);

    function sequence(start = 0, step = 1) {
        start -= step;
        return function () {
            return start += step;
        }

    }

    console.log(generator()); // 10

    console.log(generator()); // 13

    console.log(generator2()); // 7

    console.log(generator()); // 16

    console.log(generator2()); // 8


//task17

    const gen2 = sequence(0, 2);

    function take(gen, x) {
        let array = [];
        for (let i = 0; i < x; i++) {
            array[i] = gen();

        }
        return array;
    }

    console.log(take(gen2, 5));


//task18
/*function square(x) {
    return x * x
} // возведение в квадрат
function map(fn, array) {
    const arrayLength = array.length;
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        newArray [i] = fn(array[i])
    }
    return newArray;

}


console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
const arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
*/
//task19


function square(x) {
    return x * x;
}

const gen = sequence(1, 1);
const fMap = function (a, gen) {
    return function () {
        let argsCount = arguments.length;
        let newArray = [];
        for (let i = 0; i < argsCount; i++) {
            newArray[i] = arguments[i];

        }
        let x = a(gen.apply(null, newArray));
        return x;
    };

};
const squareGen = fMap(sequence(square, gen));
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());

