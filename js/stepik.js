
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


//Task stepik: sort arrays with values ​​"zero" and "one"
function sortArray (grid) {
  let flag = true;
  
  while(flag) {
    flag = false;
    
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i + 1]);
        if(grid[i][j] === 1 && grid[i + 1][j] === 0) {
          [grid[i][j], grid[i + 1][j]] = [grid[i + 1][j], grid[i][j]]
          flag = true
        }
        
      }
    }
  }
  return grid
}

console.log(sortArray([
  [1,1,1,0,0],
  [0,0,0,1,0],
  [1,1,0,0,1],
  [0,0,0,1,0]
]));

function countBild (grid) {
  let oneStory = 0;
  let twoStory = 0;
  let threeStory = 0;

  for (let i = 0; i < grid[0].length; i++) {
    let count = 0;

    grid.forEach(el => {
      el[i] === 1 && (++count) 
    });

    count == 1 && (++oneStory) || count == 2 && (++twoStory) || count === 3 && (++threeStory);
    
  }

  return `одноэтажных башен: ${oneStory}, двуэтажных башен: ${twoStory}, трехэтажных: ${threeStory}`
}

console.log(countBild([
  [0,0,0,1,0,0],
  [1,0,0,1,1,0],
  [1,1,1,1,1,1]
]));


//Task stepik: custom sort
function customSort(data) {
  let arrNum = data.filter(el => typeof el === 'number').sort((a, b) => a - b);
  let arrStr = data.filter(el => typeof el === 'string').sort();
  let dataSort = []
  let len = arrNum.length >= arrStr.length ? arrNum.length : arrStr.length 

  for (let i = 0; i < len; i++) {
    arrNum[i] !== undefined && dataSort.push(arrNum[i])
    arrStr[i] !== undefined && dataSort.push(arrStr[i])
  }

  return dataSort
}

console.log(customSort([20,3,"a",1,"b",4,"q","g","w","z",5]));

//Task stepik: custom sort number
function customSortNumber(data, order) {
  let arr = data.map(el => {
    if(order === 'ASC') {
      return String(el).split('').sort().join('')
    } else {
      return String(el).split('').sort((a, b) => b - a).join('')
    }
  })

  return arr.map(el => +el)
}

console.log(customSortNumber([123,24,199], 'DESC'));

//Task stepik: compare sides
function compareSides(data) {
  let right = 0;
  let left = 0;

  for (let i = 0; i < data.length; i++) {
    data.forEach(el => {
      i < data.length / 2 && (left += el[i]) || (right += el[i])
    });
  }

  return right > left ? 'правая' : right < left ? 'левая' : 'равны'
}

console.log(compareSides([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

//Task stepik: sumCircles
function sumCircles(data) {
  let arr = [...data];
  let arrSum = []

  while(arr.length > 0) {
    let sum = 0;
    arr.forEach ((el, i) => {
      for (let j = 0; j < el.length; j++) {
        if(i === 0 || i === arr.length - 1) {
          sum += el[j]
          console.log(sum);
        } 
        i !== 0 && i !== el.length - 1 && (j === 0 || j === el.length - 1) && (sum += el[j]) 
      }
    })
    arrSum.push(sum)
    arr = arr.filter((el, i) => i !== 0 && i !== arr.length - 1 ? el.shift() && el.pop(): '')
    console.log(arr);
  }

  return arrSum
}

//console.log(sumCircles([[10, 10, 10, 10, 10],[10, 10, 10, 10, 10],[10, 10, 10, 10, 10],[10, 10, 10, 10, 10],[10, 10, 10, 10, 10]]));
//console.log(sumCircles([[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10],
//[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10],[10, 10, 10, 10, 10, 10, 10, 10]]));
console.log(sumCircles([[100, 10, 10, 10, 10, 10, 10, 100],
                        [10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 200, 10, 10, 200, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 30, 10, 10, 10, 30, 10],
                        [100, 10, 10, 10, 10, 10, 10, 100]
                      ]))

//Task stepik: propage light
function propagateLight(grid) {
  let pos;
    
  if(grid.length < 3) {
    return grid 
  }

  grid.forEach((el, i)=> {
    for (let j = 0; j < el.length; j++) {
      if (el[j] === 1) {
        pos = [i, j]
        break
      }
    }   
  });
  grid[pos[0]] = grid[pos[0]].map((_, i, arr ) => arr[i] = 1);
  for(let i = 0; i < grid.length; i++) {
    grid[i][pos[1]] = 1
  }
  return grid
}

//Task stepik: propage light(2 task)
function propagateLight2(grid) {
  let pos;
  if(grid.length < 3) {
    return grid 
  }

  grid.forEach((el, i)=> {
    for (let j = 0; j < el.length; j++) {
      if (el[j] === 1) {
        pos = [i, j]
        break
      }
    }   
  });
  grid[pos[0] - 1] && (grid[pos[0] - 1][pos[1]] = 1)
  grid[pos[0] + 1] && (grid[pos[0] + 1][pos[1]] = 1)
  grid[pos[0]][pos[1] - 1] !== undefined && (grid[pos[0]][pos[1] - 1] = 1)
  grid[pos[0]][pos[1] + 1] !== undefined && (grid[pos[0]][pos[1] + 1] = 1)

  return grid
}

console.log(propagateLight2([[0,0,0],[0,1,0],[0,0,0]]));