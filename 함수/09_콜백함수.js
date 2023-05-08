function showEventNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
function showOddNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) console.log(i);
  }
}
// 1차 개선 (짝수 홀수 여부까지 지정 가능)
function showOddorEvanNumber(n, delimeter) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === delimeter) console.log(i);
  }
}
showOddorEvanNumber(10, 1);
function showMultipleNumber(n, m) {
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) console.log(i);
  }
}
showMultipleNumber(20, 3);

console.log("----------------------------------------------------------");

// 2차 개선 : *** 콜백 함수 -> 함수 자체를 파라미터로 전달 ***
function showNumber(n, code) {
  for (let i = 1; i <= n; i++) {
    if (code(i)) {
      console.log(i);
    }
  }
}

const callback = (n) => n % 3 === 0;
showNumber(20, callback);
