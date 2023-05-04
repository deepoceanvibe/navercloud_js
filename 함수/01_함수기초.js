function makeFood(sause) {
  console.log(`면을 삶습니다.`);
  console.log(`${sause} 를 넣고 면수와 볶습니다.`);
  console.log(`${sause} 스파게티 완성!`);
}

makeFood(`토마토소스`);

console.log("---------------------------------");

function calcCircle(r) {
  return 3.14 * r ** 2;
}

console.log(`원의 넓이는 ${calcCircle(5)} 입니다.`);
