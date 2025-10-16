// 입력받기
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

// 조건문 처리
if (a > b) {
    console.log(a * b);
} else {
    console.log(Math.floor(b / a)); // 정수 몫
}
