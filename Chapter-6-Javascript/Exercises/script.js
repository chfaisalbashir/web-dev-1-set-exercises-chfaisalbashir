// Wait for the DOM content to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields and button
    const costPerLiter = document.getElementById('costPerLiter');
    const litersPurchased = document.getElementById('litersPurchased');
    const calculateButton = document.getElementById('calculateButton');
    const totalCostDisplay = document.getElementById('totalCost');

    // Add an event listener to the calculate button
    calculateButton.addEventListener('click', function() {
        // Get the values from the input fields
        const cost = parseFloat(costPerLiter.value);
        const liters = parseFloat(litersPurchased.value);

        // Calculate the total cost
        const totalCost = cost * liters;

        // Display the total cost to the screen
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
