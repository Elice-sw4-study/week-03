//[level 0] 저주의 숫자 3 120871
//https://school.programmers.co.kr/learn/courses/30/lessons/120871

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var x3 = 0
    
    for (let i = 1; i <= n; i++) {
        x3 ++;
        
        while (x3.toString().includes('3') || x3 % 3 === 0) x3 ++;
    }
    
    return x3;
}