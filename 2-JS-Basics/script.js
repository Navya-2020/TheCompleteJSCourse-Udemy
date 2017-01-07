//Lecture: variables
/*
var name = 'John';
console.log(name);

//variable names in JS can be camelCase
var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = false;
console.log(fullAge);
*/

//Primitive JS Data Types
  //Number: Floating point numbers, for decimals and integers.
  //String: Sequence of characters, used for text.
  //Boolean: Logical data type that can only be true or false.
  //Undefined: Data type of a variable, which does not have a value yet.
  //Null: Also means 'non-existent'.

//Lecture: variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age);
//prints John26
//Type Coercion - when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type.

console.log(age + age);
//prints 52

var job, isMarried

console.log(job)

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty-six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?')
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

//Lecture: operators
/*
var now = 2017;
var birthYear = 2017 - 26;
birthYear = now - 26 * 2;
//2017 - 52
//1965

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

//Parentheses have higher operator precedence than arithmetic operators
//Multiplication, division, and remainder (modulo) have higher operator precendence than addition and subtraction.
ageJohn = (3 + 5) * 4 - 6;
//multiple equal signs (assignment) have operator precedence from right-to-left
//ageJohn = ageMark = 26;

//same as ageJohn = ageJohn + 1;
ageJohn++
console.log(ageJohn);

//same as ageMark = ageMark * 2;
ageMark *= 2;
console.log(ageMark);
*/

//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
//if(false)
  console.log(name + ' married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

//isMarried = false;
isMarried = false;
*/
/*
if (isMarried) {
  console.log('YES!');
} else {
  console.log('NO');
}
*/
/*
//We don't necessarily need the else
if (isMarried) {
  console.log('YES!');
}

//== does type coercion, and the === does not
//=== check both value and data type, but == only checks value
//=== is the more advised comparison operator
if (23 === "23") {
  console.log('Something to print...');
}
*/

//Lecture: boolean logic and switch
/*
//if else statement example with boolean logic
var age = 20;

if (age < 20) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man');
} else {
  console.log('John is a man');
}

//switch statement example
var job = 'teacher';

job = prompt('What does John do?')

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  //if no cases are met, then we can have a default case
  default:
    console.log('John does something else.');
}
*/

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :) )

1. Create variables for the heights and ages of two friends and assign some values.
2. Calculate their scores.
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

//SOLUTION:
var heightJohn = 160;
var ageJohn = 20;

var heightMike = 170;
var ageMike = 19;

var heightMary = 158;
var ageMary = 22;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
var scoreMary = heightMary + 5 * ageMary;

/*
//First example
if (scoreJohn > scoreMike) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else {
  console.log('there is a draw.');
}
*/

//Second example
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
  console.log('It\'s a draw!');
}