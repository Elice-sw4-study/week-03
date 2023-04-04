//[level 0] 안전지대
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(board) {
    var answer = 0;
    var map = board.slice();
    var len = board.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] === 1) {
                if (i !== 0 && i !== len - 1) {
                    for (let k = 0; k < 3; k++) {
                        map[i - 1][j - 1 + k] == 1;
                        map[i][j - 1 + k] == 1;
                        map[i + 1][j - 1 + k] == 1;
                    }
                } 
                else {
                    if (i ===0) {
                        for (let k = 0; k < 3; k++) {
                            map[i][j - 1 + k] == 1;
                            map[i + 1][j - 1 + k] == 1;
                        }
                    }
                    else {
                        for (let k = 0; k < 3; k++) {
                            map[i - 1][j - 1 + k] == 1;
                            map[i][j - 1 + k] == 1;
                        }
                    }
                }
            }
        }
    }
    return map;
    
    let cnt = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (map[i][j] === 0) cnt ++;
    }
    }
    return cnt;
}