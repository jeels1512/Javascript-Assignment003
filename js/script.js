// Check if JavaScript is loaded
console.log("JavaScript Loaded Successfully!");

// Handle User Form Submission
document.getElementById("submit-btn")?.addEventListener("click", function () {
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let userEmail = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let province = document.getElementById("province").value.trim();
    let membership = document.querySelector('input[name="membership"]:checked');

    if (!firstName || !lastName || !userEmail) {
        alert("Please fill out all required fields!");
        return;
    }

    let output = `
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
        <p><strong>Membership:</strong> ${membership ? membership.value : 'None'}</p>
    `;

    document.getElementById("userDetailsDisplay").innerHTML = output;
});

// Handle Excel Function Calculations
document.getElementById("calculate-btn")?.addEventListener("click", function () {
    console.log("Calculate button clicked!");

    let numberStr = document.getElementById("numberField").value.trim();
    if (!numberStr) {
        alert("Please enter some numbers!");
        return;
    }

    let numbers = numberStr.split(" ").map(num => parseFloat(num));
    if (numbers.some(isNaN)) {
        alert("Invalid input! Please enter numbers separated by spaces.");
        return;
    }

    let selectedFunction = document.querySelector('input[name="calcOption"]:checked');
    let result = null;

    if (selectedFunction) {
        switch (selectedFunction.value) {
            case "sum":
                result = numbers.reduce((a, b) => a + b, 0);
                break;
            case "average":
                result = numbers.reduce((a, b) => a + b, 0) / numbers.length;
                break;
            case "max":
                result = Math.max(...numbers);
                break;
            case "min":
                result = Math.min(...numbers);
                break;
        }

        // If a valid function was found, display the result
        if (result !== null) {
            document.getElementById("calcOutput").innerHTML = `Result: ${result}`;
        } else {
            document.getElementById("calcOutput").innerHTML = "Error: Invalid calculation selection.";
        }
    } else {
        document.getElementById("calcOutput").innerHTML = "Error: No function selected.";
    }

    console.log("Calculation Result:", result);
});
