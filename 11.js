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

  let m = [0,31,28,31,30,31,30,31,31,30,31,30,31];
let i = userInput[0];
if(i>0 && i<=12){
console.log(m[i]);
}
else {console.log("Error");
}

  //end-here
});