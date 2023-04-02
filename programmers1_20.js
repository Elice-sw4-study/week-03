//1. 짝수와 홀수
function solution(num) {
    var answer = '';
    if(num%2 == 0) {
        answer = 'Even';
    } else {
        answer = 'Odd'
    }
    return answer;
}

//2. 자릿수 더하기
function solution(n) {
    var answer = 0;
    let str = String(n);
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for (let i = 0; i < str.length; i++) {
        answer = answer + parseInt(str.charAt(i));
    }
    return answer;
}

//3. 평균 구하기
function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//4. x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(x * (i + 1));
    }
    return answer;
}

//5. 약수의 합
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i
        }
    }
    return answer;
}

//6. 나머지가 1이 되는 수 찾기
function solution(n) {
    for(let i =2; i<n; i++) {
        if(n % i ===1){
            return i
        }
    }
}

//7. 문자열 내 p와 y의 개수
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

//8.정수 제곱근 판별
function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
        answer = -1;
    } else {
        answer = Math.pow(sqrt+1,2); // 제곱근일 경우
    }
    return answer
}

//9. 자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = n.toString().split('').reverse().map((data) => Number(data));
    return answer;
}

//10.정수 내림차순으로 배치하기
function solution(n) {
    var answer = Number(n.toString().split('').sort((a,b)=> b-a).join(''));
    return answer;
}

//11. 문자열을 정수로 바꾸기
function solution(s) {
    var answer = Number(s);
    return answer;
}

//12. 하샤드 수
function solution(x) {
    let str = x.toString()
    let num = 0
    for (let i = 0; i < str.length; i++) {     
        num += parseInt(str[i])                
    }
    return x % num === 0 ? true : false 
}

//13. 두 정수 사이의 합
function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for(var i=min; i <= max; i++){
        answer+=i;
    }
    return answer;
}

//14.콜라츠 추측
function solution(num) {
    var answer = 0;
    for (let i = 0; i < 500; i++) {
        if (num !== 1) {
            num = num % 2 == 0 ? num / 2 : num * 3 + 1;
        } else {
            return answer = i;
        }
    }
    return answer = -1;
}

//15. 서울에서 김서방 찾기
function solution(seoul) {
    var answer = seoul.indexOf('Kim');
    return "김서방은 " + answer + "에 있다";
}

//16. 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}

//17. 핸드폰 번호 가리기
function solution(phone_number) {
    const len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.slice(-4);
}

//18. 음양 더하기
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}

//19. 제일 작은 수 제거하기
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    arr.length <= 1 ? answer = [-1] : answer = arr
    return answer
}

//20. 없는 숫자 더하기
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) 
            answer += i;
        }
    return answer;
}