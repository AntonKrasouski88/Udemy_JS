
function myFunction(n) {
    if(n === 1) {
      return n; 
    }
    return `${myFunction(n-1)} ${n}`;
  }
  
  console.log(myFunction(9));
  
  function factorial(x) {        //Объявление функции
    if (x <= 1) {return 1;}        //Проверка условия окончания расчета
    return x * factorial(x-1);   //Вызов этой же функции с уменьшенным на 1 аргументом
  }
  
  console.log(factorial(9));

var cat = "Cat";
console.log(cat.charCodeAt(1));

function testStr(str, n) {
    //return str[n-1];
    return str.charAt(n-1);
}

console.log(testStr(`Ithardlycousinmealways`, 19));

let a = 'first string';
let b = ' second string';
let c = ' firth string';

console.log(a.concat(b, c));

let myString = 'cat,dog,bird';
let myArray = myString.split(',');


myArray = myString.split(',',1);
console.log(myArray);

function testStr1(a, b) {
    return a.toUpperCase()+b.toLowerCase();
}

console.log(testStr1('Hello', 'World!'));

function testStr(a, b) {
  return a.indexOf(b);
}

console.log(testStr('This is a test string for testing', 'tehjst'));

function testArray(a, b) {
  let arr = [...a,...b];
  let result = 0;
  for (let i = 0; i < arr.length; i++){
      result += arr[i];
    }
  return result;
}

console.log(testArray([0, 1, 5, 3], [3]));

function testArray(a, b) {
  let arr = (a+b).split('');
  arr.unshift('Иванов');
  let str = arr.reverse().join('');
  return str;// Тут нужно написать решение
}

console.log(testArray('4326', '297515'));

var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
myDate.setDate(myDate.getDate() + 10); // Устанавливаем новое значение даты, получив прежнее и прибавив 10.
console.log(myDate);