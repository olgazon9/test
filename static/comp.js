// static/comp.js

function sumOfDigits() {
    if (!simpFunctionCalled) {
        alert("Please call at least one simp function first.");
        return;
    }

    let number = prompt("Enter a number for sum of digits:");
    if (number === null || isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    axios.get(`/comp/sum_of_digits/${number}`)
        .then(response => {
            alert(`Sum of digits: ${response.data.result}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function checkPalindrome() {
    if (!simpFunctionCalled) {
        alert("Please call at least one simp function first.");
        return;
    }

    let number = prompt("Enter a number for palindrome check:");
    if (number === null || isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    axios.get(`/comp/is_palindrome/${number}`)
        .then(response => {
            alert(`Is palindrome: ${response.data.result}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
