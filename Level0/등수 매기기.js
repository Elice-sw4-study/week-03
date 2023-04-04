




//[level 0] 등수 매기기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(score) {
    //score의 평균 점수
  	let avg = score.map(v=>(v[0]+v[1])/2);
  	
  	//avg를 내림차순으로 정렬한 배열 sort를 선언한다.
    let sorted = avg.slice().sort((a,b)=>b-a);
  	
  	//avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    return avg.map(v => sorted.indexOf(v) + 1);
}