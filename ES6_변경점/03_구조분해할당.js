// 구조 분해 할당 : 객체나 배열을 다시 기본 데이터로 해체하는 것 -> 배열 꾸러미를 풀었다
const userNames = ["김철수", "강감찬", "박영희"];
const [kim, kang, park] = userNames;

console.log(`kim : ${kim}, kang : ${kang}, park : ${park}`);

// 변수 값 교환
let first = 10;
let second = 20;

console.log(`교환전 : first: ${first}, second: ${second}`);
[first, second] = [second, first];
console.log(`교환후 : first: ${first}, second: ${second}`);

const numbers = [1, 3, 5, 7, 9, 11];
const [one, three, ...ohters] = numbers;
console.log(`one : ${one}, three : ${three}, 나머지 : ${ohters}`);

console.log("-----------------------------------");

// 스프레드를 이용한 배열 확장
const foods = ["돈까스", "감자탕", "내장탕", "보쌈"];
const newFoods = [foods, "초밥", "햄버거"];
console.log(`추가 확인: ${newFoods}`);

// 일반적으로 확장을 할 떄, 이중배열 처리가 되고 얕은 복사가 일어난다. -> [['돈까스', '감자탕', '내장탕', '보쌈'], '초밥', '햄버거']
foods[0] = "크로켓";
console.log(`foods : ${foods}, newFoods : ${newFoods}`);

// 앞에 '...'을 붙여 깊은 복사를 이용하자. -> ['돈까스', '감자탕', '내장탕', '보쌈', '초밥', '햄버거']
const advFoods = [...foods, "초밥", "햄버거"];
console.log(`advFoods 의 이중배열 여부 : ${advFoods[0]}`);

foods[1] = "치킨마요덮밥";
console.log(`foods : ${foods}, advFoods : ${advFoods}`);

console.log("-----------------------------------");

// 객체 구조 할당
const emp = {
  empName: "유정원",
  age: 25,
  hireDate: "2023-10-12",
  birthDay: "1999-02-11",
};

/* 기존 문법
const empName = emp.empName;
const age = emp.age;
console.log(`사원명 : ${empName}, 나이 : ${age}`);
*/

/* NEW 문법 1
const { age, birthDay, empName } = emp;
console.log(`사원명 : ${empName}, 나이 : ${age}, 생일 : ${birthDay}`);
*/

// NEW 문법 2
const { age: a, birthDay: b, empName: n } = emp;
console.log(`사원명 : ${n}, 나이 : ${a}, 생일 : ${b}`);
