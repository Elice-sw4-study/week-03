




//[level 1] 정수 내림차순으로 배치하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

const solution = (n) =>
	Number(n.toString().split("").sort().reverse().join(""));
