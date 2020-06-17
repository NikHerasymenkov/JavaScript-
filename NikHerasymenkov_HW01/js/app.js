
let result;

function task01() {

    let x,
        a = prompt('Введите число a=', ''),
        b = prompt('Введите второе число b=', '');
    a = parseFloat(a);
    b = parseFloat(b);
    if (a > b) {
        x = a + b / 2 * 4;
        console.log(x);

    } else if (a === b) {
        x = 400;
        console.log(x);
    } else if (a < b) {
        x = a - b + 2 / b * 4;
        console.log(x);
    }
    result = x;
    return document.getElementById("result").value = result;
}


function task02() {
    let x = prompt('Введите число по оси  x=', '')
        , y = prompt('Введите число по оси  y=', '');
    x = parseFloat(x);
    y = parseFloat(y);
    if ((x >= -4 && x <= 4) && (y >= 0 && y <= 4)) {
        result = "Попали в область видимости";
    } else {

        result = "Не попали в область видимости";

    }
    return document.getElementById("result").value = result;

}

function task03() {
    let daysOfWeek = prompt("Days Of Week", '');
    daysOfWeek = parseFloat(daysOfWeek);
    switch (daysOfWeek) {
        case 1:
            result = 'Monday';
            break;
        case 2:
            result = 'Tuesday';
            break;
        case 3:
            result = 'Wednesday';
            break;
        case 4:
            result = 'Thursday';
            break;
        case 5:
            result = 'Friday';
            break;
        case 6:
            result = 'Saturday';
            break;
        case 7:
            result = 'Sunday';
            break;
        default:
            result = 'There is no such day of the week';
    }

    return document.getElementById("result").value = result;

}

//04 amd 05
function task04() {
    let x = prompt('Write first Number'),
        y = prompt('Write second Number');

    x = parseFloat(x);
    y = parseFloat(y);
    if (x > y) {
        result = x;
    } else if (x === y) {
        result = 'These numbers are equal ';

    } else {
        result = y;
    }
    return document.getElementById("result").value = result;


}

function task05() {
    let numberFlat = prompt('Write  number flat', '');
    numberFlat = parseFloat(numberFlat);
    if (numberFlat >= 1 && numberFlat <= 20) {
        result = 'She is in the first entrance';
    } else if (numberFlat >= 21 && numberFlat <= 48) {
        result = 'She is in the second entrance';
    } else if (numberFlat >= 49 && numberFlat <= 90) {
        result = 'She is in the third entrance';
    } else {
        result = 'She does not live here';
    }
    return document.getElementById("result").value = result;

}

function task06() {
    let login = prompt('Enter login', ''),
        password = prompt('Enter password ', '');
    password = parseFloat(password);
    if (login === 'ivan' && password === 334455) {
        result = 'Welcome';
    } else if (login === 'alex' && password === 777) {
        result = 'Welcome';
    } else if
    (login === 'petr' && password === b5678) {
        result = 'Welcome';

    } else {
        result = 'Login failed';
    }
    return document.getElementById("result").value = result;
}

function task07() {
    let yearOfBirth = prompt('Enter year of birth');
    yearOfBirth = parseFloat(yearOfBirth);
    if (2019 - yearOfBirth >= 16) {
        result = "Welcome";
    } else {
        result = "No entry ";
    }
    return document.getElementById("result").value = result;
}

function task08() {
    let experience = prompt('Enter experience', '');
    experience = parseFloat(experience);
    if (experience >= 0 && experience < 3) {
        result = 'Your allowance 0%';
    } else if (experience >= 3 && experience < 10) {
        result = 'Your allowance 10%';
    } else if (experience >= 10 && experience < 20) {
        result = 'Your allowance 10%';
    } else if (experience >= 20) {
        result = 'Your allowance 25%';
    }
    return document.getElementById("result").value = result;

}

function task09() {
    let word = "товар",
        product = prompt('Введите количество в корзине');

    if ((product == 1) ||
        (product > 20 && product % 10 === 1)) {
        result = word;
    } else if ((product >= 2 && product <= 4) ||
        (product > 20 && product % 10 >= 2 && product % 10 <= 4)) {
        result = "товара";
    } else {
        result = "товаров";
    }
    return document.getElementById("result").value = result;


}

function task2_2() {
    let x = prompt('Введите число по оси  x=', '')
        , y = prompt('Введите число по оси  y=', '');
    x = parseFloat(x);
    y = parseFloat(y);
    if ((y >= 0 && y >= x && y >= -x && y <= 1) || (y <= 0 && y <= x && y <= -x && y >= -1)) {
        result = "Попали в область видимости";
    } else {

        result = "Не попали в область видимости";

    }
    return document.getElementById("result").value = result;


}

function task2_3() {
    let x = prompt('Введите число по оси  x=', '')
        , y = prompt('Введите число по оси  y=', '');
    x = parseFloat(x);
    y = parseFloat(y);
    if ((x * x + y * y <= 1) || (x <= 0 && y <= 0 && y >= -x - 2)) {
        result = `Точка попадает в область`;
    } else {

        result = 'Не попали в область видимости';

    }
    return document.getElementById("result").value = result;


}

function task10() {
    let
        drinkMachine = parseFloat( prompt('Делайте ваш заказ'));
    switch (drinkMachine) {
        case 1:
            result  ='Латте ';
            break;
        case 2 :
            result ='Мокачино';
            break;
        case 3:
            result ='Американо';
            break;
        case 4:
            result ='Капучино';
            break;
        default:
            result ='Вы не выбрали ';

}
    return document.getElementById("result").value = result;
}
function task11() {

    let yearOld,
        manBuy=parseFloat(prompt('Делайте ваш заказ'));
    if (20===manBuy){
        result='Возьмите ваш напиток';
    }else  if (15===manBuy){
        result= 'Возьмите вашу жвачку ';
    }else if (10===manBuy){
        result='Возьмите ваши конфеты';
    } else if ((30===manBuy)||(25===manBuy)|| (2019-yearOld>=18)){
        result='Если вам нету 18 я не могу вам продать,сигареты и алкоголь';
    }else {
        result='Вы не сделали заказ';
    }
    return document.getElementById("result").value = result;
}






















