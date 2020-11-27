'use strict'

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("anita lava la tina"));
console.log(palindrome("almostomla"));

/*function palindrome(str) {
    let phrase = str.match(/[a-z0-9]/ig)
    phrase = phrase.join('')
    phrase = phrase.toLowerCase()
    let eq = 0
    console.log(phrase)
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === phrase[phrase.length - (i + 1)]) {
            eq = 0
            console.log(phrase[i], phrase[phrase.length - (i + 1)])
        } else {
            eq = 1
        }
    }
    if (eq == 0) {
        return true
    } else {
        return false
    }
}*/

//Esta última falló con la palabra "almostomla" y es mas larga