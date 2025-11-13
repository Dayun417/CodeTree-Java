const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

let first = A < B ? 1 : 0;
let second = A === B ? 1 : 0;

console.log(first, second);
