function calcDivisor(n) {
  let count = 0;
  let divisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
      divisor.push(i);
    }
  }
  console.log(`${n}의 약수 [${divisor}] 가 있습니다.`);
  return count;
}

console.log(calcDivisor(16));

// 약수 : 뭘로 나눴을때 나머지가 없는거
