var pets = ["멍멍이", "야옹이", "룰루"];
console.log(`pets : ${pets}`);

// 맨 마지막에 배열 요소 추가하기
pets.push("어완자");
pets.push("땡칠이");
console.log(`pets : ${pets}`);

// 맨 마지막에 배열 요소 추가하고, 길이 조회하기
var newLength = pets.push("콩콩이", "징징이");
console.log(`pets : ${pets}, 2개 넣으면? : ${newLength}`);

// 맨 마지막 요소 삭제하기
var deletedData = pets.pop();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`);

// shift로 첫 번째 요소 삭제하기
var deletedData = pets.shift();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`);

// unshift로 첫 번째 요소 추가하기
newLength = pets.unshift("으라잉", "쀼쀼");
console.log(`pets : ${pets}, 추가 후 길이 : ${newLength}`);
