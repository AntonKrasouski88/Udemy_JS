let numberOfFilms = +prompt("How many films did you alredy watch?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

let a = prompt("One of the last films?", "");
let b = prompt("How much was it rated?", "");
let c = prompt("One of the last films?", "");
let d = prompt("How much was it rated?", "");

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB);