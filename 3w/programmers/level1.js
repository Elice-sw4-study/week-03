//콜라즈 추측
//1) 짝수와 홀수
function solution(num) {
    var answer = '';
    
    if(num%2==0){
        answer="Even";
    } else {
        answer="Odd";
    }
    
    return answer;
}

//2) 자릿수 더하기
function solution(n)
{
    var answer = 0;
    var num= n.toString();
    var len= num.length;
    
    for(var i=0; i<len; i++){
        answer+=Number(num[i]);
    }

    return answer;
}

//3) 평균 구하기
function solution(arr) {
    var answer = 0;
    
    for(var i=0; i<arr.length; i++){
        answer+=arr[i];
    }
    answer= answer/arr.length
    
    return answer;
}

//4) 약수의 합
function solution(n) {
    var answer = 0;
    
    for(var i=1; i<=n; i++){
        if(n%i==0){
            answer+=i;
        }
    }
    
    return answer;
}

//5) x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    
    for (var i=1; i<=n; i++){
        answer.push(x*i);
    }
    
    return answer;
}

//6) 나머지가 1이 되는 수 찾기
function solution(n) {
    var answer;
    var result=[];
    
    for(var i=1; i<n; i++){
        if(n%i==1){
            result.push(i);
        }
    }
    answer=result[0];
    
    return answer;
}

//7) 문자열 내 p와 y의 개수
function solution(s){
    var answer;
    
    var len= s.length;
    var p=0;
    var y=0;
    var a= s.toLowerCase()
    
    for(var i=0; i<len; i++){
        if(a[i]=="p"){
            p++;
        } else if (a[i]=="y"){
            y++;
        }
    } 
    
    answer=(p==y);

    return answer;
}

//8) 정수 제곱근 판별
function solution(n) {
    var answer;
    
    for(var x=0; x*x<=n; x++){
        if(x*x==n){
            answer=(x+1)*(x+1);
        } else {
            answer=-1;
        }
    }
    
    return answer;
}

//9) 자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    
    var num = n.toString();
    var len = num.length;
    
    for(var i=len-1; i>=0; i--){
        answer.push(Number(num[i]));
    }
    
    return answer;
}

//10) 정수 내림차순으로 배치하기
function solution(n) {
    
    var answer;
    var result=[];
    
    var num = n.toString();
    
    result.unshift(num[0]);
    
    for(var i=1; i<= num.length; i++){
        for(var j=0;j<i;j++){
            if (num[j]<=num[i]){
            result.push(num[j]);
        } else {
            result.unshift(num[j]);
        }
    }
    
    }
    answer = result.join('')-0;
    
    return answer;
}

//11) 문자열을 정수로 바꾸기
function solution(s) {
    var answer = 0;
    
    answer=s-0;
    
    return answer;
}

//12) 하사드 수
function solution(x) {
    var answer;
    var result=0;
    
    var a= x.toString();
    var num= a.split('');
    var len= a.length;
    
    for(var i=0; i<len; i++){
        result+=(num[i])-0
    }
    
    if(x%result==0){
        answer=true;
    } else { answer=false;}
    
    return answer;
}

//13) 두 정수의 합
function solution(a, b) {
    var answer = 0;
    
    if(a<b){
        for(var i=a;i<=b;i++){
            answer+=i;
        }
        } else if(a>b) {
        for(var i=b;i<=a;i++){
            answer+=i;
        }
    } else {
        answer+= a;
    }  
    return answer;
}

//14) 콜라즈 추측

//15) 서울에서 김서방 찾기
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

//16) 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let answer;
    let answer_1= [];
    
    let result = arr.filter(e => e%divisor === 0)
    answer = result.sort((a,b)=>a-b);
    if(result.length === 0){
        answer = [-1];
    }
    
    return answer;
}

//17) 핸드폰 번호 가리기
function solution(phone_number) {
    let len = phone_number.length;
    let num4 = phone_number.split('').slice(len-4).join('');
    return "*".repeat(len-4)+num4;
}

//18) 음양 더하기
function solution(absolutes, signs) {
    let answer = 0;
    const len = absolutes.length;
    
    for(let i=0; i<len; i++){
        if(signs[i]===true){
            answer += absolutes[i];
        } else{
            answer -= absolutes[i]
        }
    }
    return answer;
}

//19) 제일 작은 수 제거하기
function solution(arr) {
    let answer;
    let min = Math.min.apply(Math,arr);
    let min_idx = arr.indexOf(min);
    
    arr.splice(min_idx,1);
    if(arr.length===1){ answer = [-1];}
    
    
    if(arr.length === 0) {return [-1]}
    return arr;
}

//20) 없는 숫자 더하기
function solution(numbers) {
    const num = [0,1,2,3,4,5,6,7,8,9];
    let answer = num.filter(e=> !numbers.includes(e));
    
    
    return answer.reduce((a,b)=> a+b);
}