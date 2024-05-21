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