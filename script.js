"use sctrict";

const answer = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(answer);

const personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const movie1 = prompt("Один из последних просмотренных фильмов?", "");
const rat1 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[movie1] = rat1;

console.log(personalMovieDB);