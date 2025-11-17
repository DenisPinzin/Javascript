/*
3. Prochaine date dans une semaine
Écris une fonction qui prend une date en entrée et retourne la date qui est exactement une
semaine plus tard.
*/

const date = new Date('2022-05-20');

function addWeeks(date) {
  date.setDate(date.getDate() + 7);

  return date.toDateString();
}

const newDate = addWeeks(date);
console.log(newDate)

