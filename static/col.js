// static/col.js

function myzipFunction() {
    let item1 = prompt("Enter items for item1 (comma-separated):");
    let item2 = prompt("Enter items for item2 (comma-separated):");

    axios.get(`/col/myzip?item1=${item1}&item2=${item2}`)
        .then(response => {
            alert(`MyZip Result: ${JSON.stringify(response.data.result)}`);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
