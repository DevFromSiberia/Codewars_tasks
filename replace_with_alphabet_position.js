/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

*/

function alphabetPosition(text) {
    const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const srcArr = text.split('')
    const arr = []

    for (let i = 0; i <= srcArr.length - 1; i++) {
        for (let j = 0; j <= ALPHABET.length - 1; j++) {
            if (srcArr[i].toLowerCase() === ALPHABET[j]) {
                arr.push(j + 1)
            }
        }
    }
    const numText = arr.join(' ')
    return numText
}

