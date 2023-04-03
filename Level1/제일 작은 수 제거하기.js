




//[level 1] 제일 작은 수 제거하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr) {
    
    var answer = [];
    
    if (arr.length<=1){
        return [-1];

    }else{    
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer =  arr;
    }   
    
    return answer
}