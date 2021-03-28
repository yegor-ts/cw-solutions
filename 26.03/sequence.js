/*
You have read the title: you must guess a sequence. It will have something to do with the number given.

Example
x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
 */

function sequence(x) {
    let result = [];
    for(let i = 0; i < x; i++) {
        result.push(i + 1);
    }
    return result.sort();
}

console.log(sequence(16))