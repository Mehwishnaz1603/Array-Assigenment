//   Assigenment Of Array  //
//Q1: Create an array named fruit that contains the following string elements: "apple", "banana","mango","orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log("Fruits:", fruits);
//Q2: Declare an array namednumbers that can contain only number elemens and initialize it with values 10,20.30,and 40.
var numbers = [10, 20, 30, 40];
console.log("Numbers:", numbers);
//Q3: Access the third element of the fruits array and assign it to a variable named thirdFuit
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
var thirdFruit = fruits[2];
console.log("ThirdFruit:", thirdFruit);
//Q4: change the second element of the numbers array to 25.
//Assuming numbers array in Q2 const numbers: number[]= [10,20,30,40];
numbers[1] = 25;
console.log("Change Second Element:", numbers);
//Q5: Add the element "grape" to the end of the fruits array using the method.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
fruits.push("grape");
console.log("Add Element End Of Array:", fruits);
//Q6: Remove the last element from the fruits array.
fruits.pop();
console.log("Remove Last Element Of Array:", fruits);
//Q7: Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
var firstFruits = fruits.shift();
console.log("Remove First Element Of Array:", fruits);
//Q8: Add the element "kiwi"to the begining of the array using the method.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
fruits.unshift("kiwi");
console.log("Add Element Begining Of Array:", fruits);
//Q9: Remove 2 elements from the fruits array starting from index1 using method.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
fruits.splice(1, 2);
console.log("Removing Elements Starting Of Index 1:", fruits);
//Q10: Insert the elements "pinapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
console.log("Inserting Element at Index2:", fruits);
//Q11: Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
var citrusFruits = fruits.slice(0, 2);
console.log("First Two Elements:", citrusFruits);
//Q12: Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
// Assuming fruits array in Q1 let fruits: string[]= ["apple","banana","mango","orange"];
var lastTwoFruits = fruits.slice(-2);
console.log("Last Two Element:", lastTwoFruits);
