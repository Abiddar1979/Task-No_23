/* Task#23 :Conditional Tests:Write a series of conditional tests.Print a stetement discribing each test and your pridiction for the results of each test.Your code should look something like this:

let car = `suburu`;

console.log("Is car == `suburu` ? I predict True. ")

console.log(car == `suburu`)

*Look colsely at your results , and make sure you understand why each each line evaluates to True or False.

*Create at least  10 tests. Have at least 5 tests evaluate to true and another 5 tests
evaluate to False .*/

let car : string = `suburu`;

console.log("\n----> 5 tests evaluate to True :");

// Test 1:

console.log("Is car == `suburu`? I predict True.");
console.log(car === `suburu`);

// Test 2:
console.log("Is car != `toyota`? I predict True.");
console.log(car !== `toyota`);

// Task 3:
console.log("Is the length of car > 4? I predict True.");
console.log(car.length > 4);

// Task 4:
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <=6);

// Task 5:
console.log("Dose car start with `s`? I predict True.");
console.log(car.startsWith(`s`) );

console.log("\n-----> 5 test evaluate to False:");

// Test 1:
console.log("Is car == `honda`? I pridict False.")
console.log(car == `honda`);

// Test 2:
console.log("Is car in uppercase? I pridict False.");
console.log(car.toUpperCase() === car);

// Test 3:
console.log("Is car === `Suburu`? I pridict False.");
console.log(car === `Suburu`);

// Test 4:
console.log("Is car === `Audi`? I pridict False.");
console.log(car === `Audi`);

// Test 5:
console.log("Is the length of the car === 7 ? I pridict False");
console.log(car.length === 7);





