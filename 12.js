// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a = userInput[0].split(' ');
let b = (a[0]*a[1]*a[2])/100;
let SI = b.toFixed(2);
console.log(SI);

  //end-here
});