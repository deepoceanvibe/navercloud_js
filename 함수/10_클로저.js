function calculator(n1, n2) {
  function add() {
    return n1 + n2;
  }
  return add;
}

const closure = calculator(5, 6);
console.log(closure);

const n = closure();
console.log(`closure()의 결과 : ${n}`);

// 즉시 실행 함수 : 함수를 선언하고, 선언부 뒤에 ();를 추가로 붙이면 선언과 동시에 실행까지 됨.
(() => {
  console.log("즉시 실행 구문이 붙었군요!");
})();
