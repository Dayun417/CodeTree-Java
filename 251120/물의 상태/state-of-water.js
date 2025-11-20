// 온도를 한 줄 입력으로 받는다.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = Number(input);
let result;

if (n < 0) {
  result = "ice";
} else if (n >= 100) {
  result = "vapor";
} else {
  result = "water";
}

console.log(result);
