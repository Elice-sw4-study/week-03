




//[level 1] 자릿수 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n)
{
    var answer = 0;
    var m = String(n);
    
    for ( let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
    }
    return answer;
}