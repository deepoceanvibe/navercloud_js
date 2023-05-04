function add(n1, n2) {
  return n1 + n2;

  console(`실행안되니까 막적어야지 메롱`);
}

var r1 = add(5, 7);

console.log(r1);
console.log(add(r1, add(3, 5)));

console.log("----------------------------");

function showMulti(n1, n2) {
  console.log(`${n1} * ${n2} = ${n1 * n2}`);
}
var result = showMulti(3, 5);
console.log(result);

console.log("----------------------------");

function question(answer) {
  if (answer !== 5050) {
    console.log(`계산 똑바로 안합니까?`);
    return;
  }
  console.log("정답입니다!");
}

console.log(`1부터 100까지 더한 값은?`);
question(5050);
question(5049);
