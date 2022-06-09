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