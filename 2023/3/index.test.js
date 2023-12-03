const fs = require('fs');
const { part1, part2 } = require("./index.js")

const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8').trim().split('\r\n');
const example2 = fs.readFileSync(__dirname + '/example-2.txt', 'utf-8').trim().split('\r\n');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').trim().split('\r\n');

test('Day 3 - Part 1', () => {
    expect(part1(example)).toBe(4361);
    console.log(part1(input))
});

test('Day 3 - Part 2', () => {
    expect(part2(example2)).toBe(467835);
    console.log(part2(input))
});