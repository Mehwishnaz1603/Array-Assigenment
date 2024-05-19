// Part1/;Basic Arrays_Product Inventory
//Challenge:

type Product = { name: string; price: number;
                 inventory: { stock: number; colorOptions: string[], };
};
let products: Product[] = [     // Create array of product in objects
   
    {   name: "T-shirt", price: 800, 
        inventory: { stock: 80, colorOptions: ["red", "blue", "green","black","yellow"], }
    },
    {   name: "Jeans", price: 1200,
        inventory: {stock: 60, colorOptions: ["black", "blue", "grey","offwhite"], }
    },
    {   name: "Shoes", price: 2000, 
        inventory: { stock: 75, colorOptions: ["white", "black", "red","yellow","blue"],}
    }, ];

function changeColor(product: Product, newColor: string): void { //Implement a function that takes  product object and new color as input
    switch (newColor) {                                            // Implementation and Adjust price based on the new color 
        case "red": 
            product.price *= 1.1;              ;                  // Increase 10% price
            break;
        case "blue":
            product.price *= 0.95;                                // Decrease  5% price
            break;
    }
    product.inventory.colorOptions.push(newColor);                // Update the color property of the product
}
products.forEach(product => {                                      // Display product details
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    console.log("<<==-----<<==------==>>------==>>");
});

console.log("Changing color of T-shirt to red:");    // Example usage of changeColor function
changeColor(products[0], "red");
console.log("New Price of T-shirt to blue:", products[0].price);
console.log("Updated Available Colors:", products[0].inventory.colorOptions);
changeColor(products[1], "blue");
console.log("New Price of T-shirt:", products[1].price);
console.log("Updated Available Colors:", products[1].inventory.colorOptions);

// Part2: Multi Dimensional Arrays And Tuples_Student Grades
// Challenge:
type Student = {
    name:string, grade:number[],
};
let students: Student[] = [                   // Create array of product in objects
   
    { name: "Mehwish", grade: [10,20,30,40],},
    { name: "Ahmed" , grade: [10,20,30,40],},
    { name: "Alina"  , grade: [10,20,30,40],},];
    
function calculateAverageGrade(grade: number): void {   //Implement a function that takes grade as input
