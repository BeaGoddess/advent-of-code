const fs = require('fs');
const { part1 } = require("./index.js")

const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8').trim()
const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').trim()

test('Day 5 - Part 1', () => {
    expect(part1(example)).toBe(35);
    console.log(part1(input))
});

