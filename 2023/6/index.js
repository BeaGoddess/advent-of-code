/*
**** Part 1
*/

function part1(lines) {
    // [ [times...], [meters...] ]
    let newLines = lines.split("\r\n").map((n) => n.replace(/\s+/g, " ").split(": ")[1].split(" ").map(Number))
    let ways = []

    for (let i = 0; i < newLines[0].length; i++) {
        let time = newLines[0][i]
        let distance = newLines[1][i]
        let win = 0;

        for (let j = 1; j < time; j++) {
            let meters = (time - j) * j
            if (meters > distance) win++;
        }

        ways.push(win)
    }

    return ways.reduce((acc, curr) => acc * curr);
}

/*
**** Part 2
*/

function part2(lines) {
    // [ [times...], [meters...] ]
    let newLines = lines.split("\r\n").map((n) => n.replace(/\s+/g, " ").split(": ")[1].replaceAll(" ", "")).map(Number)
    let ways = []

    let time = newLines[0]
    let distance = newLines[1]
    let win = 0;

    for (let j = 1; j < time; j++) {
        let meters = (time - j) * j
        if (meters > distance) win++;
    }
    ways.push(win)

    return ways.reduce((acc, curr) => acc * curr);
}

module.exports = { part1, part2 };
