/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */
const list = [1, 2, 3, 'hello', 'world', 7, 'yegor', 0];

function filter_list(l) {
    let tempArr = [];
     l = l.filter( el => {
        if(typeof(el) === "number") {
             tempArr.push(el);
        }
    })
    return tempArr;
}

console.log(filter_list(list));

//Why can't push to l(array)?


// function filter_list(l) {
//     l = l.filter( (el, i) => {
//         if(typeof(el) === "number") {
//              l.push(el);
//         }
//     })
//     return l;
// }
// console.log(filter_list(list));