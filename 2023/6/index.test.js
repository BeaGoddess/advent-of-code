const fs = require('fs');
const { part1, part2 } = require("./index.js")

const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8').trim()
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').trim()

test('Day 6 - Part 1', () => {
    expect(part1(example)).toBe(288);
    console.log(part1(input))
});


test('Day 6 - Part 2', () => {
    expect(part2(example)).toBe(71503);
    console.log(part2(input))
});
