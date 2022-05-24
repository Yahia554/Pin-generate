function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('disply-pin').value = pin;

};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin() {
    const pin = document.getElementById('disply-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successNotify = document.getElementById('notify-success');
    const failErorr = document.getElementById('notify-fail');
    if (pin == typedNumber) {

        successNotify.style.display = 'block';
        failErorr.style.display = 'none';
    }
    else {
        successNotify.style.display = 'none';
        failErorr.style.display = 'block';
    }
}
