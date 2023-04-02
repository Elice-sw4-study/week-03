//36 99단출력
function ninenine(input){
    answer = [];
        for(i=1; i <=9; i++){
            answer.push(input*i)
        }
        return answer.join(" ")
    }



console.log(ninenine(2))


//37 반장 선거 - 다시보기
let names = "원범 원범 혜원 혜원 혜원 혜원 유진 유진"
let arr = names.split(" ")
function election(array){
    let o = {}
    for(let key of array){
        o[key] ? o[key] +1 : 1;
        
    }
    for(let k of o){
        return `${k}(이)가 총 ${o[k]}로 반장이 되었습니다.`
    }
}

console.log(election(arr))


//38 호준이 아르바이트
function rank(){
    
}

//39 오타수정하기
function revise(x){
return x.replace(/q/g,"e")
}

//40 놀이동산에 가자 - 다시보기
function howMany(limit,num,...kg){
    let total = 0;
    let count = 0;
    for(i = 1; i <= num; i++){
        total += parseInt((...num),10)
        if(total <= limit){
            count = i
        } 
    }

}

//41 소수판별
function hoho(num){
    for(i = 2; i < num; i++){
        if(num % i === 0) return 'yes'
        
    }return 'no'

}

//42 2020 년
function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(5, 13));


//43 10진수를 2진수로 - 프로그래머스
function two(x){
    return parseInt(x,2)
}

//44 각 자리수의 합
function sum(str){
    let arr = str.split("").map(Number)
    answer = 0;
    for(i=0; i < arr.length; i++){
        answer += arr[i]

    }
    return answer;
}

sum("18234") //18


//45 getTime()함수 사용하기

//46 각 자리수의 합2
function sum(num){
    let arr = String(num).split("").map(Number)
    answer = 0;
    for(i=0; i < arr.length; i++){
        answer += arr[i]

    }
    return answer;
}

sum(101112131415) //21


//47 set 자료형 응용 *
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };

  let setdata = new Set()
  for(let key in people){
    setdata.add(people[key])
  }

  console.log(setdata.size); // 5

  //48 대소문자 바꿔서 출력하기 - 다시보기
   function change(str){
    let answer = [];
    let arr = str.split("")
    for(i=0; i< str.length; i++){
        if(answer[i] >= a && answer[i] <= z){answer.push(answer[i].toUpperCase())}
    }
    return answer

   }

   //49 최댓값 구하기
   function maxnum(str){
    let arr = str.split(" ").map(Number)
    arr.sort((a,b) => a - b)

    console.log(arr)
    return arr[arr.length-1]
    
   }

   입력 : 10 9 8 7 6 5 4 3 2 1 //10


   //50 버블정렬 구현하기 -?

   //51 merge sort를 만들어보자- 코드?
   left.length && right.length

   //52 quick sort

   //53 괄호 문자열
   function validParentheses(input){
    const stack = []
    for(const char of input){
        if(char === "{" || char === "(" || char === "["){
            stack.push(char)
            
        }else{
            const lastChar = stack.pop() //스택에 쌓여진 여는괄호들 중 마지막 배열에 있는 값을 pop으로 빼주어 lastChar로 넣어줌
            if(char === "}" && lastChar !== "{" ||
            char === "]"  && lastChar !== "[" ||
            char === ")"  && lastChar !== "(" ){
                return false;
            }
        }
    }
    return stack.length === 0;
}


//54 연속되는 수
function con (str){
    let arr = String(str).split(" ").map(Number).sort((a,b) => a-b)
    return arr.join(" ") === str ? "yes" : "no"

}

//55 하노이의 탑

//56 
nationWidth = {
         'korea': 220877,
         'Rusia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
    }

function compare(nationWidth){
let arr = [];
for(let key in nationWidth){
    arr.push(nationWidth[key] - nationWidth.korea)
}
arr.sort((a,b) => a - b)

for(let key in nationWidth){
    return nationWidth[key] === arr[1]+ nationWidth.korea? key : null;
}
}

//57 1이 몇번?
function onecount(input){
    let count = 0;
    let arr = input.split(", ").join("")

    for(i = 0; i < arr.length-1; i++){
        arr[i] == 1? count++: count;
    }
    return count
}

onecount("1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19")//12

//58 콤마찍기
function loca(input){
    const a = input;
    return a.toLocaleString() 
}
loca(123456789)//123,456,789

//59 빈칸채우기
반짜르기

//60 번호매기기
${i} ${name}

//61..?
{a:3}..
object

//62 20190923 출력하기- 먼말..?

//63 친해지고 싶어
function wantfriend(str){
    let emp = []
    let arr = str.split(" ")
    for(i=0; i<arr.length; i++){
    temp = arr[i].split("").shift()
    emp.push(temp)
}
return emp.join("")
}

console.log(wantfriend("복잡한 세상 편하게 살자"))//복세편살


//64 이상한 엘리베이터

//65 변형된 리스트
//66 블럭탑 쌓기
//67 민규의 악수
//68 버스시간표
//69 골드바흐
//70 행렬곱하기
