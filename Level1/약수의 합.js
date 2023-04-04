




//[level 1] 약수의 합
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = [];
    for(let i = 0; i <=n ; i++){
        if(n%i ===0){
           answer.push(i);
        }
    }
    var sum = answer.reduce((a,b)=> a + b,0);
    return sum;
}