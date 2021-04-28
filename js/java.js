/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */


'use strict';

alert('Welcome to our humble page, where you can test your mind');
let uName = prompt('Please Enter your name');
console.log(uName);
alert('welcome to our page ' + uName + ' you can play the guessing game now');

alert('My Name start with MAHM and ends with OUD');

let userName = prompt('Say my name');

while (userName.toUpperCase() !== 'MAHMOUD') {
  userName = prompt('Say my name');
}
alert('You are GOD DAMN RIGHT');

alert('Answer 5 Question to enter my HEART\n من الاخر بدي اقززك');

let score = 0;
let mGame = prompt('Question Number 1 \nAm I a Gamer?');

switch (mGame.toUpperCase()) {
case 'YES':
case 'Y':
  alert('You Are Rock');
  score++;
  break;
case 'NO':
case 'N':
  alert('You lost a point');
  score--;
  break;
}
console.log(score);

let mWeight = prompt('Question Number 2 \nAm I fat?');

switch (mWeight.toUpperCase()) {
case 'YES':
case 'Y':
  score - 2;
  alert('You lost 2 points');
  break;
case 'NO':
case 'N':
  score++;
  alert('Habibi, you are right?');
  break;
}
console.log(score);


let mTv = prompt('Question Number 3 \nAm I a Breaking Bad Fans ?');
switch (mTv.toUpperCase()) {
case 'YES':
case 'Y':
  score++;
  alert('You Are SOOO RIGHT');
  break;
case 'NO':
case 'N':
  alert('Go watch Cartoon Network');
  break;
}
console.log(score);


let mSport = prompt('Question Number 4 \nAm I a Basketball fan?');
switch (mSport.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Yalaaaa, lets run');
  score++;
  break;
case 'NO':
case 'N':
  alert('Lazzzzzzyyy!');
  break;
}
console.log(score);


let mFood = prompt('Question Number 5 \nAm I a food fan?');
switch (mFood.toUpperCase()) {
case 'YES':
case 'Y':
  score++;
  alert('Burger is the besttt');
  break;
case 'NO':
case 'N':
  alert('I think I am going to eat you');
  break;
}
console.log(score);

alert('Now game #2 \nI have a number and you need to guess it');


let userInput = parseInt(prompt('My number is between 10 to 20 and it is a single number'));
let count = 0;

for (let i = 0; i < 4; i++) {
  if (userInput > 17) {
    alert('You Missed Bro, it is less than ' + userInput);
    userInput = prompt('Guess again!');
    count++;
  } else if (userInput < 17) {
    alert('You Missed Bro, it is Higher than ' + userInput);
    userInput = prompt('Guess again!');
    count++;
  } else {
    score++;
    alert('Man, it seems you are living in my mind ' + 'Your score now is ' + score);
    break;
  }
}
if (count == 4) {
  alert('The number is 17 Habibi');
}
console.log(score);

let nFood = ['MUNSEF', 'BURGER', 'SHAWERMA', 'FRIES', 'FISH', 'MAQLOBEH'];
let answer = prompt('what is my favorite food ?');
answer = answer.toUpperCase();
let counter = 0;
for (let i = 0; i < 6; i++) {
  if (answer === nFood[0] || answer === nFood[1] || answer === nFood[2] || answer === nFood[3] || answer === nFood[4] || answer === nFood[5]) {
    alert('Correct ' + answer + ' is one of the favorite food');
    score++;
    break;
  } else {
    alert('No Dude, ' + answer + ' is not my favorite food');
    answer = prompt('Please, Guess again!');
    counter++;
  }
}

if (counter == 6) {
  alert('You have consumed all your guesses and my favorite food are the following \nMunsef, Burger, Shawerma, Fries, Fish and Maqlobeh');
}

console.log(score);
alert(uName + ' Your score is ' + score);

if (score > 5) {
  alert(uName + ' it seems that you are me');
} else if (score <= 5) {
  alert(uName + ' , we msut to get to know each other more');
}