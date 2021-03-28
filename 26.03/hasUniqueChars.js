/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
 */
const str = 'hello';

function hasUniqueChars(str){
    str = str.split('');
    for(let i = 0; i < str.length; i++) {
        if(str.includes(str[i], i + 1)) {
            return false;
            break;
        }
    }
    return true;
}

console.log(hasUniqueChars(str));