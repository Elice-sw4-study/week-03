//[level 0] 분수의 덧셈 120808
//https://school.programmers.co.kr/learn/courses/30/lessons/120808

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numer1, denom1, numer2, denom2) {
    var denom = denom1 * denom2; //분모
    var numer = numer1 * denom2 + numer2 * denom1; //분자
    let max = 1;
    
    //최대공약수 구하기
    for (let i = 1; i <= numer; i++) {
        if (numer % i === 0 && denom % i === 0)
            max = i
    }
    
    var answer = [numer / max, denom / max];
    
    return answer;
}