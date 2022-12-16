console.log('JS OK');

const result = document.getElementById('result');
const textElement = document.getElementById('text');
const button = document.getElementById('button');



button.addEventListener('click', function(){

    const valueText = textElement.value.trim();

    console.log(valueText);


    const wordReverse = turnWord(valueText);

    let resultMessage = 'Non palindroma'; 

    if (valueText === wordReverse) {
         console.log('Palindroma');
        resultMessage = 'Palindroma';
    } 


    result.innerText = resultMessage;

});

function turnWord(word) {
    let wordReversed = '';

    for (let i = word.length -1; i >= 0; i--) {
        const wordCharacter = word[i];
        wordReversed += wordCharacter;
    }

    return wordReversed;

}


