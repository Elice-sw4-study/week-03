//[level 0] 최빈값 구하기 120812
//https://school.programmers.co.kr/learn/courses/30/lessons/120812

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array) {
    let map = {};
    
    for (i of array) {
        if (map[i]) //map에 i가 있으면
            map[i] += 1;
        else
            map[i] = 1;
    }
    
    //값과 개수를 한번에 넣은 배열 생성
    let answer = [];
    for (let key in map) {
        answer.push([key, map[key]]);
    }
    
    //개수 기준으로 내림차순 정렬
    answer.sort((a, b) => b[1] - a[1]);
    
    if (answer.length < 2)
        return Number(answer[0][0]);
    else {
        if (answer[0][1] === answer[1][1]) return -1;
        else return Number(answer[0][0]);
    }
}