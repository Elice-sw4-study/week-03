




//[level 0] 옹알이 (1)
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(babbling) {
    var answer = 0;
    let can = ["aya", "ye", "woo", "ma"];
  
    for (let i in babbling) {
      let init = babbling[i];
  
      for (let j in can) {
        if (babbling[i].includes(can[j])) {
          init = init.replace(can[j], "X");
        }
      }
  
      init = init.replace(/X/gi, "");  // X를 모두 공백으로 치환하고 나서
      if (init.length === 0) {  // 공백이 되면 answer에 추가
        answer += 1;
      }
    }
    return answer;
  }