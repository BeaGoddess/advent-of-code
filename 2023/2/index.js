/*
**** Part 1
*/

function checkColors(cube, red, green, blue) {

    let colors = cube.split(", ")
    for (let color of colors) {
        if (color.includes("green") && color.split(' ')[0] > green) return true;
        if (color.includes("red") && color.split(' ')[0] > red) return true;
        if (color.includes("blue") && color.split(' ')[0] > blue) return true;
    }

    return false;
}

function part1(lines, red, green, blue) {
    let sum = 0;

    for (let line of lines) {
        let cubes = line.split(': ')[1].split("; ");
        let numberGame = parseInt(line.split(': ')[0].split(' ')[1]);
        let verify = true

        for (let cube of cubes) {
            if (checkColors(cube, red, green, blue)) verify = false;
        }

        if (verify) sum += numberGame
    }

    return sum;
}

/*
**** Part 2
*/

function getNumber(cube) {
    let colors = cube.split(", ")
    let green = 0;
    let red = 0;
    let blue = 0;

    for (let color of colors) {
        if (color.includes("green") && green < color.split(' ')[0]) green = parseInt(color.split(' ')[0])
        if (color.includes("red") && red < color.split(' ')[0]) red = parseInt(color.split(' ')[0])
        if (color.includes("blue") && blue < color.split(' ')[0]) blue = parseInt(color.split(' ')[0])
    }
    return {
        green: green,
        blue: blue,
        red: red
    };
}

function part2(lines) {
    let sum = 0;

    for (let line of lines) {
        let green = 0;
        let red = 0;
        let blue = 0;
        let cubes = line.split(': ')[1].split("; ");

        for (let cube of cubes) {
            if (green < getNumber(cube).green) green = getNumber(cube).green
            if (blue < getNumber(cube).blue) blue = getNumber(cube).blue
            if (red < getNumber(cube).red) red = getNumber(cube).red
        }
        sum += (green * blue * red)
    }

    return sum;
}


module.exports = { part1, part2 };
