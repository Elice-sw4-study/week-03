//[level 0] 7의 개수 120912
//https://school.programmers.co.kr/learn/courses/30/lessons/120912

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array) {
    var chk = array.join('').split('').map(Number);
    var cnt = 0;
    
    for (let i of chk) {
        if (i === 7)
            cnt ++;
    }
    return cnt;
}