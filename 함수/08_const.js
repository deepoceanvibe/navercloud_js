// 값 변경 불가

const TODAY_SALE_RATE = 0.2;
const PI = 3.14159265;

const kim = {
  name: "김철수",
  age: 25,
};

// !! 주소값(객체 자체)이 바뀐게 아니라, 그 안의 내용물은 바꿀 수 있음 !!
kim.name = "김몽수";
console.log(kim);
