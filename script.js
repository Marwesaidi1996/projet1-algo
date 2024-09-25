function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Comparer l'élément courant avec le suivant
            if (arr[j] > arr[j + 1]) {
                // Échanger les éléments
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Exemple d'utilisation
const tableau = [64, 25, 12, 22, 11];
const tableauTrie = bubbleSort(tableau);
console.log(tableauTrie); // Affiche [11, 12, 22, 25, 64]


function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Trouver l'indice du minimum dans le reste du tableau
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Échanger le minimum trouvé avec l'élément à la position i
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

/* Exemple d'utilisation
const array1 = [64, 25, 12, 22, 11];
const tableauTrie = selectionSort(array1);
console.log(tableauTrie); // Affiche [11, 12, 22, 25, 64]*/

function length(sentence) {
    let count = 0
    let i = 0
    while (sentence[i]) {
        count++
        i++
    }
    return count
}
function numbersOfWord(sentence) {
    let count = 0
    for (i = 0; i <= sentence.length; i++) {
        if (sentence[i] === '') {
            count++
        }
    }
    return count + 1
}
function numberVowels(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === 'a' ||
            sentence[i].toLowerCase() === 'e' ||
            sentence[i].toLowerCase() === 'i' ||
            sentence[i].toLowerCase() === 'o' ||
            sentence[i].toLowerCase() === 'u') { // Suppression de la virgule ici
            count++;
        }
    }
    return count;
}
function analyseSentense(sentence) {

    const sentenceData = {}
    sentenceData.length = length(sentence)
    sentenceData.words = numbersOfWord(sentence)
    sentenceData.vowels = numberVowels(sentence)
    return sentenceData
}
console.log(analyseSentense('hello world'))


