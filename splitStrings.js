/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
 */
const str = 'Hello, World!';

function solution(str){
    let temp = [];
    str = str.split('');
    for(let i = 0; i < str.length; i += 2) {
        if(str[i+1] === undefined) {
            str[i+1] = '_';
        }
        temp.push(str[i] + str[i+1]);

    }
    return temp;
}

console.log(solution(str));