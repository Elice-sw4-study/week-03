//[level 0] 직사각형 넓이 구하기 120860
//https://school.programmers.co.kr/learn/courses/30/lessons/120860

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(dots) {
    var x = 0; //가로
    var y = 0; //세로
    
    if (dots[0][0] === dots[1][0]) {
        x = Math.abs(dots[0][0] - dots[2][0]);
        y = Math.abs(dots[0][1] - dots[1][1]);
        
        return x * y;
    }
    else if (dots[0][0] === dots[2][0]) {
        x = Math.abs(dots[0][0] - dots[1][0]);
        y = Math.abs(dots[0][1] - dots[2][1]);
        
        return x * y;
    }
    else if (dots[0][0] === dots[3][0]) {
        x = Math.abs(dots[0][0] - dots[1][0]);
        y = Math.abs(dots[0][1] - dots[3][1]);
        
        return x * y;
    }    
}