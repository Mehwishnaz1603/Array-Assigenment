var products = [
    {
        name: "Jackets", price: 2000,
        inventory: {
            stock: 100, colorOptions: ["red", "blue", "green", "yellow"],
        }
    },
    {
        name: "Shoes", price: 1500,
        inventory: {
            stock: 50, colorOptions: ["black", "white"],
        }
    },
    {
        name: "Backpack", price: 800,
        inventory: {
            stock: 80, colorOptions: ["gray", "navy"],
        }
    },
];
function changeColor(product, newColor) {
    var colorChanging = product.inventory.colorOptions.indexOf(newColor);
    if (colorChanging !== -1) {
        switch (newColor) {
            case "red":
                product.price *= 1.1; // Increase 10%
                break;
            case "blue":
                product.price *= 0.95; // Decrease 5%
                break;
            default:
                break;
        }
        ;
        product.inventory.colorOptions.splice(colorChanging, 1);
        product.inventory.colorOptions.unshift(newColor);
    }
    else {
        console.log("Color '".concat(newColor, "' is not available for ").concat(product.name, "."));
    }
    ;
}
;
products.forEach(function (product) {
    console.log("Product Name: ".concat(product.name));
    console.log("Price: ".concat(product.price.toFixed(2)));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(", ")));
    console.log("<<<----<<--->>-->>>");
});
console.log("\nTesting changeColor function:");
changeColor(products[0], "red"); //change colour for red
console.log(products[0]); // Display updated product details
var students = [
    { name: "Mehwish", grades: [70, 75, 80, 85], },
    { name: "Ahmed", grades: [63, 89, 90, 95], },
    { name: "Alina", grades: [78, 88, 92, 90, 98], },
];
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
}
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("".concat(student.name, "'s average grade is: ").concat(averageGrade));
});
var employees = [
    { name: "Mehwish", hoursWorked: 25, hourlyRate: 15, salary: 0 },
    { name: "Qeerat", hoursWorked: 15, hourlyRate: 20, salary: 0 },
    { name: "Amna", hoursWorked: 30, hourlyRate: 18, salary: 0 }
];
function calculateSalary(employee) {
    var employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employeeSalary *= 1.1; // Apply a 10% bonus if hours worked are 20 or more
    }
    ;
    return employeeSalary;
}
;
employees.forEach(function (employee) {
    employee.salary = calculateSalary(employee);
});
console.log(employees);
