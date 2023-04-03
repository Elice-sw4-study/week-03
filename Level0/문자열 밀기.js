




//[level 0] 문자열 밀기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(A, B) {
    let arr = [...A]
    for(let i = 0; i< arr.length; i++){
        if(A === B)
            return i;
        else{
            arr.unshift(arr.pop())
            if(arr.join('') === B)
                return i+1;
        }
    }
    return -1;
}