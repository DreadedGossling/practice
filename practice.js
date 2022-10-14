//Return a Message "Hello World"
function message(hello) {
  return "Hello World"
}

// Return the Remainder from Two Numbers
// remainder(1, 3) ➞ 1
function remainder(x,y) {
  return 
}

// Return the First Element in an Array
// getFirstValue([1, 2, 3]) ➞ 1
function getFirstValue(arr) {
	return arr[0]
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//lessThan100(22, 15) ➞ true
// 22 + 15 = 37
function lessThan100(a, b) {
	let sum = ( a+b )
  if ( sum>100 ){
    return true
  }
  else {
    return false
  }
}

//Create a function that returns true when num1 is equal to num2; otherwise return false.
//isSameNum(4, 8) ➞ false
function isSameNum(x,y) {
  if ( x===y ) {
    return true
  }
  else {
    return false
  }
}
//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
//points(7, 5) ➞ 29
function points(twoPointers, threePointers) {
	const total = (2*twoPointers) + (3*threePointers)
	return total
}

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// implement a function that returns the total number of legs of all the animals.
// animals(2, 3, 5) ➞ 36  The order of animals passed is animals(chickens, cows, pigs).
function animals(a,b,c) {
  const chicken = 2*a;
  const cow = 4*b;
  const pig = 4*c;
  const total = (chicken+cow+pig)
  return total
}

//Write a function that takes an integer minutes and converts it to seconds.
// convert(3) ➞ 180
function convert(minutes) {
  return minutes*60
}

// Create a function that takes the age in years and returns the age in days.
// calcAge(65) ➞ 23725
function calcAge(age) {
  return age*365
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  return "something"+" "+a
}

// Consider a && b:
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
function and(a, b) {
	return ( a && b )
}

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// sumPolygon(3) ➞ 180      formula is (n - 2) x 180
function sumPolygon(n) {
  const formula = ( (n - 2)*180 );
  return formula
}

//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
// printArray(3) ➞ [1, 2, 3]
function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

//Create a function that takes a boolean variable flag and returns it as a string.
function boolToString(flag) {
	return flag.toString()
}

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// calculator("45-15") ➞ 30
function calculator(str) {
	return eval(str)
}

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// frames(10, 1) ➞ 600
function frames(sec,fr) {
  return (sec*( fr*60 ))
}




