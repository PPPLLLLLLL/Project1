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

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert('Произошла ошибка');
}

console.log(personalMovieDB);

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"