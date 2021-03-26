/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
let total = 0;
for(let i = 0; i < n; i++) {
    total += i;
}

let numInRow = 2 * total + 1;

let rowSums = 0;
for(let i = 0; i < n; i++) {
    rowSums += numInRow;
    numInRow = numInRow + 2;
}
console.log(rowSums);
return rowSums;
}

rowSumOddNumbers(4); // rowSums : 64

/*
    P.S. The best solution is return n ** 3   :smiling:
*/