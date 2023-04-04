//[level 0] 구슬을 나누는 경우의 수 120840
//https://school.programmers.co.kr/learn/courses/30/lessons/120840

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(balls, share) {
    var answer = factorial(balls) / (factorial(balls - share) * factorial(share));

    return Math.round(answer);
}

function factorial(n) {
    var result = 1;
    for (let i = n; i > 1; i--){
        result *= i;
    }
}