'use strict';
//площадь куба S = 6a2; объем куба V = a3;

/* function calculateSquareVolume (value) {
    if (typeof value =="number" && value > 0 && Number.isInteger(value)) {
        let square = 6*(value*value);
        let volume = value * value * value;
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
    } else {
        console.log ("При вычислении произошла ошибка");
    }
    
}

calculateSquareVolume (""); */

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);



function checkCoupeTrainCarriage (numberPlace) {
    if (typeof numberPlace == "number" && numberPlace > 0 && Number.isInteger(numberPlace)) {
        for (let i = 1; i <= 9; i++) {
            for (let k = i*4 - 3; k <= i*4; k++){
                if (k == numberPlace){
                    console.log(i);
                }
            }
        }
    } else if (numberPlace == 0 || numberPlace > 36) {
        console.log('Таких мест в выгоне не существует');
    } else {
        console.log('Ошибка. Проверте правильность введенного номера места');
    }
    
}     


checkCoupeTrainCarriage("");

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            console.log(i/4);
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

function findMaxNumber (first, second, third, fourth) {
    let checkNumber = first + second + third + fourth;
    if (typeof checkNumber == 'string'){
        console.log(0);
        return 0;
    } else {
        let maxNumber = Math.max(first, second, third, fourth);
        console.log(maxNumber);
        return maxNumber;
    }
    
}
findMaxNumber(7/8, 5, 10.8, 7);

function getTimeFromMinutes (times) {
    let hoursTimes = Math.trunc(times/60);
    let minuteTimes = times%60;
    if (typeof times !== 'number' || times < 0 || !Number.isInteger(times)) {
        console.log("Ошибка проверте данные");
        return "Ошибка проверте данные";
    } else if (hoursTimes == 1) {
        console.log(`Это ${hoursTimes} час и ${minuteTimes} минут`);
        return `Это ${hoursTimes} час и ${minuteTimes} минут`;
    } else if (hoursTimes == 2 || hoursTimes == 3 || hoursTimes == 4) {
        console.log(`Это ${hoursTimes} часа и ${minuteTimes} минут`);
        return `Это ${hoursTimes} часа и ${minuteTimes} минут`;
    } else {
        console.log(`Это ${hoursTimes} часов и ${minuteTimes} минут`);
        return `Это ${hoursTimes} часов и ${minuteTimes} минут`;
    } 
}

getTimeFromMinutes(1);

/* function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`)
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    
}
getTimeFromMinutes(1263); */

function fib(fibNum) {
    let a = 0;
    let b = 1;
    let c;
    let result = "";
    if (typeof fibNum =='number' && fibNum > 0 && Number.isInteger(fibNum)) {
        for (let i = 0; i < fibNum - 2; i++) {
            c = a + b;
            a = b;
            b = c;
            result += `${c} `;
        }
        console.log (`0 1 ${result}`);
        return `0 1 ${result}`;
    } else {
        console.log('');
        return '';
    }
}
fib(7); 

const arr =  [11, 3, 9, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}

//arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const alerm = [1, 2, 8, 6, 3, 7];

alerm.forEach(function(item, i, alerm) {
    console.log(`${i}: ${item} внутри массива ${alerm}`);
});

let objectLearn = {
    name: "Julia Alves",
    long: 23,
    type: 'latin',
    weigth: 75,
    hobbies: {
        films: 'shooting in films',
        game: 'Old game'
    }
};

/* console.log(Object.keys(objectLearn).length);

for (let key in objectLearn) {
    console.log(`Свойство ${key}`)
} */

console.log(Object.keys(objectLearn));
const {films, game} = objectLearn.hobbies;
console.log(films);

console.log(typeof (!!"44444"));

//Task: Answers
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    !prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));
    copy.waitors[0] = {name: 'Mike', age: 32};

    console.log(data);
    return console.log(copy);
}

transferWaitors(restorantData);