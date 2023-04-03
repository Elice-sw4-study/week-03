//[level 0] 소인수분해 120852
//https://school.programmers.co.kr/learn/courses/30/lessons/120852

//결과
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var arr = [];
    
    while (true) {
        if (n === 1) 
            break;        
        for(let i = 2; i <= n; i++){
            if (n % i == 0) {
                arr.push(i);
                n /= i;
                break;
            }
        }     
    }
    var set = new Set(arr);
    var answer = [...set];
    
    return answer;
}