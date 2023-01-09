// Write your code here:
const greetAliens = arr => {
  let greeting = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ` + arr[i] +`, we humans offer our unconditional surrender!`)
  }
  return greeting
}

// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
