'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

/* if (family.length == 0) {
    console.log('семья пуста');
} else {
    let str = `Семья состоит из: ${family.join(' ')}`;
console.log(str);
} */

function showFamily(arr) {
    if (arr.length === 0){
        return console.log(`Семья пуста`);
    }
    let str = `Семья состоит из: `;
    for(let key in arr) {
        str += `${family[key]} `;
    }
    return console.log (str);
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arrCopy) {
    /* let arrStr = "";
    for(let i in arrCopy) {
        arrStr += `${arrCopy[i].toLowerCase()}\n`;
    }
    console.log(arrStr); */
    arrCopy.forEach(function(city) {
        console.log(`${city.toLowerCase()}`);
    });
}

standardizeStrings(favoriteCities);

const someString = "";

function reverse(str) {
    if (typeof str != 'string' || str === " ") {
        return console.log ('Error');
    } else {
    let reverseStr = [];
    reverseStr.push(...str);
    reverseStr.reverse();
    let strRev = "";
    reverseStr.forEach(function(str) {
        strRev += `${str}`;
    });
    return strRev;
}
    
}   

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY', 'USD'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
const noCurrencies = ['USD', 'CNY'];

/* function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return console.log(`Нет доступных валют`);
    }
    for (let i =0; i < allCurrencies.length; i++) {
        let result ='';
        for(let key in missingCurr) {
            if (arr[i] == missingCurr[key]) {
                continue;
            } else {
                result += `${arr[i]}\n`;
            }
        }
        console.log(result);
    }
}
 availableCurr(allCurrencies, noCurrencies); */

 function availableCurr(arr, missingCurr) {
    let a = [...arr];
    let b = [...missingCurr];
    if (arr.length === 0) {
        return console.log(`Нет доступных валют`);
    }
    let result = "Доступные валюты:\n";
    for (let key in b) {
        for (let i in a) {
            if (b[key] == a[i]) {
                delete a[i];    
            }    
        }
    }
    a.forEach(function(value) {
        result += `${value}\n`;
            });

    console.log(result);
 }
 availableCurr(allCurrencies, noCurrencies);

 
/* const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY') */