// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

// Write the recipe (algorithm) in the comments. Write the code.

let die1 = getRandomInt(6)
console.log(`The first die is ${die1}`)

// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let die2 = getRandomInt(6)
console.log(`The second die is ${die2}`)

// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let total = die1 + die2
console.log(`The total is ${total}`)


//   - If the total of the two dice is 7 or 11, the player wins
if (total == 7 || total == 11) {
  console.log(`Winner!`)
} else if (total == 2 || total == 3 || total == 12) {
  console.log(`Loser...`)
} else {
  console.log(`the point is ${total}`)
}


//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"