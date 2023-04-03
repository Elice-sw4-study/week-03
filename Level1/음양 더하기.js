




//[level 1] 음양 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}
