/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"
 */
const str = "Hey fellow warriors";
// --Solution 1--
// function spinWords(str){
//     str = str.split(' ');
//     for(let i = 0; i < str.length; i++) {
//         if(str[i].length >= 5) {
//             str[i] = str[i].split('').reverse().join('');
//         }
//     }
//     return str.join(' ');
// }

// --Solution 2--

function spinWords(str){
    str = str.split(' ')
             .map( word => {
                 if(word.length >= 5) {
                     word = word.split('').reverse().join('');
                     return word;
                 } else {
                     return word;
                 }
             });

    return str.join(' ');
}

console.log(spinWords(str));