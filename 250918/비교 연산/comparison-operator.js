const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A >= B ? 1 : 0);  // A가 B보다 같거나 큰가?
console.log(A > B ? 1 : 0);   // A가 B보다 큰가?
console.log(B >= A ? 1 : 0);  // B가 A보다 같거나 큰가?
console.log(B > A ? 1 : 0);   // B가 A보다 큰가?
console.log(A === B ? 1 : 0); // A와 B가 같은가?
console.log(A !== B ? 1 : 0); // A와 B가 다른가?
