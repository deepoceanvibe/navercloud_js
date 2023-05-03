console.log("hello" || "world"); // or -> 첫번째만 true여도 반환
console.log(0 || "안녕"); // 첫번째 false 라서 두번째꺼 반환

console.error("Hello" && "World"); // and -> 둘다 true인지 판단하고, 마지막꺼 반환
console.error(null && "메롱"); // 첫번째부터 false라서 첫번째꺼 반환
