const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = parseInt(input); // 문자열을 정수로 변환
console.log(a + 2);
