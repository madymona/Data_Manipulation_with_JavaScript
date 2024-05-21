const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5. Cache the result in a variable.

const divisibleByFive = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0)
console.log (divisibleByFive)

//Check if the first number is larger than the last. Cache the result in a variable.

const firstIsLarger = n1 > n4;
console.log(firstIsLarger)


/* Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.*/

const subtractResult = n1 - n2
const multiplyResult = subtractResult * n3
const remainderResult =  multiplyResult % n4

console.log (remainderResult)


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const numbersLess25 = (n1 <= 25) && (n2 <= 25) && (n3 <= 25) && (n4 <= 25)

console.log(numbersLess25)


// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

const distanceTotal = 1500 
const budgetTotal = 175
const costPerGallon = 3

// At 55 mph
const mph55 = 30
const gallonsNeeded55 = distanceTotal / mph55
const totalFuelCost55 = gallonsNeeded55 * costPerGallon
const isBudgetEnough55 = totalFuelCost55 <= budgetTotal
const tripTime55 = distanceTotal / 55
console.log(`At 55 mph: Gallons needed: ${gallonsNeeded55} ,  Total fuel cost: ${totalFuelCost55}
Budget is enough: ${isBudgetEnough55}, Trip time: ${tripTime55}`)