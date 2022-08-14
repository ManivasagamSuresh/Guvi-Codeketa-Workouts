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

  
 let min = Infinity;
let a = userInput[0].split(' ');
// console.log(a);
if( a[0]<a[1])
{
    console.log(a[0]);
    
}
else {
    console.log(a[1]);
}

  //end-here
});