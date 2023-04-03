




//[level 1] 핸드폰 번호 가리기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
return answer;
}