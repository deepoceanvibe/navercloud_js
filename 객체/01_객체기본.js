var cat = {
  name: "룰루",
  age: 3,
  hobbies: ["낚시", "간식먹기", "낮잠자기"],
  kind: "스코티시폴드",
};

var watermonitor = {
  name: "뚜뚜",
  age: 5,
  hobbies: ["산책", "수영"],
  kind: "물왕도마뱀",
};

console.log(cat.hobbies.push("꾹꾹이 하기"));
console.log(cat.hobbies);

cat.age = 1;
console.log(cat["age"]);

cat.owner = "채종훈";
watermonitor.owner = "박재원";
console.log(cat);
console.log(watermonitor);

delete cat.owner;
console.log(cat);

// cat 안에 age 키값 존재하는가?
var ageFlag = "age" in cat;
console.log(ageFlag);

// 프로퍼티에 없을시, 추가하기
if (!("master" in cat)) {
  cat["master"] = "룰루주인";
}
console.log(cat);

// 객체를 순회하는 반복문
for (var k in watermonitor) {
  console.log(`watermonitor 키 값 : ${k} / 매칭 밸류 값 : ${watermonitor[k]}`);
}

// 객체의 중첩
var items = {
  store: "간식상점",
  productList: [
    {
      name: "초코과자",
      price: 3000,
      count: 12,
    },
    {
      name: "딸기잼쿠키",
      price: 1500,
      count: 20,
    },
    {
      name: "감자칩",
      price: 2500,
      count: 5,
    },
  ],
};
console.log(items);
console.log(items.productList);
console.log(items.productList[0]);
