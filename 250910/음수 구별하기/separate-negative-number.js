// 입력값 받기
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const num = Number(input);

// 그대로 출력
console.log(num);

// 음수면 "minus" 출력
if (num < 0) {
    console.log("minus");
}
