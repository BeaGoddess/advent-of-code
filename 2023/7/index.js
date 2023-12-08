let numCard = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
let numCard2 = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Q", "K", "A"]
let win = ["high", "one", "two", "three", "full", "four", "five"]

/*
**** Part 1
*/

function getCount(num, nums) {
    let count = 0;

    for (let n of nums) {
        if (n === num) count++;
    }

    return count;
}

function getComb(hand) {

    let comb = []
    for (let i = 0; i < hand.length; i++) {
        let count = getCount(hand[i], hand)
        if (!comb.some(comb => comb[0] === hand[i]) && count > 1) comb.push([hand[i], count])
    }

    return comb
}

function getWin(numbers) {

    switch (true) {
        case numbers.some(comb => comb[1] === 5):
            return "five";

        case numbers.some(comb => comb[1] === 4):
            return "four";

        case numbers.some(comb => comb[1] === 3) && numbers.some(comb => comb[1] === 2):
            return "full";

        case numbers.some(comb => comb[1] === 3):
            return "three";

        case numbers.filter(comb => comb[1] === 2).length === 2:
            return "two";

        case numbers.filter(comb => comb[1] === 2).length === 1:
            return "one";

        default:
            return "high";
    }

}

function part1(lines) {
    // Card, Bid, Rank
    let newLines = lines.map(hand => hand.split(" ")).map(hand => [...hand, 0]);

    newLines = newLines.sort((left, right) => {
        let leftWin = getWin(getComb(left[0]))
        let rightWin = getWin(getComb(right[0]))

        if (leftWin === rightWin) {

            for (let i = 0; i < left[0].length; i++) {
                if (left[0][i] !== right[0][i]) {

                    if (numCard.indexOf(left[0][i]) < numCard.indexOf(right[0][i])) {
                        return -1
                    } else {
                        if (numCard.indexOf(left[0][i]) > numCard.indexOf(right[0][i])) {
                            return 1
                        }
                    }
                }
            }

            return 0;
        } else {
            if (win.indexOf(leftWin) < win.indexOf(rightWin)) {
                return -1
            } else {
                return 1
            }
        }

    }).map((item, index) => { item[2] = index + 1; return item })

    return newLines.reduce((acc, curr) => {
        return acc + (parseInt(curr[1])) * curr[2]
    }, 0)
}

/*
**** Part 2
*/

function getComb2(hand) {

    let comb = []
    for (let i = 0; i < hand.length; i++) {
        let count = getCount(hand[i], hand)
        if ((!comb.some(comb => comb[0] === hand[i]) && count > 1) || (hand[i] === "J" && !comb.some(comb => comb[0] === hand[i]))) comb.push([hand[i], count])
    }

    // Find a JOKER
    if (comb.find((i) => i[0] === "J")) {

        // Get count of JOKER
        let sum = comb.find((i) => i[0] === "J")[1];

        // Remove JOKER from combinations (don't remove if It is only J)
        comb = comb.length > 1 ? comb.filter((c) => c[0] !== "J") : comb

        if (comb.length !== 0 && comb[0][0] !== "J") {
            comb[0][1] = comb[0][1] + sum;
        } else {
            // Add one value to get more power on hand
            comb[0][1] = comb[0][1] !== 5 ? comb[0][1] + 1 : comb[0][1]
        }

    }

    return comb
}


function part2(lines) {
    // Card, Bid, Rank
    let newLines = lines.map(hand => hand.split(" ")).map(hand => [...hand, 0]);

    newLines = newLines.sort((left, right) => {
        let leftWin = getWin(getComb2(left[0]))
        let rightWin = getWin(getComb2(right[0]))

        if (leftWin === rightWin) {

            for (let i = 0; i < left[0].length; i++) {
                if (left[0][i] !== right[0][i]) {

                    if (numCard2.indexOf(left[0][i]) < numCard2.indexOf(right[0][i])) {
                        return -1
                    } else {
                        if (numCard2.indexOf(left[0][i]) > numCard2.indexOf(right[0][i])) {
                            return 1
                        }
                    }
                }
            }

            return 0;
        } else {
            if (win.indexOf(leftWin) < win.indexOf(rightWin)) {
                return -1
            } else {
                return 1
            }
        }

    }).map((item, index) => { item[2] = index + 1; return item })

    return newLines.reduce((acc, curr) => {
        return acc + (parseInt(curr[1])) * curr[2]
    }, 0)
}
// 248716834- NOT 248801421

module.exports = { part1, part2 };
