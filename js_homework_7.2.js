"use strict"

const text = "Wonderful, Joyful; Happiness, Time, Task, Apple";
const re = /\b(?![A-Za-z]*[aA][A-Za-z]*\b)[A-Za-z]{6,}\b/g;

console.log(text.match(re));
