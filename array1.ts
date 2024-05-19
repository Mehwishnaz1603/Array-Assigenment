// Part1/;Basic Arrays_Product Inventory
//Challenge #1:
type Product = {
    name: string; price: number;
    inventory: {  
        stock: number; colorOptions: string[], };
};

let products: Product[] = [    // Create array 
    {
        name: "Jackets",  price: 2000,
        inventory: {
            stock: 100, colorOptions: ["red", "blue", "green","yellow"],}
    },
    {
        name: "Shoes", price: 1500,
        inventory: {
            stock: 50, colorOptions: ["black", "white"], }
    },
    {
        name: "Backpack", price: 800,
        inventory: {
            stock: 80, colorOptions: ["gray", "navy"], }
    },
];

function changeColor(product: Product, newColor: string) { // Function for  change colourr and adjust price
    let colorChanging = product.inventory.colorOptions.indexOf(newColor);
    if (colorChanging !== -1) {
        switch (newColor) {             
            case "red":
                product.price *= 1.1;     // Increase 10%
                break;
            case "blue":
                product.price *= 0.95;    // Decrease 5%
                break;
            default:
                break;
        };
        product.inventory.colorOptions.splice(colorChanging, 1);
        product.inventory.colorOptions.unshift(newColor);
    } else {
        console.log(`Color '${newColor}' is not available for ${product.name}.`);
    };
};

products.forEach(product => {    // Display product details
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: ${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    console.log("<<<----<<--->>-->>>");
});

console.log("\nTesting changeColor function:");
changeColor(products[0], "red");     //change colour for red
console.log(products [0]);            // Display updated product details

// Part2: Multi Dimensional Arrays And Tuples_Student Grades
// Challenge:2
type Student = {
    name:string, grades:number[], };

    let students: Student[] = [                   // Create array of product in objects
    { name: "Mehwish", grades: [70,75,80,85],},
    { name: "Ahmed" ,  grades:  [63,89,90,95],},
    { name: "Alina"  , grades: [78,88,92,90,98],},];
    
function calculateAverageGrade(grades: number[]): number{
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}  
students.forEach(student => {
    let averageGrade = calculateAverageGrade(student.grades);
    console.log(`${student.name}'s average grade is: ${averageGrade}`);
});

//Part 3: Array with Types and Indexing - Employee Salaries 
// Challenge:3 
type Employee = {
    name: string, hoursWorked: number; hourlyRate: number;salary: number;
};

let employees: Employee[] = [    // Define an array of employee objects

    { name: "Mehwish", hoursWorked: 25, hourlyRate: 15, salary: 0 },
    { name: "Qeerat", hoursWorked: 15, hourlyRate: 20, salary: 0 },
    { name: "Amna", hoursWorked: 30, hourlyRate: 18, salary: 0 }
];

function calculateSalary(employee: Employee): number {      // Implement function for caculate salary
let employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {          
        employeeSalary *= 1.1;                  // Apply a 10% bonus if hours worked are 20 or more
   };
    return employeeSalary };
employees.forEach(employee => {                 // Update the salaries for each employee
employee.salary = calculateSalary(employee) });
console.log(employees);

