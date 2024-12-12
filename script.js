document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let fontSize = 24; 

    function displayValue(value) {
        display.value += value;
        adjustFontSize();
    }

    function clearDisplay() {
        display.value = '';
        display.style.fontSize = fontSize + 'px';
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
        adjustFontSize();
    }

    function calculate() {
        try {
            let result = eval(display.value);
            display.value = result;
            adjustFontSize();
        } catch (error) {
            display.value = 'Error';
            display.style.fontSize = fontSize + 'px';
        }
    }

    function adjustFontSize() {
        if (display.value.length > 10) {
            display.style.fontSize = '18px';
        } else if (display.value.length > 15) {
            display.style.fontSize = '16px';
        } else if (display.value.length > 20) {
            display.style.fontSize = '14px';
        } else {
            display.style.fontSize = fontSize + 'px';
        }
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            let value = button.textContent;
            if (value === 'C') {
                clearDisplay();
            } else if (value === 'DEL') {
                backspace();
            } else if (value === '=') {
                calculate();
            } else {
                displayValue(value);
            }
        });
    });
});