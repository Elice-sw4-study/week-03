//[level 0] 다항식 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(polynomial) {
    var answer = '';
    var x = 0;
    var x0 = 0;
    
    var arr = polynomial.split(' + ');
    
    for (let i of arr) {
        if (i.includes('x')) {
            if (i === 'x') x += 1;
            else x += Number(i.replace('x', ''));
        }
        else x0 += Number(i);
    }
    
    if (x0 === 0) return `${x}x`;
    else return `${x}x + ${x0}`;
}