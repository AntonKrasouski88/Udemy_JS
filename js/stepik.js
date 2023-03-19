
function my_function(n) {
    if(n === 1) {
      return n 
    }
    return `${my_function(n-1)} ${n}`
  }
  
  console.log(my_function(9));
  
  function factorial(x) {        //Объявление функции
    if (x <= 1) return 1;        //Проверка условия окончания расчета
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



