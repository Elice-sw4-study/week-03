




//[level 0] 유한소수 판별하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(a, b) {
    // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}