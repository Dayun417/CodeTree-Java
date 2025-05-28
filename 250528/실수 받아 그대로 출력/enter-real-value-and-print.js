const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = parseFloat(input); // 문자열을 실수로 변환
const rounded = num.toFixed(2); // 소수 둘째자리까지 반올림 (문자열로 반환됨)

console.log(rounded);
