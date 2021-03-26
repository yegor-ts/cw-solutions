/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
 */

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2)+ 1)
            + " ".repeat(nFloors - i - 1))
    }
    return tower;
}

console.log(towerBuilder(8));