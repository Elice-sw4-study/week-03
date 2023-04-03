




//[level 0] 외계어 사전
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(spell, dic) {
    const isThere = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if(word.includes(item)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            isThere.push(word);
        }
    })
    
    return isThere.length === 0 ? 2 : 1;
}