var total = 0;
for (var i = 1; i < 101; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  total += i;
}
console.log(`1~100까지 범위의 3의 배수만 더한 총합 : ${total}`);
