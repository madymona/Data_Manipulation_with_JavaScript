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

const subtractResult = n2 - n1
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

let mph55 = 30
const gallonsNeeded55 = distanceTotal / mph55
const totalFuelCost55 = Math.ceil(gallonsNeeded55 * costPerGallon)
const isBudgetEnough55 = totalFuelCost55 <= budgetTotal
const tripTime55 = Math.ceil(distanceTotal / 55)
console.log(`55 mph: Gallons needed: ${gallonsNeeded55} ,  Total fuel cost: ${totalFuelCost55}
Budget is enough: ${isBudgetEnough55}, Trip time: ${tripTime55}`)


let mph60 = 28
const gallonsNeeded60 = Math.ceil(distanceTotal / mph60)
const totalFuelCost60 = Math.ceil(gallonsNeeded60 * costPerGallon)
const isBudgetEnough60 = totalFuelCost60 <= budgetTotal
const tripTime60 = distanceTotal / 60
console.log(`60 mph: Gallons needed: ${gallonsNeeded60} ,  Total fuel cost: ${totalFuelCost60}
Budget is enough: ${isBudgetEnough60}, Trip time: ${tripTime60}`)


let mph75 = 23
const gallonsNeeded75 = Math.ceil(distanceTotal / mph75)
const totalFuelCost75 = Math.ceil(gallonsNeeded75 * costPerGallon)
const isBudgetEnough75 = totalFuelCost75 <= budgetTotal
const tripTime75 = distanceTotal / 75
console.log(`75 mph: Gallons needed: ${gallonsNeeded75} ,  Total fuel cost: ${totalFuelCost75}
Budget is enough: ${isBudgetEnough75}, Trip time: ${tripTime75}`)
