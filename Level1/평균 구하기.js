




//[level 1] 평균 구하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
     sum += arr[i];
    }
    return answer = sum / arr.length;
}

function solution(arr) {
  return arr.reduce((sum, current) => sum + current) / arr.length;
}