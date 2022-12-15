console.log('JS OK');

const result = document.getElementById('result');

const word = prompt('Inserisci una parola');

const wordReverse = turnWord(word);


let resultMessage = 'Non palindroma'; 

if (word === wordReverse) {
    console.log('Palindroma');
    resultMessage = 'Palindroma';
} 



function turnWord(word) {
    let wordReversed = '';

    for (let i = word.length -1; i >= 0; i--) {
        const wordCharacter = word[i];
        wordReversed += wordCharacter;
    }

    return wordReversed;

}


result.innerText = resultMessage;