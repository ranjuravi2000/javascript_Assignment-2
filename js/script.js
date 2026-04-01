function getNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

function add() {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let result = a + b;
    display(result);
}


function subtract() {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let result = a - b;
    display(result);
}


function multiply() {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];
    let result = a * b;
    display(result);
}


function divide() {
    let values = getNumbers();
    let a = values[0];
    let b = values[1];

    if (b === 0) {
        display("Can't divide by 0");
    } else {
        let result = a / b;
        display(result);
    }
}


function square() {
    let a = Number(document.getElementById("num1").value);
    let result = a * a;
    display(result);
}


function cube() {
    let a = Number(document.getElementById("num1").value);
    let result = a * a * a;
    display(result);
}

// Display result-----------
function display(result) {
    document.getElementById("result").innerText = "Result: " + result;
}