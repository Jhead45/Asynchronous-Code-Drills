//Async: Now and Later (portion of instructions)

//step 1
function getNumber(number) {
  console.log(`Your number is ${number}.`);
  return number;
}
// test getNumber(5);

//step 2
function timesFour(number) {
  let theResult = number * 4;
  console.log(theResult);
}
// test timesFour(3);

//step 3
var pickNumber = getNumber(5);

//step 4
setTimeout(() => {
  timesFour(pickNumber);
}, 2000);

//CallBacks (portion of instructions)

//step 1
function getWords(word) {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hi");
  }, 2000);
  setTimeout(() => {
    console.log("Howdy");
  }, 0);
  console.log("Greetings");
}

//step 2 & 3
getWords();

//step 4 & 6

function countdown(num, callback) {
  console.log(callback);
  for (let i = num; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
      return callback();
    }
  }
}

//step 5

function done() {
  console.log("You are done!");
}

//step 7
countdown(20, done);

//Promises instructions

//step 1

var sandwhich = true;

//step 2 - 6

let orderingChickenSandwhich = new Promise(function(resolve, reject) {
  if (sandwhich === true) {
    let lunch = { sandwhich: "chicken", veggies: "lettuce" };
    resolve(lunch);
  } else {
    let err = new Error("Sorry, we seem to be out of chicken sandwhiches.");
    reject(err);
  }
});

//step 7

function orderFood() {
  orderingChickenSandwhich
    .then(lunch => {
      console.log(lunch);
    })
    .catch(err => {
      console.log(err);
    });
}
//step 8
orderFood();

//Chaining Promises stars here

let chainPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 1;
    resolve(num);
  }, 2000);
})
  .then((num) => {
    console.log(num);
    let num2 = num * 2;
    return num2;
  })
  .then((num2) => {
    console.log(num2);
    let num3 = num2 * 4;
    return num3;
  })
  .then((num3) => {
    console.log(num3);
    let num4 = num3 * 6;
    console.log(num4);
  });
