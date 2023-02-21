// Setup
/* const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if( prop != "tracks" && value != "") {
            records[id][prop] = value;
      } else if (prop == "tracks" && records[id].hasOwnProperty(prop) === false) {
            records[id][prop] = [value]; 
      } else if (prop == "tracks" && records[id].hasOwnProperty(prop) == true && value != "") {
        records[id][prop].push(value);
      } else if (value === "") {
        delete records[id][prop];
      }
    
    return console.log(records);
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA'); */

  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if(contacts[i].hasOwnProperty(prop)) {
        return  (contacts[i][prop]);
        } else  {
          return  ("No such property");
        }
      }
    }
  return "No such contact";
  }
  
  lookUpProfile("Akira", "likes");
  lookUpProfile("Kristian", "lastName");

  console.log (Math.floor(Math.random()*10));
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return console.log (Math.floor(Math.random()*(myMax - myMin + 1)) + myMin);
    // Only change code above this line
  }

  randomRange(2, 20);
  function convertToInteger(str) {
    console.log (parseInt(str));
  }
  
  convertToInteger("10011");

  const a = parseInt("11", 2);
  console.log(parseInt("111", 2));

  function testWhile(a) {
    var x = 0;
    for(let i = 1; i <= a; i++) {
      console.log(Number.isInteger(a/2));
      if (Number.isInteger(i/2) || a/2 == 0) {
        x +=i;
    } else {
      continue;
    }
    return console.log (x);
    }
    
}

testWhile(3);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return console.log (arr);
}
const arr = removeFirstTwo(source);

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5/9 * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    return (this.fahrenheit = celsius * 9.0 / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result =>{
      console.log(result);
    });
  } else {  
    reject("Data not received");
  }
});
//Regular expressions
//1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);
//2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);
//3
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 =petRegex.test(petString);
console.log(result2);
//4
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result3 = fccRegex.test(myString1);
console.log(result3);
//5
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/ig;
let result4 = extractStr.match(codingRegex);
console.log(result4);
//6
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result5 = twinkleStar.match(starRegex);
console.log(result5);
//7
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi;
let result6 = unRegex.test(exampleStr);
console.log(result6); 
//8
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex);
console.log(result7); 
//9
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result8 = quoteSample1.match(alphabetRegex);
console.log(result8); 
//10
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result9 = quoteSample2.match(myRegex2);
console.log(result9);
//11
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou1-9]/gi;
let result10 = quoteSample3.match(myRegex3);
console.log(result10); 
//12 Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi; // Change this line
let result11 = difficultSpelling.match(myRegex4);
console.log(result11);