//[level 0] 문자열 계산하기 120902
//https://school.programmers.co.kr/learn/courses/30/lessons/120902

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var arr = my_string.split(' ');
    var answer = parseInt(arr[0]);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            answer += parseInt(arr[i + 1]);
        }
        else if (arr[i] === '-') {
            answer -= parseInt(arr[i + 1]);
        }
    }
    return answer;
}