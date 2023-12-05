const fs = require('fs');
const { part1, part2 } = require("./index.js")

const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8').trim().split('\r\n');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').trim().split('\r\n');

test('Day 4 - Part 1', () => {
    expect(part1(example)).toBe(13);
    console.log(part1(input))
});


test('Day 4 - Part 2', () => {
    expect(part2(example)).toBe(30);
    console.log(part2(input))
});
