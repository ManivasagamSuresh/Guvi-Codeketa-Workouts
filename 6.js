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

  let a=1 ;
let n=userInput[0];

for(let i=n ; i>=1 ; i--)
{
  
 a = a*i;
}
console.log(a);

  //end-here
});