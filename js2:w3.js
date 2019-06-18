javascript2/week3
//2.1 =======================================

function foo(func) {
  func () ;
 }

 function bar() {
   console.log('Hello, I am bar!');
 }

 foo(bar);

 //2.2/ =======================================

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);

  for (let i = startIndex; i <= stopIndex; i++){
    numbers.push(i);
  }
  console.log(numbers);

  for (let i = 0; i < numbers; i++ ){
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0){
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    } else if (numbers[i] % 3 === 0){
      threeCallback(numbers[j]);
    } else if(numbers[i] % 5 === 0){
      fiveCallback(numbers[j]);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + " is divisible by three");
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + " is divisible by five");
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;

 //2.3 ==============================

// While loop
 function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
// for loop
repeatStringNumTimes("abc", 3);

 function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

for (i = 0; i < 5; i++) {  accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
// Do while loop
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  do {
    accumulatedStr += str;
    num --;
  }
  while (num > 0);

  return accumulatedStr;
}

console.log( repeatStringNumTimes('abc', 3));

//2.4 ==============================
function Dog() {
  this.name = "George",
  this.color = "White",
  this.numLegs = 4;
}

function Dog() {
  this.name = "George",
  this.color = "White",
  this.numLegs = 4;
}

let hound = new Dog();
//2.5 ==================================
 function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(let i=0; i < arr.length; i++){
    for (let j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[100,200],[300,400],[500,600,700]]);

// 2.6==================================

/*if it is a 2D Array we  check each index. since it is going to contain arrays too we need to check if an index is an array.

 we should store the resulting indeces into a result array to  return.
 Knowing the given array will only be a 2D array, we search each index
for an array, and each index that is an array, search again transfering
 all data to the return array.
*/

 //2.7 ====================================

 // value of x in the first function is 9 because x is called outside the function

 const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

 /*When a parameter is passed by reference, the caller and the callee use the same variable for the parameter.
 If the callee modifies the parameter variable, the effect is visible to the caller's variable. if you pass by by reference the change reflects outside.*/

 const y = { x: 9 };
 function f2(val) {
   val.x = val.x + 1;
   return val;
 }
 f2(y);
 console.log(y);
 10
/*but if you pass by value it makes a copy and pass it so the change will not be reflected outside. in other words When a parameter is passed by value,
the caller and callee have two independent variables with the same value and if the callee modifies the parameter variable, the effect is not visible to the caller.*/

//3,==================================

let addSix = createBase(6);

function createBase(num){
    return function addSix(added){
      return num + added
    }
}
addSix(10); // returns 16

// Bonus=====================

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

let unique = [...new Set(letters)];
console.log(unique);
// returns ['a', 'b', 'c', 'd', 'e', 'f',]