let numberOfFilms = +prompt("How many films did you alredy watch?", "");

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
}

/* let a = prompt("One of the last films?", "");
let b = prompt("How much was it rated?", "");
let c = prompt("One of the last films?", "");
let d = prompt("How much was it rated?", "");

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB); */

for (let i = 0; i < 2; i++) {
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
firstTask();

