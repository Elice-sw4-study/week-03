




//[level 1] 콜라츠 추측
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num) {
    let answer = 0;
    
    while (num != 1) {
        if (num % 2 == 0){
            num /= 2;
        } else {
            num = (num * 3) + 1;
        }
        answer += 1;
    }
    if (answer >= 500) {
        return -1;
    } else {
        return answer;
    }
}