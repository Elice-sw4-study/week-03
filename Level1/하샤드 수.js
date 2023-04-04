




//[level 1] 하샤드 수
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(x) { // x = 18
    var sum = 0;
    var arr = String(x).split(""); // [1,8]
    
    for(let i=0; i<arr.length; i++){
        sum += Number(arr[i]) // 1+8
    }
    return (x % sum == 0) ? true:false;
}