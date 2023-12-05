/*
**** Part 1
*/

function part1(lines) {
    let input = lines.split("\r\n");
    let seeds = input[0].split(": ")[1].split(" ").map(Number);
    let maps = input.slice(1).reduce((acc, line) => {
        if (line === '') {
            acc.push([]);
        } else {
            acc[acc.length - 1].push(line);
        }
        return acc;
    }, [[]]).filter(section => section.length > 0).map((item) => item.slice(1).map(m => m.split(" ").map(Number)));

    let location = seeds.map((j) => {
        let dest = j
        maps.map((map) => {
            let num = dest
            map.map((n) => {
                if (n[1] <= dest && dest < n[1] + n[2]) {
                    let diff = n[0] - n[1]
                    num = dest + diff
                }
            })
            dest = num;
        })
        return dest
    })

    return Math.min(...location);
}

/*
**** Part 2


function getSeeds(garden) {
    let array = [];

    for (let i = 0; i < garden.length; i += 2) {
        let start = parseInt(garden[i]);
        let difference = parseInt(garden[i + 1]) - 1;
        let end = start + difference;

        for (let j = start; j <= end; j++) {
            array.push(j);
        }
    }

    return array;
}

function part2(lines) {
    let input = lines.split("\r\n");
    let seeds = getSeeds(input[0].split(": ")[1].split(" "))

    let maps = input.slice(1).reduce((acc, line) => {
        if (line === '') {
            acc.push([]);
        } else {
            acc[acc.length - 1].push(line);
        }
        return acc;
    }, [[]]).filter(section => section.length > 0).map((item) => item.slice(1).map(m => m.split(" ").map(Number)));

    let location = seeds.map((j) => {
        let dest = j
        maps.map((map) => {
            let num = dest
            map.map((n) => {
                if (n[1] <= dest && dest < n[1] + n[2]) {
                    let diff = n[0] - n[1]
                    num = dest + diff
                }
            })
            dest = num;
        })
        return dest
    })

    return Math.min(...location);
}
*/

module.exports = { part1 };
