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