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
      if (selectedFunction) {
    if (selectedFunction.value === "sum") {
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
    } else if (selectedFunction.value === "average") {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        result = sum / numbers.length;
    } else if (selectedFunction.value === "max") {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > result) {
                result = numbers[i];
            }
        }
    } else if (selectedFunction.value === "min") {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < result) {
                result = numbers[i];
            }
        }
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
};
