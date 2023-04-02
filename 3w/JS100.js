//36) 구구단 출력하기
let num = 3;
answer = [];

for (let i=1; i<=9; i++){
  answer.push(num*i);
}

console.log(answer.join(' '));

//37) 반장 선거
let inPut = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let person = input.split(' ');

//38) 호준이의 아르바이트
let input = "97 86 75 66 55 97 85 97 97 95";
let nums = input.split(' ');

let win = nums.sort((a,b)=>a-b);
let max_3 = [...new Set(win)]

console.log(win);
console.log(max_3);

let answer = nums.filter(e => e >= win[max_3.length-2]).length;

console.log(answer);

//39) 오타 수정하기
let input = "hqllo my namq is hyqwon";
let answer = input.replaceAll("q","e");

console.log(answer);

//40) 놀이동산에 가자
let input = "50 5 20 20 20 20 20";

let kg = input.split(' ').slice(2);
let answer = kg.filter(e=> input[0] >= e).length;

console.log(answer)

//41) 소수 판별
let input = 20;
let answer = [];

for(let i=1; i<=input; i++){
  if(input%i===0){
    answer.push(i);
  }
}

console.log(answer.length===2);

//42) 2020년


//43) 10진수를 2진수로
let input = 2;

console.log(input.toString(2));

//44) 각 자리 숫자의 합
let input = 18234;
let answer = 0;
let nums = input.toString().split('')
for(let e of nums){
  answer+= Number(e)
}

console.log(answer);

//45) getTime()함수 사용하기 ..인데getTime은 안썼ㅜ
const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);

//46) 각 자리 숫자의 합2
let input = "1234567891011121314151617181920";
let nums = input.slice('');
let answer = nums.reduce((a,b) => Number(a) + Number(b));

console.log(answer);

//47) set 자료형의 응용


//48) 대소문자 바꿔서 출력하기
