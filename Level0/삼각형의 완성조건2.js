//[level 0] 삼각형의 완성조건 (2) 120868
//https://school.programmers.co.kr/learn/courses/30/lessons/120868

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(sides) {
    var answer = [];
    
    sides.sort(function(a, b) { //오름차순으로 정렬
        return a - b;
    })
    
    for (let i = 1; i <= sides[1]; i++) { //가장 긴 변이 주어진 경우 - 가장 작은 변 , 중간 크기의 변 구해야 됨
        if (i + sides[0] > sides[1]){
            answer.push(i);
        }
    }
    
    for (let i = sides[1]; i <= 10000; i++){ //가장 긴 변을 찾는 경우 - 크기 1000제한은 sides만 있어서 테스트케이스7 오류 났었음
        if (i < sides[0] + sides[1]){
            answer.push(i);
        }
    }
    
    //answer 중복 제거
    var set = new Set(answer);
    var arr = [...set];
    
    return arr.length;
}