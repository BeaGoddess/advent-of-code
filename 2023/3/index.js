/*
**** Part 1
*/

function checkAjacent(indexNumbers, i, lines) {
    let verify = false;
    let symbol = []

    for (const [index, num] of Object.entries(indexNumbers)) {

        if (parseInt(index) === 0) {
            // Diagonal Esquerda Cima
            if (i - 1 !== -1 && num.index - 1 !== -1 && isNaN(lines[i - 1][num.index - 1]) && lines[i - 1][num.index - 1] !== ".") {
                verify = true;
                if (lines[i - 1][num.index - 1] === "*") symbol.push({ i: i - 1, j: num.index - 1 })
            }
            // Diagonal Esquerda Baixo
            if (i + 1 !== lines.length && num.index - 1 !== -1 && isNaN(lines[i + 1][num.index - 1]) && lines[i + 1][num.index - 1] !== ".") {
                verify = true;
                if (lines[i + 1][num.index - 1] === "*") symbol.push({ i: i + 1, j: num.index - 1 })
            }

            // Esquerda
            if (num.index - 1 !== -1 && isNaN(lines[i][num.index - 1]) && lines[i][num.index - 1] !== ".") {
                verify = true;
                if (lines[i][num.index - 1] === "*") symbol.push({ i: i, j: num.index - 1 })
            }

        }

        if (parseInt(index) === indexNumbers.length - 1) {
            // Diagonal Direita Cima
            if (i - 1 !== -1 && num.index + 1 !== lines[i - 1].length && isNaN(lines[i - 1][num.index + 1]) && lines[i - 1][num.index + 1] !== ".") {
                verify = true;
                if (lines[i - 1][num.index + 1] === "*") symbol.push({ i: i - 1, j: num.index + 1 })
            }

            // Diagonal Direita Baixo
            if (i + 1 !== lines.length && num.index + 1 !== lines[i + 1].length && isNaN(lines[i + 1][num.index + 1]) && lines[i + 1][num.index + 1] !== ".") {
                verify = true;
                if (lines[i + 1][num.index + 1] === "*") symbol.push({ i: i + 1, j: num.index + 1 })
            }

            // Direita
            if (num.index + 1 !== lines[i].length && isNaN(lines[i][num.index + 1]) && lines[i][num.index + 1] !== ".") {
                verify = true;
                if (lines[i][num.index + 1] === "*") symbol.push({ i: i, j: num.index + 1 })
            }
        }

        // Cima
        if (i - 1 !== -1 && isNaN(lines[i - 1][num.index]) && lines[i - 1][num.index] !== ".") {
            verify = true;
            if (lines[i - 1][num.index] === "*") symbol.push({ i: i - 1, j: num.index })
        }

        // Baixo
        if (i + 1 !== lines.length && isNaN(lines[i + 1][num.index]) && lines[i + 1][num.index] !== ".") {
            verify = true;
            if (lines[i + 1][num.index] === "*") symbol.push({ i: i + 1, j: num.index })
        }

    }

    return { verify: verify, symbol: symbol };
}

function part1(lines) {
    let sum = 0;
    let indexNumbers = {
        indexLine: 0,
        number: []
    }

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {

            if (!isNaN(parseInt(lines[i][j]))) {
                indexNumbers.indexLine = i;
                indexNumbers.number.push({
                    index: j,
                    number: lines[i][j]
                })
            } else {

                if (indexNumbers.number.length !== 0) {

                    if (checkAjacent(indexNumbers.number, indexNumbers.indexLine, lines).verify) {

                        const fullNumber = indexNumbers.number.map(function (item) {
                            return item.number;
                        }).join("");
                        sum += parseInt(fullNumber)
                    }

                    indexNumbers.number = [];
                    indexNumbers.indexLine = 0;
                }
            }
        }

    }

    return sum;
}

/*
**** Part 2
*/

function soma(array) {
    let numbersChecked = []
    let sum = 0;

    for (let item of array) {
        let verify = false;
        for (let item2 of array) {

            if (!numbersChecked.find((num) => (num.number === item.number && num.line === item.line) || (num.number === item2.number && num.line === item2.line))) {

                for (let symbol of item.symbol) {

                    if (item.number !== item2.number && item2.symbol.some(item => JSON.stringify(item) === JSON.stringify(symbol))) {
                        numbersChecked.push({ number: item.number, line: item.line })
                        numbersChecked.push({ number: item2.number, line: item2.line })

                        verify = true

                        sum += (item.number * item2.number)
                        break;
                    }
                }
            }
        }
    }


    return sum;
}

function part2(lines) {
    let sum = []
    let indexNumbers = {
        indexLine: 0,
        number: []
    }

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {

            if (!isNaN(parseInt(lines[i][j]))) {
                indexNumbers.indexLine = i;
                indexNumbers.number.push({
                    index: j,
                    number: lines[i][j]
                })
            } else {

                if (indexNumbers.number.length !== 0) {

                    if (checkAjacent(indexNumbers.number, indexNumbers.indexLine, lines).verify) {

                        const fullNumber = indexNumbers.number.map(function (item) {
                            return item.number;
                        }).join("");

                        sum.push({ number: parseInt(fullNumber), symbol: checkAjacent(indexNumbers.number, indexNumbers.indexLine, lines).symbol, line: i })


                    }

                    indexNumbers.number = [];
                    indexNumbers.indexLine = 0;
                }
            }
        }

    }

    return soma(sum);
}


module.exports = { part1, part2 };
