function howMuchILoveYou(nbPetals) {
  let arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  let number;
  if (nbPetals > arr.length) {
    number = nbPetals % arr.length;
    return console.log(arr[number - 1]);
  } else if (!nbPetals || nbPetals < 0) {
    return console.log(arr[5]);
  } else {
    number = arr.length - nbPetals;
    return console.log(arr[number - 1]);
  }
}
howMuchILoveYou(10);

function nameShuffler(str) {
  let arr = str.split(" ");
  for (let i = arr.length - 2; i >= 0; i--) {
    arr.unshift(arr.pop());
  }
  return arr.join(" ");
}
nameShuffler("john McClane");

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

sayHello(["John", "Smith"], "Phoenix", "Arizona");

function sayHello(name) {
  return `Hello ${name}`;
}
sayHello("Mr. Spock");

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] *= array[i];
    }
  }
  return array;
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]);

function sevenAte9(str) {
  let arr = str.split("");
  arr.forEach((item, i) => {
    if (item === "9" && arr[i + 1] === 7 && arr[i - 1] === 7) {
      delete arr[i];
    }
  });
  let strNo9 = arr.join("");
  return console.log(strNo9);
}

sevenAte9("165561786121789797");

function expressionMatter(a, b, c) {
  const arr = [];
  arr[0] = a * (b + c);
  arr[1] = a * b * c;
  arr[2] = a + b * c;
  arr[3] = (a + b) * c;
  arr[4] = a + b + c;
  arr.sort(function (a, b) {
    return a - b;
  });
  return console.log(arr[4]);
}

expressionMatter(10, 5, 6);

function mergeArrays(arr1, arr2) {
  /*  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
  arr2.forEach((item, j) => {
    if(arr1[i] == arr2[j]) {
      delete arr2[j];
    }
  })
  arr2 = arr2.filter(function(num) {
    return (num != null && num != undefined)
  })
  }
  arr3 = [...arr1,...arr2];
  arr3.sort(function(a,b) {
  return a-b;
  })
  return arr3; */
  let arr3 = [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];
  console.log(arr3);
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);

let sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ],
  monday = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
    7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
    9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
    6099, 5828, 7217, 9387,
  ],
  tuesday = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
    8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
    8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
    5717, 7555, 9447, 7703,
  ],
  wednesday = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
    6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
    8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
    5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
    7378, 9598, 5405, 9493,
  ],
  thursday = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
    8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
    6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
    5360, 6638, 8012, 8701,
  ],
  friday = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
    6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
    5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
    8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
    8720, 5725, 6960, 5127,
  ],
  saturday = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
    8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
    7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
    9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
    7960, 9455, 5633, 9085,
  ];

let stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

/* function stairsIn20(s){
  let stairs = 0;
  for (let i = 0; i < s.length; i++) {
    s[i].forEach((item) =>{
      stairs += item * 20;
    });
   }
  return console.log (stairs);
}

stairsIn20(stairs); */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

zeroFuel(100, 50, 1);

function repeatStr(n, s) {
  let repeat = "";
  for (let i = 1; i <= n; i++) {
    repeat += s;
  }
  return repeat;
}

repeatStr(2, "ha ");

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin == true) {
    sharkSpeed = sharkSpeed / 2;
  }
  let timeDistance = pontoonDistance / youSpeed;
  let timeShark = sharkDistance / sharkSpeed;
  if (timeDistance < timeShark) {
    return console.log("Alive");
  } else {
    return console.log("Shark Bait!");
  }
}

shark(12, 50, 4, 8, true);
shark(7, 55, 4, 16, true);
shark(24, 0, 4, 8, true);

function validateUsr(username) {
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
  const validator = /^[a-z0-9_]{4,16}$/;

  return validator.test(username);
}
validateUsr("asddsa");
validateUsr("a");
validateUsr("Hass");
validateUsr("");
validateUsr("asd43 34");
validateUsr("Hasd_12assssssasasasasasaasasasasas");
validateUsr("____");

String.prototype.isUpperCase = function () {
  return this.toUpperCase() == this;
}; //Is the string uppercase?

//Find Maximum and Minimum Values of a List
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Opposites Attract
function lovefunc(flower1, flower2) {
  /*  if (flower1%2 == 0 && flower2%2 == 0 || flower1%2 == 1 && flower2%2 == 1) {
    return console.log (false);
  } else {
    return console.log (true);
  } */
  return console.log(flower1 % 2 !== flower2 % 2);
}

lovefunc(1, 4);
lovefunc(2, 4);
lovefunc(691, 815);

//Task: Simple multiplication
/* function simpleMultiplication(number) {
  if(number%2 == 0) {
    return console.log (number*8);
  } else { 
    return console.log(number*9);
  }
} */

function simpleMultiplication(n) {
  return console.log(n * (n % 2 ? 9 : 8));
}

simpleMultiplication(2);
simpleMultiplication(1);

//Task:Count Odd Numbers below n
function oddCount(n) {
  return Math.floor(n / 2);
}

oddCount(15);
oddCount(15023);

//Task:Square(n) Sum
function squareSum(numbers) {
  let numSum = 0;
  numbers.forEach((i) => (numSum += i * i));
  return numSum;
}

squareSum([0, 3, 4, 5]);

//Task:Moving Zeros To The End
function moveZeros(arr) {
  arr.forEach((i, j) => {
    if (i === 0 && typeof i != Object) {
      delete arr[j];
      arr.push(0);
    }
  });
  arr = arr.filter(function (num) {
    return num != undefined || num == null;
  });
  return console.log(arr);
}
/* var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
} */

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1, false, {}, [], null]);

//Task: String Templates - Bug Fixing
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

buildString("Cheese", "Milk", "Chocolate");

//Task: The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return console.log(
    enteredCode === correctCode &&
      Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}

checkCoupon("123", "123", "September 5, 2014", "October 1, 2014");

//Task: Compare within margin
function closeCompare(a, b, margin) {
  if (!margin) {
    margin = 0;
  }
  if (a + margin < b) {
    return -1;
  } else if (a - b <= margin) {
    return 0;
  } else {
    return 1;
  }
}

closeCompare(3225, 7570, 4346);
closeCompare(2, 5, 3);
closeCompare(1.99, 5, 3);

//Task: Sum Arrays
function sum(numbers) {
  return numbers.reduce((total, current) => {
    return total + current;
  }, 0);
}

sum([]);
sum([1, 5.2, 4, 0, -1]);

//Task: Capitalization and Mutability
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.substr(1);
}

capitalizeWord("word");

//Task:N-th Power
function index(array, n) {
  return array[n] ? array[n] ** n : -1;
}

index([1, 3, 10, 100], 3);

/* Task: They say that only the name is long enough to attract attention. 
They also said that only a simple Kata will have someone to solve it. 
This is a sadly story #1: Are they opposite? */
function isOpposite(s1, s2) {
  return !s1 || !s2
    ? false
    : s1 ===
        s2.replace(/[a-z]/gi, (c) =>
          c < "a" ? c.toLowerCase() : c.toUpperCase()
        );
}

isOpposite("ab", "AB");
isOpposite("aBcd", "AbCD");
isOpposite("", "");
isOpposite("aBcde", "AbCD");

function findMultiples(integer, limit) {
  let a = [];
  for (let i = 1; i <= Math.floor(limit / integer); i++) {
    a.push(integer * i);
  }
  console.log(a);
}

findMultiples(5, 27);

//Task Quarter of the year
const quarterOf = (m) => Math.ceil(m / 3);

//Sum of positive

/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  let num = 0;
  arr.map((i) => (i > 0 ? (num += i) : 0));
  return console.log(num);
}

positiveSum([1, 2, 3, 4, 5]);
positiveSum([1, -2, 3, 4, 5]);

//Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  let arr = x.split("");
  arr.forEach((i, item) => (i === " " ? delete arr[item] : i));
  return arr.join("");
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

//Task: Even or Odd
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

evenOrOdd(2);

//Task: Return Negative
const makeNegative = (num) => (num > 0 ? -num : num);

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

//Task: Descending Order

let descendingOrder = (n) => {
  return +String(n)
    .split("")
    .map((value) => Number(value))
    .sort((a, b) => b - a)
    .join("");
};

/* function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
 */
descendingOrder(0);

//Task: Mumbling
function accum(s) {
  let arr = s
    .split("")
    .map((val, i) => val.toUpperCase() + val.repeat(i).toLowerCase())
    .join("-");
  console.log(arr);
}

accum("abcd");

//Task: Get the Middle Character

function getMiddle(s) {
  if (s.length % 2 === 0) {
    console.log(s.slice(s.length / 2 - 1, s.length / 2 + 1));
  } else {
    console.log(s.slice(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2)));
  }
}

getMiddle("test");

getMiddle("testing");

getMiddle("middle");

getMiddle("A");

//Task: You're a square!
const isSquare = (n) => Number.isInteger(Math.sqrt(n));

isSquare(-1);
isSquare(0);
isSquare(3);
isSquare(4);
isSquare(25);
isSquare(26);

//List Filtering
function filterList(l) {
  const newVal = l.filter((val) => typeof val === "number");
  console.log(newVal);
}

filterList([1, 2, "a", "b"]);
filterList([1, "a", "b", 0, 15]);
filterList([1, 2, "aasf", "1", "123", 123]);

//Task: Reversed Strings
function solution(str) {
  const reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
}

solution("world");

//Task: Convert boolean values to strings 'Yes' or 'No'.
const boolToWord = (bool) => (bool ? console.log("Yes") : console.log("No"));

boolToWord(true);
boolToWord(false);

//Task: Opposite number

const opposite = (number) =>
  number === 0 ? console.log(0) : console.log(number * -1);
/* function opposite(number) {
  return(-number);
} */

opposite(1);

//Task: Convert a Number to a String!
function numberToString(num) {
  return `${num}`;
}
numberToString(67);

//Task: Remove First and Last Character
const removeChar = (str) => console.log(str.substr(1, str.length - 2)); //str.slice(1, -1)

removeChar("eloquent");

//Task: Grasshopper - Summation
let summation = function (num) {
  let a = 0;
  for (let i = 0; i <= num; i++) {
    a = a + i;
  }
  console.log(a);
};
//const summation = n => n * (n + 1) / 2;

summation(8); //36

//Find the smallest integer in the array
function findSmallestInt(args) {
  //args.sort(function(a,b) {return a-b})
  return Math.min(...args);
}

findSmallestInt([78, 56, 232, 12, 8]);

function century(year) {
  return console.log(Math.ceil(year / 100));
}

century(1705);
century(89);

//Task: Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

removeExclamationMarks("Hello World!");

//Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3) {
  let arr = [];
  for (let i = 0; i < p1.length; i++) {
    arr.push(+((p1[i] + p2[i] + p3[i]) / 3).toFixed(3));
  }
  return arr;
}

barTriang([4, 6], [12, 4], [10, 10]);

//Task:Basic Mathematical Operations
const basicOp = (operation, value1, value2) => {
  let cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];

  //return eval(value1 + operation+value2);
};

basicOp("+", 4, 7);

//Task: Abbreviate a Two Word Name
function abbrevName(name) {
  //let arr = name.split(' ').map(item => item.substr(0,1).toUpperCase()).join('.') + `.`;
  //console.log(arr);
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

abbrevName("Sam Harris");
abbrevName("P Favuzzi");

//Task: Keep Hydrated!

const litres = (time) => Math.floor(time * 0.5);

litres(12.3);

//Task: Shortest Word
function findShort(s) {
  let wordMin = Math.min(...s.split(" ").map((item) => item.length));
  console.log(wordMin);
}

findShort("bitcoin take over the world maybe who knows perhaps");

//Task Credit Card Mask
function maskify(cc) {
  let arr = cc.split("");
  if (arr.length > 4) {
    for (let i = 0; i < arr.length - 4; i++) {
      arr[i] = "#";
    }
  }
  return arr.join("");
}

//cc.replace(/.(?=....)/g, '#');

maskify("4556364607935616");
maskify("1");
maskify("11111");

//Task: Does my number look big in this?

/* function narcissistic(value) {
  let arr = value.toString().split('');
  let a = arr.length;
  let num = arr.reduce((acc, item)=>{
    return  acc + Math.pow(item, arr.length);
  },0);
  console.log(num);
} */

const narcissistic = (value) =>
  value
    .toString()
    .split("")
    .reduce((a, b, i, arr) => {
      return a + Math.pow(b, arr.length);
    }, 0);

console.log(narcissistic(7));
console.log(narcissistic(371));

//Beginner - Reduce but Grow

const grow = (x) => x.reduce((acc, item) => acc * item);

console.log(grow([4, 1, 1, 1, 4]));

//Task: Reversed Words

function reverseWords(str) {
  str.split(" ").reverse().join(" "); // reverse those words
}

reverseWords("hello world!");
reverseWords("yoda doesn't speak like this");
reverseWords("foobar");
reverseWords("kata editor");
reverseWords("row row row your boat");
reverseWords("");

//Task: Filter out the geese
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((e) => !~geese.indexOf(e));
  //return birds.filter(b => !geese.includes(b));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

//Task: Convert a String to a Number!
let stringToNumber = function (str) {
  return parseInt(str);
};

console.log(stringToNumber("1234"));

//Task: Convert number to reversed array of digits
function digitize(n) {
  return JSON.stringify(n)
    .split("")
    .reverse()
    .map((a) => parseInt(a));
  //return Array.from(String(n), Number).reverse();
}

console.log(digitize(35231));

//Task: Is n divisible by x and y?
const isDivisible = (n, x, y) =>
  Number.isInteger(n / x) && Number.isInteger(n / y);
console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(48, 3, 4));

//Task: Stop gninnipS My sdroW!
function spinWords(string) {
  return string
    .split(" ")
    .map((item) =>
      item.length >= 5 ? item.split("").reverse().join("") : item
    )
    .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));

function findOdd(a) {
  /* let b = a.reduce((acc,el)=> {
    acc[el] = (acc[el] || 0) +1;
    return acc;
  }, {});
  let ret = Object.keys(b);
  let value = Object.values(b);
  return +value.map((item, i) => item%2 !== 0 ? ret[i] : '').filter(item => item !== '').join(); */
  return a.find((item, index) => a.filter((el) => el == item).length % 2); //return a.reduce((a, b) => a ^ b);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, -1, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([-1, -1, -2, -2, 1, 1, 2, 2, 20, 20, 3, 3, 4, 4, 5, 5, 5]));

//Task: Sum of Digits / Digital Root
function digitalRoot(n) {
  if (String(n).length === 1) {
    //return (n - 1) % 9 + 1;
    return n;
  } else {
    return digitalRoot(
      String(n)
        .split("")
        .reduce((acc, el) => {
          return acc + +el;
        }, 0)
    );
  }
}
console.log(digitalRoot(16));
console.log(digitalRoot(456));

//Task: Who likes it?
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names.join("")} likes this`;
    case 2:
      return `${names.join(" and ")} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

//Task Array.diff
function arrayDiff(a, b) {
  return a.filter((el) => !~b.indexOf(el)); //return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));

//Task: Create Phone number
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
  // return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Task: Exes and Ohs
function XO(str) {
  let obj = str
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      if (el === "x" || el === "o") {
        acc[el] = (acc[el] || 0) + 1;
      }
      return acc;
    }, {});
  let value = Object.values(obj);
  return value[0] === value[1];
  /*  let x = str.match(/x/gi);
        let o = str.match(/o/gi);
        return (x && x.length) === (o && o.length); */
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));

const isEvenIndexSumGreater = (arr) => {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let arr1 = arr.filter((el) => el % 2 !== 0).reduce((acc, el) => acc + el);
  let arr2 = arr
    .filter((el) => el % 2 === 0 || 0)
    .reduce((acc, el) => acc + el);
  console.log(arr1, arr2);
  return arr1 > arr2;
};

isEvenIndexSumGreater([1, 100, 2, 200]);
isEvenIndexSumGreater([100, 1, 200, 2]);
isEvenIndexSumGreater([100, 1, 200, 2, 300, 4]);
isEvenIndexSumGreater([100, 1, 200, 2, 4]);

function getSquarePositiveIntegers(array) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return array
    .filter((el) => (Number.isInteger(el) && el % 2 === 0 && el > 0 ? el : ""))
    .map((el) => Math.pow(el, 2));
}

console.log(getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]));

//Task: A Needle in the Haystack

function findNeedle(haystack) {
  /* for(let i = 0; i<haystack.length-1; i++) {
    if(haystack[i] === 'needle') {
      return `found the needle at position ${i}`;
    }
  } */

  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    22,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);

//Task: Returning Strings

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Ryan"));
console.log(greet("Shingles"));

//Task: Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

//Task: Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  if (a !== b && a < b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  }

  /* let min = Math.min(a, b),
          max = Math.max(a, b);
      return (max - min + 1) * (min + max) / 2; */
}

console.log(getSum(-1, 2));
console.log(getSum(0, -1));

console.log(Math.min(0, -1));

//Task: Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
  var sum = null;
  var digits = integer.toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(223));
console.log(getSumOfDigits(0));

//Task Isogram
function isIsogram(str) {
  let arr = str
    .toLowerCase()
    .split("")
    .sort()
    .filter((el, i, arr) => el === arr[i + 1]);
  console.log(new Set(str.toLowerCase()));
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
  //return new Set(str.toUpperCase()).size == str.length;
  //return !/(\w).*\1/i.test(str)
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

//Task: Convert Boolen to string
function booleanToString(b) {
  return `${b}`;
}

console.log(booleanToString(true));
console.log(booleanToString(false));

//Task: Invert values
function invert(array) {
  return array.map((el) => el * -1);
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert([0]));

//Task: Multiples of 3 or 5
function solution(number) {
  let a = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      a += i;
    }
  }
  return a;
}
console.log(solution(10));
console.log(solution(23));
console.log(solution(-1));

function findOutlier(integers) {
  let arr1 = integers.filter((el) => el % 2 === 0);
  let arr2 = integers.filter((el) => el % 2 !== 0);
  if (arr1.length === 1) {
    return arr1[0];
  } else {
    return arr2[0];
  }
  /* var even = integers.filter(a=>a%2==0);
  var odd = integers.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0]; */
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));

// Task: Revers word
function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

//Task: Sum a list but ignore any duplicates
function sumNoDuplicates(numList) {
  /*  const sum = numList.sort((a,b)=> a - b).filter((el, i , arr) => 
  el !== arr[i+1] && el !== arr[i-1] ? el: '').reduce((acc,el)=> {return acc +=el}); */
  const sum = numList
    .sort((a, b) => a - b)
    .reduce((acc, el, i, arr) => {
      if (el !== arr[i + 1] && el !== arr[i - 1]) {
        acc += el;
      }
      return acc;
    }, 0);
  return sum;
}

console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

//Task: Two to One
function longest(s1, s2) {
  /*  let arr = [...s1,...s2].sort().filter((el,i,arr)=>el !== arr[i+1]).join('');
  return arr; */
  return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));

//Task: Be Concise IV - index og an element in an array
const find = (a, e) => (a.indexOf(e) != -1 ? a.indexOf(e) : "Not found");
console.log(find([2, 3, 5, 7, 11], 2));

//Task: be concise I - the ternary operator
const describeAge = (a) =>
  `You're a(n) ${
    a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"
  }`;
console.log(describeAge(64));

//Task: Friend or Foe?
const friend = (friends) => {
  return friends.filter((el) => el.length === 4);
};

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

//Task: Find the next perfect square!
//const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq)+1,2): -1
const findNextSquare = (sq) =>
  Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;
/* function findNextSquare (sq) {
  if(!Number.isInteger(Math.sqrt(sq))) {
    return -1
  } else {
    return Math.pow((Math.sqrt(sq) + 1),2)
  }
  
}
 */
console.log(findNextSquare(319225));
console.log(findNextSquare(155));
console.log(findNextSquare(15241383936));

//Task: Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (input.indexOf(null) === 0) {
    return [];
  }
  let arr = [
    input.filter((p) => p > 0).length,
    input.reduce((accum, el) => {
      return el < 0 ? (accum += el) : (accum += 0);
    }, 0),
  ];
  return arr;
}

console.log(countPositivesSumNegatives([]));

//Task: Find the Integral
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

console.log(integrate(3, 2));

//Task: Categorize New Member
function openOrSenior(data) {
  //return data.map(el=>el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open');
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
console.log(
  openOrSenior([
    [43, 14],
    [55, 7],
    [84, 21],
    [37, 14],
    [48, 24],
    [86, 19],
    [36, 1],
  ])
);

//Task: Printer Error
function printerError(s) {
  const color = /[n-z]/gi;
  const str = s.match(color);
  return `${str === null ? 0 : str.length}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

//Task: Regex validate PIN code
function validatePINMy(pin) {
  let a = pin.match(/[0-9]/gi);
  return (
    a != null && a.length === pin.length && (pin.length == 6 || pin.length == 4)
  );
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("23s4"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("1234"));
console.log(validatePIN("0000"));
console.log(validatePIN("1111"));
console.log(validatePIN("123456"));
console.log(validatePIN("098765"));
console.log(validatePIN("000000"));

//Task: Running out of space
function space(arr) {
  /*   let b = [];
  arr.reduce((acc, el, i)=> {
    acc += el
    b[i] = acc
    return acc
  },'')
  return b */
  let string = "";
  return arr.map((e) => (string += e));
}

console.log(space(["kevin", "has", "no", "space"]));

// Javascript program to print Latin Square

// Function to print n x n
// Latin Square
function printLatin(n) {
  // A variable to control the
  // rotation point.
  let k = n + 1;

  // Loop to print rows
  for (let i = 1; i <= n; i++) {
    // This loops runs only after
    // first iteration of outer
    // loop. It prints numbers
    // from n to k
    let temp = k;

    while (temp <= n) {
      console.log(temp + " ");
      temp++;
    }

    // This loop prints numbers from
    // 1 to k-1.
    for (let j = 1; j < k; j++) console.log(j + " ");

    k--;
    console.log("</br>");
  }
}

let n = 5;

// Invoking printLatin function
printLatin(n);

//Task: Playing Cards Draw Order – Part 1
function drawnCards(arr) {
  let arrCopy = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    arrCopy.push(arr.shift());
    arr.push(arr.shift());
  }
  return arrCopy;
}
/* const draw = deck => {  
	const drawnCards = [];
  
  while (deck.length)
    drawnCards.push(deck.shift()) && deck.length && deck.push(deck.shift());

	return drawnCards;
}; */

console.log(drawnCards(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));

//Task: Length and two values
function alternate(n, firstValue, secondValue) {
  const arr = [];
  while (arr.length < n) {
    if (arr.length < n) {
      if (arr.length % 2 === 0) {
        arr.push(firstValue);
      } else {
        arr.push(secondValue);
      }
    }
  }
  return arr;
}
/* function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
} */

console.log(alternate(5, true, false));

//Task: ES6 string addition
function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

console.log(joinStrings("string1", "string2"));

//Task: total amount of points
function points(games) {
  let a = games.reduce((acc, el) => {
    if (+el.substr(0, 1) > +el.substr(2, 1)) {
      acc += 3;
    } else if (+el.substr(0, 1) === +el.substr(2, 1)) {
      acc += 1;
    }

    return acc;
  }, 0);
  return a;
}

/* const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0) */

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

//Task: Pillars
function pillars(numPill, dist, width) {
  if (numPill <= 1) {
    return 0;
  }
  return dist * 100 * (numPill - 1) + (numPill - 2) * width;
}

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

//Task: Get plane Name By ID
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

console.log(getPlanetName(5));

//Task: Grasshoper - if/else syntax debag
function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
console.log(checkAlive(5));
console.log(checkAlive(0));

//Task: Find the first non-consecutive number
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4]));

//Task: Return Two Highest Values in List
function twoHighest(arr) {
  let arrCopy = Array.from(new Set(arr)).sort((a, b) => a - b);
  if (arrCopy.length === 1 || arrCopy.length === 0) {
    return arrCopy;
  }
  console.log(arrCopy);
  const max1 = arrCopy[arrCopy.length - 1];
  const max2 = arrCopy[arrCopy.length - 2];
  if (max1 === max2) {
    return [max1];
  } else {
    return [max1, max2];
  }
}

console.log(twoHighest([15, 20, 20, 17]));
console.log(
  twoHighest([
    76931, 8173, 13800, 26262, 19640, 64738, 18147, 8663, 10192, 31377, 83567,
    9575, 30270, 89957, 56305, 30548, 47081, 42373,
  ])
);

//Task: Incorrect division method
const solve = (x, y) => x / y;

console.log(solve(2, 4));
console.log(solve(42, 0));

//Task: get ascii vaslue of charater
function getASCII(c) {
  return c.charCodeAt(0);
}

console.log(getASCII("A"));
console.log(getASCII(" "));
console.log(getASCII("!"));

//Task: Double Chair
function doubleChar(str) {
  let doubleStr = "";
  for (let i = 0; i < str.length; i++) {
    doubleStr += str.charAt(i).repeat(2);
  }
  return doubleStr;
}

console.log(doubleChar("Adidas"));

//Task: Price of Mangoes
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

console.log(mango(3, 3));
console.log(mango(9, 5));
console.log(mango(16, 40));

//Task: reverse the bits in an integer
function reberseBits(n) {
  let bit = "";
  while (n !== 0) {
    bit += n - Math.floor(n / 2) * 2;
    n = Math.floor(n / 2);
  }
  arr = bit.split("");
  l = arr.length - 1;
  num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += +arr[i] * 2 ** l;
    l -= 1;
  }
  return num;
}

function reverseBits(n) {
  const binaryReverse = n.toString(2).split("").reverse().join("");
  return parseInt(binaryReverse, 2);
}

console.log(reberseBits(417));

//Task: Complementary DNA
function DNAStrand(dna) {
  let dnaCopy = dna
    .split("")
    .map((item) =>
      item === "A"
        ? "T"
        : item === "T"
        ? "A"
        : item === "C"
        ? "G"
        : item === "G"
        ? "C"
        : item
    );
  return dnaCopy.join("");
}

console.log(DNAStrand("ATTGC"));

//Task: Counting dublicates
function duplicateCount(text) {
  arr = text
    .toLowerCase()
    .split("")
    .sort()
    .filter((item, i, arr) => item === arr[i + 1]);
  set = new Set(arr);
  return set.size;
  //return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount("Indivisibility"));

//Task: String ends with?
function solution(str, ending) {
  return str.substr(-ending.length) === ending || ending === "";
  //return str.endsWith(ending)
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("abc", ""));

//Task: Dublicate Encoder
function dublicateEncoder(word) {
  str = "";
  count = 0;
  arr = word.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count > 1) {
      str += ")";
    } else {
      str += "(";
    }
    count = 0;
  }
  return str;
}

/* function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
} */

console.log(dublicateEncoder("din"));
console.log(dublicateEncoder("recede"));
console.log(dublicateEncoder("Success"));
console.log(dublicateEncoder("(( @"));

//Task: Replace With Alphabet Position
function alphabetPosition(text) {
  str = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) < 97 || text.charCodeAt(i) > 122) {
      continue;
    }
    str += str.length !== 0 ? ` ${text.charCodeAt(i) - 96}` : text.charCodeAt(i) - 96;
  }
  return str;
}

console.log(alphabetPosition("@9|:o^4n"));

//Task: Sum of Odd Cubed Numbwers
function cubeOdd(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(!Number.isInteger(arr[i]) || Number.isNaN(arr[i])) {
      return undefined
    }
    if(arr[i] % 2 !== 0) {
      count += arr[i]**3
    }
  }
  return count
}

/* let cubeOdd = a => {
  var isNumeric = a.every(x=>!isNaN(x))
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
} */

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3,-2,2,3]));
console.log(cubeOdd(["a",12,9,"z",42]));
console.log(cubeOdd([5,12,9,NaN,9]));

//Task: Convert string to camel case
function toCamelCase(str){
  arr = str.split('').filter((item, i, arr) => {
    if(item == '-' || item == '_') {
      arr[i + 1] = arr[i + 1].toUpperCase()
      return item = ''
    } 
    return item
  })
  return arr.join('')
}

/* function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
} */

console.log(toCamelCase("the_stealth_warrior"));

//Task: is this a triangle?
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
}

console.log(isTriangle(7, 2, 2));
console.log(isTriangle(1, 2, 2));

//Task: Ones and Zeros
function binaryArrayToNumber (arr) {
  return parseInt(arr.join(''), 2)
}

console.log(binaryArrayToNumber([1,1,1,1]));

//Task stepik: The number of tags
function count_tags(tags) {
  let result;
  result = [...new Set(tags)].map(el => {
    let i = 0;
    tags.forEach(item => item === el ? i++ : i)
    return `${el}: ${i}`
  })
  return result.join(', ')
}

console.log(count_tags(["javascript", "php", "javascript", "sql", "java", "python", "sql"]));

//Task stepik: Starship
let infStarships = [{"uss_enterprise":{"name":"USS Enterprise","shields":false,"weapons":true,"engine_power":90},"millennium_falcon":{"name":"Millennium Falcon","shields":true,"weapons":true,"engine_power":100},"prometheus":{"name":"Prometheus","shields":false,"weapons":true,"engine_power":70},"dragonfly":{"name":"Dragonfly","shields":true,"weapons":true,"engine_power":70},"ikar":{"name":"Ikar","shields":false,"weapons":true,"engine_power":70},"dedalus":{"name":"Dedalus","shields":true,"weapons":true,"engine_power":70}}]

function findActShields(arr) {
    let result = []
    for (let key in arr[0]) {
      if(arr[0][key]['shields']) {
        result.push(arr[0][key]['name'])
      }
    }
    return result.join(', ')
}

console.log(findActShields(infStarships));


//Task stepik: Count arrays
function countArray(arr) {
  let result = 0;
  let flag = true;
  while (flag) {
    flag = false;
    arr.forEach(el => {
      if(Array.isArray(el)) {
        result++
        flag = true
      }
    })
    arr = arr.flat()
  }
  return result
}

console.log(countArray([1, [2, 3], 3, [4, [5]]]));

//Task: Bit Counting
function countBits (n) {
  let num = n.toString(2).split('').reduce((acc, el) => acc + +el, 0)
  return num
}

console.log(countBits(1234));

//Task: Take a Ten Minutes Walk
function isValidWalk(walk) {
  return walk.length === 10
}

//Task Persistent Bugger
function persistent(num) {
  let count = 0;
  let flag = true;
  if (String(num).length === 1) {
    return 0 
  }
  while(flag) {
    count++;
    num = String(num).split('').reduce((acc, el) => acc * el);
    if(`${num}`.length == 1){
      flag = false;
    }
  }
  return count;
}

console.log(persistent(999));
console.log(persistent(4));
console.log(persistent(25));
console.log(persistent(39));

//Task: Get the mean of an array
function getAverage(marks) {
  return Math.floor(marks.reduce((accum, el) => accum + el) / marks.length);
}

console.log(getAverage([1,2,3,4,5,]));

//Task: Odd or Even

/* function oddOrEven (array) {
  if(array.length == 0 || array.length == 0 && arr[0] == 0) {
    return 'Even'
  }
  let num = array.reduce((acc, el) => acc + el)

  if (num%2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
} */

function oddOrEven (array) {
  return array.reduce((acc, el) => acc + el) % 2 == 0 ? 'odd' : 'even'
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));