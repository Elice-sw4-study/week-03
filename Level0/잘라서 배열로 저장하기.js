//[level 0] 잘라서 배열로 저장하기 120913
//https://school.programmers.co.kr/learn/courses/30/lessons/120913
//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_str, n) {
    var answer = [];
    var str = "";
    
    for (let i = 0; i < my_str.length;) {
        str = "";
        for (let j = 0; j < n; j++){
            if (my_str[i]) {
                str += my_str[i];
                i++;
            }
            else
                break;
        }
        answer.push(str);
    }
    return answer;
}