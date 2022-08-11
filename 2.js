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



  let array = userInput[0].split('');
  
  
for( let i = 0 ; i < array.length ; i++ )
{
console.log(array[i]);
}
  
  
  });