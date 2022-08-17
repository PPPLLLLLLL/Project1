"use sctrict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
    },

    rememberMyFilms: function() {
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
    },
    
    detecdPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
      } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
      } else {
        alert('Произошла ошибка');
      }
    },
    
    showMyDB: function(hidden) {
      if (hidden == false) {
        console.log(personalMovieDB);
      }
    },
    
    writeYourGenres: function() {
      for (let i = 0; i < 3; i++) {

        let genr = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
        if (genr === null || genr === '') {
          i--;
        } else {
          personalMovieDB.genres[i] = genr;
        }
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i+1} - это ${item}`);
      });
    },

    toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    }
};


