/*
**** Part 1
*/


function findFirst(str) {

    let chars = str.split('');

    for (let i = 0; i < chars.length; i++) {

        if (!isNaN(chars[i])) {
            return chars[i]
        }

    }

    return ""
}

function findLast(str) {

    let chars = str.split('');

    for (let i = chars.length; i >= 0; i--) {

        if (!isNaN(chars[i])) {
            return chars[i]
        }

    }

    return ""
}


function part1(lines) {

    let sum = 0;

    for (let line of lines) {
        let first = findFirst(line)
        let last = findLast(line)
        let result = first + last
        sum += parseInt(result);
    }

    return sum;
}

/*
**** Part 2
*/

let numbers = [{ number: 1, text: "one" }, { number: 2, text: "two" }, { number: 3, text: "three" }, { number: 4, text: "four" }, { number: 5, text: "five" },
{ number: 6, text: "six" }, { number: 7, text: "seven" }, { number: 8, text: "eight" }, { number: 9, text: "nine" }]


function part2(lines) {
    let sum = 0;

    for (let line of lines) {
        let newline = line;

        // Procurar os números com texto que aparece primeiro e em último (por isso existir o if)
        let indexNumbers = numbers.map(element => {
            if (newline.includes(element.text)) {
                // Se o indexOf e o lastIndexOf forem iguais, quer dizer que só existe um com esse valor
                if (newline.indexOf(element.text) === newline.lastIndexOf(element.text)) {
                    return { index: newline.indexOf(element.text), ...element }
                } else {
                    // Se existir mais, buscar o primeiro index e o último index
                    return [{ index: newline.indexOf(element.text), ...element }, { index: newline.lastIndexOf(element.text), ...element }]
                }
            }
        }).flat(1); // Depois juntar tudo


        // Remover os valores undefined e ordenar por ordem sobre o index
        indexNumbers = indexNumbers.filter((item) => item !== undefined).sort((a, b) => {
            if (a.index < b.index) {
                return -1;
            }
            if (a.index > b.index) {
                return 1;
            }
            return 0;
        })

        // Se existir o array indexNumbers, fazer a substituição do número com texto mais perto do início
        let first = findFirst(indexNumbers.length > 0 ? newline.replaceAll(indexNumbers[0].text, indexNumbers[0].number): newline)

        // Se existir o array indexNumbers, fazer a substituição do número com texto mais perto do final
        let last = findLast(indexNumbers.length > 0 ? newline.replaceAll(indexNumbers[indexNumbers.length - 1].text, indexNumbers[indexNumbers.length - 1].number) : newline)
        let result = first + last

        sum += parseInt(result);
    }

    return sum;
}


module.exports = { part1, part2 };
