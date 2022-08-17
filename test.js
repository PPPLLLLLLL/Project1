
'use strict';

let list;

const order = function() {
    for (let i = 0; i < 3; i++) {
      if (list === null || list === '') {
        i--;
      } else {
        list[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
      }
    }
  };

  order();
