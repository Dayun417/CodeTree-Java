const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(input);

if (input < 0) {
    console.log("minus");
}