




//[level 0] 특이한 정렬
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b-a
        // 다르다면 거리별 오름차순 정렬
        return aGab-bGab
    })
}