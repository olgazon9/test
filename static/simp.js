// static/simp.js

let simpFunctionCalled = false;

function addNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    axios.get(`/simp/add/${num1}/${num2}`)
        .then(response => {
            document.getElementById("result").innerText = `Result: ${response.data.result}`;
            simpFunctionCalled = true;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function subtractNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    axios.get(`/simp/subtract/${num1}/${num2}`)
        .then(response => {
            document.getElementById("result").innerText = `Result: ${response.data.result}`;
            simpFunctionCalled = true;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
