const fs = require('fs');
const { part1, part2 } = require("./index.js")

const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8').trim().split('\r\n');
const example2 = fs.readFileSync(__dirname + '/example-2.txt', 'utf-8').trim().split('\r\n');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').trim().split('\r\n');
const input2 = fs.readFileSync(__dirname + '/input-2.txt', 'utf-8').trim().split('\r\n');

test('Day 1 - Part 1', () => {
    expect(part1(example)).toBe(142);
});

test('Day 1 - Part 2', () => {
    expect(part2(example2)).toBe(281);
    console.log(part2(input2))
});