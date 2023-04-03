//[level 0] 공 던지기 120843
//https://school.programmers.co.kr/learn/courses/30/lessons/120843

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers, k) {
    var arr = numbers;
    if (k * 2 > numbers.length) { //배열 연장하기
        for(let i = 1; i < 1 + parseInt(2 * k / numbers.length); i++) {
            arr = arr.concat(numbers);
        }
    }
    var cnt = 0;
    
    for (let i = 0; i < arr.length; i+=2) {
        cnt ++;
        if (cnt === k)
            return arr[i];
    }
}