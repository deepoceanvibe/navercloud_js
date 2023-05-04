// 화살표 기준 왼쪽은 입력값(= 파라미터), 오른쪽은 실행구문(console.log~)

const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`multi 함수의 결과 : ${r1}`);

const sayHello = () => console.log("안녕하세요");
sayHello();

const kim = {
  name: "김자스",
  age: 25,
  greeting: sayHello,
  study: () => console.log("빡공갑니다."),
};
kim.study();

const pow = (int1) => int1 ** 2;
console.log(`결과 : ${pow(5)}`);
