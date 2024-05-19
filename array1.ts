// Part1/;Basic Arrays_Product Inventory
//Challenge:
type Product = {
    name: string;
    price: number;
    inventory: {
        stock: number;
        colorOptions: string[];
    };
};

// Create an array of product objects
const products: Product[] = [
    {
        name: "T-shirt",
        price: 20,
        inventory: {
            stock: 100,
            colorOptions: ["red", "blue", "green"]
        }
    },
    {
        name: "Sneakers",
        price: 50,
        inventory: {
            stock: 50,
            colorOptions: ["black", "white"]
        }
    },
    {
        name: "Backpack",
        price: 30,
        inventory: {
            stock: 80,
            colorOptions: ["gray", "navy"]
        }
    }
];

// Function to change color and adjust price
function changeColor(product: Product, newColor: string) {
    const colorIndex = product.inventory.colorOptions.indexOf(newColor);
    if (colorIndex !== -1) {
        // Implementing logic to adjust price based on the new color
        switch (newColor) {
            case "red":
                product.price *= 1.1; // Increase by 10%
                break;
            case "blue":
                product.price *= 0.95; // Decrease by 5%
                break;
            // Add more cases for other colors if needed
            default:
                break;
        }
        product.inventory.colorOptions.splice(colorIndex, 1);
        product.inventory.colorOptions.unshift(newColor);
    } else {
        console.log(`Color '${newColor}' is not available for ${product.name}.`);
    }
}

// Display product details
products.forEach(product => {
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    console.log("------------------------");
});

// Testing changeColor function
console.log("\nTesting changeColor function:");
changeColor(products[0], "red"); // Change color of the first product to red
console.log(products[0]); // Display updated product details
// Part2: Multi Dimensional Arrays And Tuples_Student Grades
// Challenge:
type Student = {
    name:string, grades:number[],
};
let students: Student[] = [                   // Create array of product in objects
   
    { name: "Mehwish", grades: [10,20,30,40],},
    { name: "Ahmed" , grades: [10,20,30,40],},
    { name: "Alina"  , grades: [10,20,30,40],},];
    
function calculateAverageGrade(grades: number[]): number{
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}  
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`${student.name}'s average grade: ${averageGrade}`);
});

