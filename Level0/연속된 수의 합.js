




//[level 0] 연속된 수의 합
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num, total) {
    var answer = [];
    let isEven, standard;
  
    if (num % 2 == 0) {
      isEven = true;
    } else {
      isEven = false;
    }
  
    if (isEven) {
      // total = standard * num + (num/2) 이므로
      standard = (total - num / 2) / num;
    } else {
      standard = total / num;
    }
  
    if (isEven) {
      for (let i = standard - num / 2 + 1; i <= standard + num / 2; i++) {
        answer.push(i);
      }
    } else {
      for (
        let i = standard - Math.floor(num / 2);
        i <= standard + Math.floor(num / 2);
        i++
      ) {
        answer.push(i);
      }
    }
    return answer;
  }