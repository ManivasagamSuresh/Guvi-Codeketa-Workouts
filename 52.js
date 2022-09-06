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

  let a = userInput[0].split(' ').join(' ');
  let b = userInput[1].split(' ').join(' ');
  let c = userInput[2].split(' ').join(' ');
  
  console.log(a);
  console.log(b);
  console.log(c);

  //end-here
});