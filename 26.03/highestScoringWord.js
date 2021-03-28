/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

const str = 'Hello my name is Yegor';
const str1 = 'man i need a taxi up to ubud';
const str2 = 'y';

// Hello -> 8+5+12+12+15 = 52, my -> 13+25 = 38, name -> 14+1+13+5= 33, is -> 9+19 = 28, Yegor -> 25+5+7+15+18 = 70


function count(text) {
    let tempArr = text;
    tempArr = text.toLowerCase().split(' ').map( word => {
        let score = 0;
        for(let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        }
        return score;
    });
    return text.split(' ')[tempArr.indexOf(Math.max(...tempArr))];
}

// function count(text) {
//     const alphabet = [
//         'a', 'b', 'c', 'd', 'e', 'f',
//         'g', 'h', 'i', 'j', 'k', 'l',
//         'm', 'n', 'o', 'p', 'q', 'r',
//         's', 't', 'u', 'v', 'w', 'x',
//         'y', 'z'
//     ]
//     let tempArr = text;
//      tempArr = text.split(' ').map( word => {
//         let score = 0;
//         for(let i = 0; i < word.length; i++) {
//             score += alphabet.indexOf(word[i]);
//         }
//         return score;
//     });
//     return text.split(' ')[tempArr.indexOf(Math.max(...tempArr))];
// }

console.log(count(str2));