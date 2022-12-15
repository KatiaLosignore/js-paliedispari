console.log('JS OK');

const buttonGame = document.getElementById('send-game');
const selectInput = document.getElementById('select');
const number = document.getElementById('number');
const result = document.getElementById('result');

buttonGame.addEventListener('click', function () {

    const valueSelect = selectInput.value;
    const valueNumber = number.value;

    let resultMessage = '';

    if (!valueSelect || !valueNumber || isNaN(valueNumber)) {
        alert('Hai inserito valori non corretti');
        resultMessage = 'Hai inserito valori non corretti';

    } else {
        const numberCpu = getRandomNumber();
        resultMessage = `La Cpu ha inserito: ${numberCpu} - `;
        console.log(numberCpu);
        const sum = numberCpu + parseInt(valueNumber);

        if (isEven(sum) && valueSelect === 'pari') {
            console.log("Hai vinto");
            resultMessage += 'Hai vinto';
        } else if (isNotEven(sum) && valueSelect === 'dispari') {
            console.log("Hai vinto");
            resultMessage += 'Hai vinto';
        } else {
            console.log("Non hai vinto");
            resultMessage += 'Non hai vinto';
        }

    }

    result.innerText = resultMessage;

});

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

function isEven(number) {
    let result = number % 2 === 0;
    return result;
}

function isNotEven(number) {
    let result = number % 2 !== 0;
    return result;
}


