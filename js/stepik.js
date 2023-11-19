
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

function testDateTime(a, b) {
  let date_1 = new Date(a);
  let date_2 = new Date(b);
  let arr = [ 'Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  if (date_1 > date_2) {
    return arr[date_1.getDay()];
  } else {
    return arr[date_2.getDay()];
  }

}

console.log(testDateTime('19 October 1909 10:27', '28 March 1909 00:59'));
console.log(testDateTime('04 August 1909 00:24', '03 November 1909 06:54'));

function testMath(a) {
  return Math.sin(Math.PI*a/180);
}

console.log(testMath(348));

function testMath(a, b, c) {
  return 1/2*a*b*Math.sin(Math.PI*c/180);
}

console.log(testMath(2, 10, 16));

function testMath(a, b, c, d) {
  return Math.floor(Math.max(a,b,c,d)/Math.min(a,b,c,d));
}

console.log(testMath(1,4,8,8));

console.log('Привет')

let y = 10;

y < 5 || console.log("Это будет напечатано");             // Это будет напечатано

y < 15 || console.log("Это никогда не будет напечатано")

let score, level = 1;


console.log(undefined + 200);

if (score >= 100) {
  level = 2;
} else {
  level = 1;
}

console.log("Уровень: " + level);


let status = "3";

console.log(3 === '3')

let input = 1;
let output = '> ';

switch (input) {
  case 0:
    output += '> ';
  case 1:
    output += 'Как ';
    output += 'вас ';
  case 2:
    output += 'зовут';
  case 3:
    output += '?';
  case 4:
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Пожалуйста, введите свое имя.');
}

// > Как вас зовут?

let fruit = "яблоко";
let message = "Я люблю ";

switch (fruit) {
  case "банан":
  case "яблоко":
    message += "есть ";
  case "апельсин":
    message += "сочный ";
  case "виноград":
    message += "фрукт.";
    console.log(message);
    break;
  default:
    console.log("Я не люблю этот фрукт.");
}

//Task stepik: edit a line in an array
function editorStrArr (str) {
  let arr = []
  for (let i = 0; i < str.length; i += 2) {
    let newArr = new Array(+str[i + 1]).fill(str[i])
    arr = [...arr,...newArr]
  }
  return arr
}

console.log(editorStrArr('a2b3c1'));