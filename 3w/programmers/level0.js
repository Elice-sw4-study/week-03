//1) 이진수 더하기
function solution(bin1, bin2) {
    let sum = parseInt(bin1,2) + parseInt(bin2,2)
    return (sum).toString(2);
}


//2) 7의 개수
function solution(array) {
    return array.join('').split(7).length-1;
}

//3) 컨트롤 제트 *틀림*
function solution(s) {
    let idx_key = [];
    let strs = s.split(' ');
    let idx = strs.indexOf('Z');
    let z_sum = 0;
    
    //z의 앞의 key값
    while(idx != -1){
        idx_key.push(idx-1);
        idx = strs.indexOf('Z', idx + 1 );
    }
    //z 앞 숫자들의 마이너스 합
    for(let key of idx_key){
        z_sum -= Number(strs[key]);
    }
    
    //숫자들을 더한 값 sum
    let sum = s.replace('Z','').split(' ').map(e => Number(e)).reduce((a,b)=>a+b);
    
    return sum + z_sum;
}

//4) 공던지기

//5) 영어가 싫어요
function solution(numbers) {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = '';
    let result = [];
    
    for(let i=0; i<numbers.length; i++){
        answer+=numbers[i] //문자열로 앞에서부터 한글자씩 추가
        
        for(let e of eng){ //eng 배열을 돌면서
            if(answer===e){ //하나씩 추가돼 만들어진 문자열 = e와 같으면
                result.push(eng.indexOf(e)); //문자를 숫자로 바꾸어 배열에 넣음
                answer =''; //문자열 초기화
            }
        }
    }

    return Number(result.join(''));
}

//6) 잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    let str = '';
    
    for(let i=0; i<my_str.length; i++){
        str+=my_str[i]
        if(str.length===n){
            answer.push(str);
            str='';
        }
    }
    if(str.length !==0){ //남은 str 처리
        answer.push(str);
    }
    
    return answer;
}

//7) 문자열 계산하기
function solution(my_string) {
    const strs = my_string.split(" ");
    
    let ans = Number(strs[0]);
    
    strs.forEach((e, index) => {
        if(e === "+"){
            ans += Number(strs[index + 1]);
        }
        
        if(e === "-"){
            ans -= Number(strs[index + 1]);
        }
    })

    
//8) 구슬을 나누는 경우의 수

//9) 외계어 사전

//10) 삼각형의 완성조건

