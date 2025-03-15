function divide(a, b) {
    try {
        // Check if b is zero
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        // Handle error
        console.error("Error:", error.message);
        return null; // Return null or some default value
    } finally {
        // This block is always executed, regardless of whether there was an error
        console.log("Execution completed.");
    }
}

// Test cases
console.log(divide(10, 2)); // Should return 5
console.log(divide(10, 0)); // Should return an error message and null
