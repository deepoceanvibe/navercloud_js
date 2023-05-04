function calcRangeTotal(begin, end) {
  var total = 0;
  for (var i = begin; i <= end; i++) {
    total += i;
  }
  return total;
}

console.log(`중첩 표현식 예시 : ${calcRangeTotal(1, calcRangeTotal(1, 10))}`);

console.log("-------------------------------");

function greet(name = "익명유저") {
  console.log(`안녕하세요 ${name}님 반갑습니다.`);
  console.log(`오늘 공부하실 범위는 JS 함수입니다.`);
}

greet("유정원");
