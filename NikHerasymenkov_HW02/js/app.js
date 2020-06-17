// task1
function task1() {

    for (let i = 4; i <= 400; i++) {
        console.log(i);
    }

}

function task2() {
    let i = 1;
    while (i <= 10) {
        i += 3;
        console.log(i);
    }
    for (let i = 4; i <= 13; i += 3) {
        console.log(i);
    }
}

function task3() {
    for (let i = 654; i >= 0; i--) {
        console.log(i);
    }
}

function task4() {
    for (let i = 1983; i <= 2017; i++) {
        console.log(i);
    }

}

function task5() {
    for (let i = -4; i <= 100; i += 2) {
        console.log(i);
    }

}

function task6() {
    for (let i = 1; i <= 9; i++) {
        console.log(i * 7);
    }

}

function task7() {
    for (let i = 1000; i <= 2000; i++) {
        console.log('&#' + i);
    }

}

function task8() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum = sum + i;
        console.log(sum);
    }
}

function task9() {
    let sum = 1;
    for (let i = 1; i <= 50; i++) {
        sum = sum * i;
        console.log(sum)
    }
}

function task10() {
    let arr = [],
        str = '',
        numArr = parseInt(prompt('Введите x', ''));
    for (let i = 1; i <= numArr; i++) {
        str += 'x';
        arr.push(str);
    }

    console.log(arr);

}

function task11() {
    let arr = [],
        str = '',
        numArr = parseInt(prompt('Введите x', ''));
    for (let i = 1; i < numArr; i++) {
        for (let j = 1; j <= i; j++) {
            str += i;

        }
        arr.push(str);
        str = '';
    }
    console.log(arr);

}

function task12() {
    let arr = [1, 2, 3, 4, 0, 5, 6],
        sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);//  как  счетчик работает!!!! ;
    }
    console.log('-------------Вывод суммы -----------')
    console.log(sum);
}

function task13() {
    let arr = [1, 2, 3, 4, 5],
        arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2);
}

function task14() {
    let arr = [1, 3, 4, 44, 55, 22, 33, 6, 7];
    result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < 10) {
            console.log(arr[i]);

        }
        result.push(arr[i]);
    }
}

function task15() {
    let arr = [1, 2, 3, 4, 5, 6, 7],
        result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

function task16() {
    const arr = [1, 2, 3, 4, 5, 6],
        result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i + 1], arr[i]);
    }
    console.log(result);
}

function task17() {
    let arr = [1, 2, 3, 4, 5, 6],
        result = [];
    for (let i = 0; i < arr.length; i += 6) {
        result.push(arr[i + 4], arr[i + 5], arr[i + 2], arr[i + 3], arr[i], arr[i + 1]);
        console.log(arr);
    }
    console.log(result);
}
function task18() {
const arr= [[1, 2, 3], [4, 5], [6]];
    let sum=0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].reduce(function(sum, item) {
            return sum + item;
        })
    }

console.log(sum);

}
function task19() {
    const matrix = [];

    for (let i = 1; i <= 10; i++) {
        matrix.push([]);
        for (let j = 1; j <= 10; j++) {
            matrix[i - 1].push(j * i);
        }
        console.log(matrix[i - 1]);
    }
}
function task19_3() {
    const  arr=[];
    for(let i=0;i<=10;i++){
        arr[i]=[];
        arr[i][0]=1;
        arr[i][i]=1;
        for(let j=1;j<i;j++){
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }

    }
        console.log(arr)



}