//[level 0] 컨트롤 제트 120853
//https://school.programmers.co.kr/learn/courses/30/lessons/120853

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s) {
    var arr = s.split(' ');
    var answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z'){
            answer -= parseInt(arr[i - 1]);
        }
        else {
            answer += parseInt(arr[i]);
        }
    }
    return answer;
}53