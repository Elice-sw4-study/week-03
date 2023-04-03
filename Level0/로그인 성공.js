




//[level 0] 로그인 성공?
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(id_pw, db) {
    let result = '';
    
    db.map((item, i) => {if(id_pw[0] === item[0] && id_pw[1] === item[1]) result = "login"
      else if(id_pw[0] === item[0] && id_pw[1] !== item[1]) result =  "wrong pw"
      else if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = "fail"})
      
    return result
  }