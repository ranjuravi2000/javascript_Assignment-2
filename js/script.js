let result = document.getElementById("result");

function getNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

// display result
function showResult(value) {
    result.innerText = "Result: " + value;
}


document.getElementById("add").addEventListener("click", function () {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let output = a + b;
    showResult(output);
});


document.getElementById("sub").addEventListener("click", function () {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let output = a - b;
    showResult(output);
});


document.getElementById("mul").addEventListener("click", function () {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let output = a * b;
    showResult(output);
});


document.getElementById("div").addEventListener("click", function () {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];

    if (b === 0) {
        showResult("Cannot divide by 0");
    } else {
        let output = a / b;
        showResult(output);
    }
});


document.getElementById("square").addEventListener("click", function () {
    let a = Number(document.getElementById("num1").value);
    let output = a * a;
    showResult(output);
});


document.getElementById("cube").addEventListener("click", function () {
    let a = Number(document.getElementById("num1").value);
    let output = a * a * a;
    showResult(output);
});