// Arrays for products and their prices
const products = ["apple", "banana", "orange"];
const prices = [6, 9, 7];

// Function to display all products and their prices
function displayProducts() {
    console.log("Available products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product} - R${prices[index]}`);
    });
}

// Function to get selected products from the user
function getUserSelections() {
    const selections = [];
    let productIndex;
    while (true) {
        productIndex = parseInt(prompt("Enter the product number to select (or type 0 to finish):")) - 1;
        if (productIndex === -1) break;
        if (productIndex >= 0 && productIndex < products.length) {
            selections.push(productIndex);
        } else {
            console.log("Invalid product number. Please try again.");
        }
    }
    return selections;
}

// Function to calculate the total cost of selected products
function calculateTotalCost(selections) {
    let totalCost = 0;
    selections.forEach(index => {
        totalCost += prices[index];
    });
    return totalCost;
}

// Function to handle the purchase process
function handlePurchase(userBudget) {
    displayProducts();
    const userSelections = getUserSelections();
    if (userSelections.length === 0) {
        console.log("No products selected.");
        return;
    }

    const totalCost = calculateTotalCost(userSelections);

    console.log(`Total cost: R${totalCost}`);

    if (totalCost > userBudget) {
        console.log("Insufficient budget. Please select fewer products.");
    } else {
        const change = userBudget - totalCost;
        console.log(`Purchase successful! Your change is: R${change}`);
    }
}

// User's budget (for demonstration purposes)
const userBudget = 50;

// Run the purchase process
handlePurchase(userBudget);