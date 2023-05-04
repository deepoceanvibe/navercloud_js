/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.
    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. *** 변수나 자료구조(객체, 배열 등)에 저장할 수 있다. ***
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다. (자바에서는 안됨)
 */

function add(n1, n2) {
  return n1 + n2;
}

// add 호출 결과를 plus 변수에 저장
// const plus = add(5, 9);

// add 함수를 plus 변수에 저장
const plus = add;

console.log(`plus에 저장된 add 정보 : ${plus}, 그냥 add 정보 : ${add}`);

console.log("----------------------------");

const sub = function (n1, n2) {
  return n1 - n2;
};

console.log(`익명 함수를 sub에 담아 호출한 결과 : ${sub(20, 10)}`);

console.log("----------------------------");

const fArr = [
  10,
  "hello",
  true,
  {},
  [],
  add,
  function () {
    console.log("ㄱㄱ");
  },
];
fArr[6]();

console.log("----------------------------");

const dog = {
  name: "몽몽이",
  kind: "말티즈",

  // 객체 내부에 있는 함수 = 메서드
  bark: function () {
    console.log("왈왈!!");
  },
};
dog.bark();
