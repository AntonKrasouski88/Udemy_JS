function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let number;
    if (nbPetals >arr.length) {
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

function nameShuffler(str){
    let arr = str.split(" ");
    for (let i = arr.length - 2; i >= 0; i--) {
        arr.unshift(arr.pop());
    }
    return arr.join(" ");
}
nameShuffler('john McClane');

function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona');

function sayHello(name) {
  return `Hello ${name}`;
}
sayHello('Mr. Spock');

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] *= array[i];
    }
  }
  return array;  
}

squareOrSquareRoot([4,3,9,7,2,1]);

function sevenAte9(str){
  let arr = str.split('');
  arr.forEach((item, i)=> {
    if(item == '9' && arr[i+1] == 7 && arr[i-1] == 7) {
      delete arr[i];
    }
  });
  let strNo9 = arr.join('');
  return console.log (strNo9);
}

sevenAte9('165561786121789797');

function expressionMatter(a, b, c) {
  const arr = [];
  arr[0] =  a*(b + c);
  arr[1] = a * b * c;
  arr[2] =  a + b * c;
  arr[3] = (a + b) * c;
  arr[4] = a + b + c;
  arr.sort(function(a, b) {
    return a - b;
  });
  return console.log (arr[4]);
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
  let arr3 = [...new Set(arr1.concat(arr2).sort((a,b)=>(a-b)))];
  console.log (arr3);
}

mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);

var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
  6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
  5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
  7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
   7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
   7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
   5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
     5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
     5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
     9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
    9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
    7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
    5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
    5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
    7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];

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
  if(mpg * fuelLeft >= distanceToPump) {
    return console.log (true);
  } else {
    return console.log(false);
  }
};

zeroFuel(100, 50, 1);

function repeatStr (n, s) {
  let repeat = "";
  for(let i = 1; i <= n; i++) {
    repeat +=s;
  }
  return repeat;
}

repeatStr(2, "ha ");

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin == true) {
    sharkSpeed = sharkSpeed/2;
  }
  let timeDistance = pontoonDistance/youSpeed;
  let timeShark = sharkDistance/sharkSpeed;
  if(timeDistance < timeShark) {
    return console.log ("Alive");
  } else {
    return console.log ("Shark Bait!");
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
validateUsr('asddsa');
validateUsr('a');
validateUsr('Hass');
validateUsr('');
validateUsr('asd43 34');
validateUsr('Hasd_12assssssasasasasasaasasasasas');
validateUsr('____');

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this;
}; //Is the string uppercase?

//Find Maximum and Minimum Values of a List
var min = function(list){ 
  return Math.min(...list);
};

var max = function(list){
  
  return Math.max(...list);
};

//Opposites Attract
function lovefunc(flower1, flower2){
 /*  if (flower1%2 == 0 && flower2%2 == 0 || flower1%2 == 1 && flower2%2 == 1) {
    return console.log (false);
  } else {
    return console.log (true);
  } */
  return console.log (flower1 % 2 !== flower2 % 2);
}

lovefunc(1,4);
lovefunc(2,4);
lovefunc(691,815);

//Task: Simple multiplication
/* function simpleMultiplication(number) {
  if(number%2 == 0) {
    return console.log (number*8);
  } else { 
    return console.log(number*9);
  }
} */

function simpleMultiplication(n) {
  return console.log (n * (n % 2 ? 9 : 8));
}

simpleMultiplication(2);
simpleMultiplication(1);

//Task:Count Odd Numbers below n
function oddCount(n){
  return Math.floor(n/2);
}

oddCount(15);
oddCount(15023);

//Task:Square(n) Sum
function squareSum(numbers){
  let numSum = 0;
  numbers.forEach((i) => numSum += i*i);
  return numSum;
}

squareSum([0, 3, 4, 5]);

//Task:Moving Zeros To The End
function moveZeros(arr) {
  arr.forEach((i, j) =>  {
    if (i === 0 && typeof i != Object) {
     delete arr[j];
     arr.push(0);
    }
  });
  arr = arr.filter(function(num) {
    return (num != undefined || num == null);
  });
  return console.log (arr);
}
/* var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
} */

moveZeros([1,2,0,1,0,1,0,3,0,1,false,{},[],null]);

//Task: String Templates - Bug Fixing
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

buildString('Cheese','Milk','Chocolate');

//Task: The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return console.log(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate));
}

checkCoupon('123','123','September 5, 2014','October 1, 2014');