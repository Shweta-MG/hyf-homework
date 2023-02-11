// 1. Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

//https://stackoverflow.com/questions/63256487/array-of-functions-in-js
//https://www.geeksforgeeks.org/array-of-functions-in-javascript/

/* This calculation is close to Indian tax calculation for lowest slab (But not typical because of various tax slabs and relaxation. I am making it general for homework). For basic income, tax concession is given to 50% of income. Then 5% of remaining income can be out of tax scope related to child support. Now 30% of remaining income is to be taxed. I will calculate the tax amount. */

const calculatedTaxedAmount = (sequence, yearlyIncome) => sequence.reduce((accumulatedOutput, tax) => tax(accumulatedOutput), yearlyIncome);

const taxAmount = [
    function (income) { return income * 0.50 },
    function (income) { return income * 0.05 },
    function (income) { return income * 0.30 }
];

console.log(calculatedTaxedAmount(taxAmount, 500)); //500 thousand Indian Rupees
console.log(calculatedTaxedAmount(taxAmount, 1000)); //1000 thousand Indian Rupees



// 2. Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip

const area = (x, y) => x * y;
console.log(area(8, 9));
console.log(area(8, 8));



// 3. Create an object that has a key whose value is a function. Try calling this function.
const maths = {
    square: function (side) { return side ** 2 },
    perimeter: function (side) { return side * 4 },
    volume: function (side) { return side ** 3 }
}

console.log(maths.square(10));
console.log(maths.perimeter(10));
console.log(maths.volume(10));