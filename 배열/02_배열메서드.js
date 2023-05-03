var foodList = ["라멘", "해장국", "돈카츠", "보쌈정식"];
var count = 0;
var target = "짜장면";
var index = foodList.indexOf(target);
console.log(`찾은 인덱스 : ${index}`);

// 요소 추가
foodList.push("순대국밥", "우육면");
console.log(foodList);

// 요소 자르기
var slicedFoods = foodList.slice(1, 4);
console.log(`잘린 음식 : ${slicedFoods}, 원본 음식 : ${foodList}`);

// 깊은 복사
slicedFoods = foodList.slice();
slicedFoods[0] = "라멘2";
console.log(`복사본 : ${slicedFoods}, 원본음식 : ${foodList}`);

// reverse 는 인덱스번호 기준으로 역순 나열
var nums = [10, 20, 30, 40, 50];
var copyNums = nums.slice();
copyNums.reverse();
console.log(`원본 : ${nums}, 복사본 : ${copyNums}`);

// concat() 는 배열 2개를 연결
var arr1 = [10, 20, 30];
var arr2 = [10, 900, 700, 1000];
var concatedArr = arr1.concat(arr2);
console.log(`합쳐진 배열: ${concatedArr}`);

// includes() 는 특정 요소가 존재하는지 확인
var resultFlag = foodList.includes("피자");
console.log(`피자가 포함되어 있나? : ${resultFlag}`);

// splice() 는 배열의 특정 요소를 제거, 삽입
console.log(foodList);
foodList.splice(1, 2);
console.log(foodList);

// 0번부터 1개만 보쌈으로 바꿔라.
foodList.splice(0, 1, "보쌈");
console.log(foodList);

// 삭제 안하고 그 자리에 밀어넣고 싶은 경우
foodList.splice(1, 0, "스파게티");
console.log(foodList);
foodList.splice(2, 0, "삼겹살", "어묵김밥");
console.log(foodList);

// 특정 번호부터 다 지우기
foodList.splice(2);
console.log(foodList);

// join() 은 요소 사이에 따따따 낑겨 넣고 싶을 때
foodList = ["피자", "치킨", "탕수육", "초밥"];
console.log(foodList.join("///"));
