//문제36 : 구구단 출력하기
function gugudan(num) {
    let result = '';
    for(let i=1; i<=9; i++) {
        result += num*i+' ';
    }
    return result;
}
console.log(gugudan(2));

//문제37 : 반장 선거 


//문제38 : 호준이의 아르바이트
function scores() {
    const score = '97 86 75 66 55 97 85 97 97 95'; //점수입력
    const scoreList = score.split(' ').sort((a, b) => b - a); //점수를 내림차순으로 정렬
    const sortedArr = [...new Set(scoreList)]; //정렬된 점수에서 중복제거
    const thirdLargest = sortedArr[2];//3위 점수 찾기
    let answer = 0; //사탕 받을 학생 수
    for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i] >= thirdLargest) {
            answer = answer + 1; //3위보다 높으면 +1
        } else if (scoreList[i] < thirdLargest) {
            answer = answer + 0; //3위보다 낮으면 0
        }
    }
    return answer;
}
console.log(`사탕 받을 학생 수 : ${scores()}`);

//문제39 : 오타 수정하기
function typo() {
    const typo1 = 'hqllo my namq is hyqwon';
    const edit = typo1.split("").map((a) => (a === "q" ? "e" : a)).join("");
    return edit;
}
console.log(typo());

//문제40 : 놀이동산에 가자
function park() {
    let total = 0;
    let count = 0;
    const limit = 50; //제한무게
    const weight = 20; //몸무게
    const n = 5; //탈수있는 인원수

    for (let i = 1; i <= n; i++) {
        total += weight;
        if (total <= limit) {
            count = i;
        }
    }
    return count;
} 
console.log(park());

//문제41 : 소수판별
function primeNumber(num) {
    if (num < 2) {
        return 'NO'; // 1보다 작은 수는 소수가 아님
    }
    //2부터 해당 수의 제곱근까지 나누기
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'NO'; // 나누어 떨어지면 소수가 아님
        }
    }
    return "YES"; // 나누어 떨어지지 않으면 소수임
}
console.log(primeNumber(11));

//문제42 : 2020년
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = new Date(`2020-${a}-${b}`);
    const dayOfWeek = date.getDay();
    return days[dayOfWeek];
}
console.log(solution(5,24));

//문제43 : 10진수를 2진수로
function convertToBinary(input) {
    let two = Number(input.toString(2));
    //toString() : 숫자를 문자열로 변환하는 메서드. 인수로 넘겨주는 값에 따라 해당 값의 진법으로 변환.
    return two;
}
console.log(convertToBinary(10)); // 1010

//문제44 : 각 자리수의 합
function addAll(input) {
    let str = String(input);
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        answer = answer + parseInt(str.charAt(i));
    }
    return answer;
}
console.log(addAll(18234));

//문제45 : getTime()함수 사용하기
const toDay = new Date(); //오늘 날짜
let thisYear = toDay.getTime(); 
thisYear = Math.floor(thisYear/(3600*24*365*1000))+1970//365일*24시간*60분*60초
console.log(thisYear);

//문제46 : 각 자리수의 합 2
let arr = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
}
for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    while (n !== 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
}
console.log(`각 자리수의 합2 : ${sum}`);

//문제47 : set 자료형의 응용
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};

const uniquePeople = {};
for (let name in people) {
    uniquePeople[people[name]] = name;
}
console.log(Object.keys(uniquePeople).length);

//문제48 : 대소문자 바꿔서 출력하기
function solution() {
    const my_string = 'AAABBBcccddd';
    var answer = [];
    let arr = my_string.split('');
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i].toUpperCase()) { 
            answer.push(arr[i].toLowerCase())
        } else {
            answer.push(arr[i].toUpperCase())
        }
        
    }
    return answer.join('');
}
console.log(solution());

//문제49 : 최댓값 구하기
function maxNum() {
    const numList = '10 9 8 7 6 5 4 3 2 1';
    const numArray = numList.split(' ').map(Number);
    const maxNum = Math.max(...numArray);
    return maxNum;
}
console.log(maxNum()); // 10

//문제50 : 버블정렬 구현하기
/*
function bubble(arr) {
    let result = arr.slice();
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) { 
            // 빈칸을 채워주세요.
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}
const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
});
console.log(bubble(items));
*/
//문제51 : merge sort를 만들어보자 -> 아직 이해 못함

//문제52 : quick sort -> 아직 이해 못함
/*
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(quickSort(array));
*/

//문제53 : 괄호 문자열
function checkBracket(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                return 'NO';
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length !== 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}
const str = '()()';
console.log(checkBracket(str));

//문제54 : 연속되는 수
function checkContinuity(str) {
    const input = ('1 4 2 6 3');
    const arr = input.split(' ').map(num => parseInt(num));
    arr.sort((a, b) => a - b); // 배열을 오름차순으로 정렬
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return 'NO';
        }
    }
    return 'YES';
}
console.log(`문제 54 : ${checkContinuity()}`);

//문제55 : 하노이의 탑
const route = [];
function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return;
    }
    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
}
hanoi(3, 'A', 'B', 'C');
console.log(`문제 55 : ${route.length}`);

//문제56 : 객체의 함수 응용
const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea'];
delete nationWidth['korea'];
const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);
let gap = Math.max.apply(null, values);//gap에 최댓값 저장
let item = [];
for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
console.log(item[0], item[1] - w);

//문제57 : 1의 개수
let count = 0;
for (let i = 0; i <= 1000; i++) {
  const digits = i.toString().split('');
  digits.forEach((digit) => {
    if (digit === '1') {
      count++;
    }
  });
}
console.log(count);

//문제58 : 콤마 찍기
function addCommas(num) {
    const strNum = num.toString();// 숫자를 문자열로 변환
    return strNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');// 천 단위로 콤마로 구분
}
console.log(addCommas(123456789)); // 123,456,789


//문제59 : 빈칸채우기
function munje59() {
    const str = 'hi';
    const n = 25 + parseInt((str.length/2), 10);
    const a = str.padStart(n, '='); 
    return (a.padEnd(50, '='));
}
console.log(munje59());

//문제60 : 번호 매기기
const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];
students.sort();
for (let i = 0; i < students.length; i++) {
    console.log(`번호: ${i + 1}, 이름: ${students[i]}`);
}

//문제61 : 문자열 압축하기
function munje61() {
    const str = 'aaabbbbcdddd';
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += `${str[i]}${count}`;
            count = 1;
        }
    }
    return result;
}
console.log(munje61()); // a3b4c1d4

//문제62 : 20190923출력하기


//문제63 : 친해지고 싶어
function munje63() {
    const str = '복잡한 세상 편하게 살자';
    let arr = str.split(' ');
    let result = '';
    for(let i=0; i<arr.length; i++ ) {
        result += arr[i][0];
    }
    return result;
}
console.log(munje63());

//문제64 : 이상한 엘레베이터
function munje64() {
    let N = parseInt(24, 10);
    let result = 0;
    while (true) {
        if (N % 7 === 0) {
            result += parseInt(N / 7, 10);
            return result
            break;
        }
        N -= 3;
        result += 1;
        if (N < 0) {
            return -1;
            break;
        }
    }
}
console.log(munje64());

//문제65 : 변형된 리스트
function munje64() {
    const a = [1, 2, 3, 4];
    const b = ['a', 'b', 'c', 'd'];
    let c = [];

    a.forEach(function (e, i) {
        if (i % 2 === 0) {
            c.push([
                e, b[i]
            ]);
        } else {
            c.push([b[i], e]);
        }
    });
    return c;
}
console.log(munje64());

//문제66 : 블럭탑쌓기

//문제68 : 버스 시간표
function busSchedule(busTimes, currentTime) {
    const currentHour = Number(currentTime.split(':')[0]);
    const currentMinute = Number(currentTime.split(':')[1]);

    const results = busTimes.map(busTime => {
        const busHour = Number(busTime.split(':')[0]);
        const busMinute = Number(busTime.split(':')[1]);

        if (currentHour > busHour || (currentHour === busHour && currentMinute > busMinute)) {
            return '지나갔습니다.';
        } else {
            const hourDiff = busHour - currentHour;
            const minuteDiff = busMinute - currentMinute;
            const diffInMinutes = hourDiff * 60 + minuteDiff;

            const hours = Math.floor(diffInMinutes / 60);
            const minutes = diffInMinutes % 60;

            return `${hours
                .toString()
                .padStart(2, '0')}시간 ${minutes
                .toString()
                .padStart(2, '0')}분`;
        }
    });
    return results;
}
console.log(busSchedule(["12:30", "13:20", "14:13"], "12:40")); 
// ['지나갔습니다.', '00시간 40분', '01시간 33분']

//문제69 : 골드바흐의 추측

//문제70 : 행렬 곱하기