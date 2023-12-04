/*
**** Part 1
*/

function checkPoints(winningNumbers, card) {

    let points = 0;
    let numbersChecked = 0;

    for (let number of card) {
        if (winningNumbers.includes(number)) {
            numbersChecked++;

            if (numbersChecked > 1) {
                points = points * 2;
            } else {
                points++;
            }
        }
    }

    return points;
}

function part1(lines) {
    let sum = 0;

    for (let line of lines) {
        let cards = line.split(': ')[1].split(" | ");
        let winningNumbers = cards[0].trim().split(/\s+/);
        let card = cards[1].trim().split(/\s+/);
        sum += checkPoints(winningNumbers, card)
    }

    return sum;
}

/*
**** Part 2
*/

function checkBonus(winningNumbers, card) {

    let numbersChecked = 0;

    for (let number of card) {
        if (winningNumbers.includes(number)) {
            numbersChecked++;
        }
    }

    return numbersChecked;
}

function part2(lines) {
    let sum = 0;
    let bonusCards = []

    for (let line of lines) {
        let cards = line.split(': ')[1].split(" | ");
        let winningNumbers = cards[0].trim().split(/\s+/);
        let card = cards[1].trim().split(/\s+/);
        let numberCard = parseInt(line.split(': ')[0].trim().split(/\s+/)[1]);

        let repeat = bonusCards.find((item) => item.card === numberCard)?.multipy;
        if (repeat === undefined) repeat = 1;


        if (checkBonus(winningNumbers, card) !== 0) {
            for (let i = 1; i <= checkBonus(winningNumbers, card); i++) {
                let cardBonus = bonusCards.find((item) => item.card === numberCard + i)
                if (cardBonus !== undefined) {
                    let index = bonusCards.map((item) => { return item.card }).indexOf(numberCard + i)
                    bonusCards[index].multipy = bonusCards[index].multipy + repeat;
                } else {
                    bonusCards.push({
                        card: numberCard + i,
                        multipy: 1 + repeat
                    })
                }
            }

        }

        sum += repeat;
    }

    return sum;
}


module.exports = { part1, part2 };
