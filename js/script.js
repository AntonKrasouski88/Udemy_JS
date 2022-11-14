'use strict';
/* let numberOfFilms = +prompt("How many films did you alredy watch?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
if (personalMovieDB.count < 10) {
    alert("watched quite a few movies");
} else if (personalMovieDB.count >= 10, personalMovieDB.count <=30) {
    alert("You are a classic viewed");
} else if (personalMovieDB.count > 30) {
    alert("You are cinephile");
} else {
    alert("Error");
} */

/* let a = prompt("One of the last films?", "");
let b = prompt("How much was it rated?", "");
let c = prompt("One of the last films?", "");
let d = prompt("How much was it rated?", "");

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB); */

/* for (let i = 0; i < 2; i++) {
    let a = prompt("One of the last films?", "");
    let b = prompt ("How much was it rated?", "");
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = []; 
    // Пишем решение вот тут
    for (let i=0; i<arr.length; i++) {
        result[i]= arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask(); */

/* function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] == "number") {
            data[i] = data[i] * 2;
        } else {
            data[i] = data[i] + ' - done';
        }
    }
    console.log(data); */
    /* let resultArr = typeof data[0];
    console.log(resultArr);
    if (resultArr == "number") {
        data[0] = data [0] * 2;
    } 
    console.log(data[0]); */

    // Не трогаем
    //return data;
//}
//secondTask();

/* function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        for (let j = (data.length - 1); j >=0; j--) {
            result[i] = data[j];
            i++;
        }
    }
    console.log(result);
    // Не трогаем
    return result;
}
thirdTask();

function sayHello (name) {
    console.log("Привет", name);
}

sayHello("Антон");

function returnNeighboringNumbers (a) {
    console.log([a-1, a, a+1]);
}
returnNeighboringNumbers(8); 

function getMathResult(first, second) {
    let hyphen = "---";
    let result = "";
    if (second <= 0 || typeof second === "string") {
    result = first;
    } else if (typeof second !== "string") {
        for (let i = 1; i <= second; i++) {
            if (i < second) {
                result += first * i + hyphen;
            } else {
                result += first * i;
            }
        }
    }
    console.log(result);
}
getMathResult(5, 5);
getMathResult(3, 10);
getMathResult(10, 5);
getMathResult(10, "5");
getMathResult(7, 0);

let mathResult = "";
let b = "0";
let a = 20;       
if (b <= 0 || typeof second == "string" ) {
     mathResult = a;
}
console.log(mathResult); */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function  () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim();
            const b = prompt('На сколько оцените его?', '').trim();
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log ("Done");
            } else {
                console.log("Error");
                i--;
            }
            }
        },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10, personalMovieDB.count < 30) {
            alert('Вы класический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Error');
        }
    },
    showMyDB: function (checkConditions) {
        if(!checkConditions) {
          console.log(personalMovieDB);
        }
    },
    writeYourGengers: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre!="" && genre != null) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                console.log(Error);
                i--;
            }  
        }
        personalMovieDB.genres.forEach(function(item, i, arr) { //Add console like list the genre of films
            console.log(`Любимый жанр ${i+1} - это ${item}`); //using the method forEach
        });
    },
    toggleVisibleMyDB: function (checkPrivat) {
        if(!checkPrivat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGengers();
personalMovieDB.showMyDB(personalMovieDB.privat);


function pow (a, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= a
    }
    console.log(result)
}
// Рекурсия(recursion)
function pow(a,n) {
    if(n === 1) {
        return a
    } else {
        return a * pow(a, n-1)
    }
}

pow(2,1) // 2
pow(2,2) // 4
pow(2,3) // 8
pow(2,4) // 16

let studens = {
    js: [{
        name: 'John',
        progress: 100,
    }, {
        name: 'Ivan',
        progress: 60,
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20,
        }, {
            name: 'Anna',
            progress: 18,
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    } 
};

function getTotalProgressByIteration (data) {
    let total = 0;
    let studens = 0;

    for (let course of Object.values(data)) {
        if(Array.isArray(course)) {
            studens += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            } 
    } else {
        for (let subCourse of Object.values(course)) {
            studens += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
                total += subCourse[i].progress;
            }
        }
    }
}
    
    return total / studens
}

//console.log (getTotalProgressByIteration(studens))

function getTotalProgressByRecursion (data) {
    if(Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress; 
        }
        return [total, data.length]
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            let subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            console.log(total[0])
            total[1] += subDataArr[1];
            console.log(total[1])

        }
        return total;
    }
}

const result = getTotalProgressByRecursion(studens);
console.log(result[0]/result[1]);


function factorial (n) {
    if (!Number.isInteger(n) || typeof n !== 'number') {
        return ('Error')
    }
    if (n <= 1) {
        return n = 1 
    } else {
        return n * factorial(n-1)
    }
}
console.log(factorial ('dsfdsfs'))
console.log(factorial (3)) 
console.log(factorial (4.5))