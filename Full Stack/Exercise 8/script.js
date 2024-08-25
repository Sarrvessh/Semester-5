const appendToDisplay = value => document.getElementById("display").value += value;

const clearDisplay = () => document.getElementById("display").value = "";

const deleteLast = () => document.getElementById("display").value = 
    document.getElementById("display").value.slice(0, -1);

const calculateResult = () => {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
};

const calculateSqrt = () => {
    let currentDisplay = document.getElementById("display").value;
    try {
        document.getElementById("display").value = Math.sqrt(eval(currentDisplay));
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
};

const calculateCbrt = () => {
    let currentDisplay = document.getElementById("display").value;
    try {
        document.getElementById("display").value = Math.cbrt(eval(currentDisplay));
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
};

const calculateTrig = (func) => {
    let currentDisplay = document.getElementById("display").value;
    try {
        let radians = eval(currentDisplay) * (Math.PI / 180);  // Convert to radians
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(radians);
                break;
            case 'cos':
                result = Math.cos(radians);
                break;
            case 'tan':
                result = Math.tan(radians);
                break;
        }
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
};
