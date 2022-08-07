"use sctrict";


let numberOfFilms;
console.log(numberOfFilms);

function start () {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const movie1 = prompt("Один из последних просмотренных фильмов?", "");
    const rat1 = prompt("На сколько оцените его?", "");
  
    if (movie1 == null || rat1 == null) {
      console.log('ERORR');
      i--;
    } else if (movie1 == '' || rat1 == '') {
      console.log('ERORR');
      i--;
    } else if (movie1.length >= 50 || rat1.length >= 50) {
      console.log('ERORR');
      i--;
    } else {
      personalMovieDB.movies[movie1] = rat1;
    }
  }
}

// rememberMyFilms();

function detecdPersonalLevel () {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert('Произошла ошибка');
  }
}

// detecdPersonalLevel();

function showMyDB(hidden) {
  if (hidden == false) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
  }
}

writeYourGenres();