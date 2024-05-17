let sum = ""
let operatorClicked = false

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value

        if (value === "C") {
            sum = ""
            updateDisplay("")
            return;
    }

    if (value === "=") {
        calculate()
        return;
    }

    if (value === '.') {
        if (!sum.includes('.')) {
            sum += '.';
        }}

    else if(["+", "-", "*", "/"].includes(value)) {
        if (!operatorClicked) {
            sum += value;
            operatorClicked = true;
        }

        }else {
            sum += value;
            operatorClicked = false;
        }
        updateDisplay(sum)
    
})
   
})
function calculate() {
    try {
        const result = eval(sum);
        updateDisplay(result);
        sum = result.toString();
    } catch (error) {
        updateDisplay('Error');
        sum = '';
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}