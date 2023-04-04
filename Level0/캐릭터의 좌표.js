//[level 0] 캐릭터의 좌표 120861
//https://school.programmers.co.kr/learn/courses/30/lessons/120861

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(keyinput, board) {
    var answer = [0, 0];
    var xsize = parseInt(board[0] / 2);
    var ysize = parseInt(board[1] / 2);
    
    for (let i of keyinput) {
        if (i === 'up') {
            answer[1] ++;
            
            if (answer[1] > ysize)
                answer[1] = ysize;
        }
        else if (i === 'down') {
            answer[1]-- ;
            
            if (answer[1] < -ysize)
                answer[1] = -ysize;
        }
        else if (i === 'left') {
            answer[0] --;
            
            if (answer[0] < -xsize)
                answer[0] = -xsize;
        }
        else if (i === 'right') {
            answer[0] ++;
            
            if (answer[0] > xsize)
                answer[0] = xsize;
        }
    }
    return answer;
}