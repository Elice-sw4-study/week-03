//  다음에 올 숫자
function solution(arr){
    let answer = 0
    if(arr[1]-arr[0] === arr[2]- arr[1]){
      return arr[arr.length-1]+arr[arr.length-1]-arr[arr.length-2]
    }return arr[arr.length-1]*(arr[arr.length-1]/arr[arr.length-2])
  }

  
  
//최빈값 구하기
function solution(array) {
 
    if (array.length === 1) return array[0];//[1]
  
    const obj = {};
    const answer = [];
  
    array.forEach((n) => {
      obj[n] = ++obj[n] || 1;
    });
  
    for (let key in obj) {//obj.key로 가능
      answer.push([key, obj[key]]);
    }
  
    answer.sort((a, b) => b[1] - a[1]);
  
    if (!answer[1]) return +answer[0][0] // [1,1,1,1,1] -> [['1',4]]
    else if (answer[0][1] === answer[1][1]) return -1;// [1,1,2,2] -> [["1",2],["2",2]]
  
  
    return Number(answer[0][0]);
  }


//다항식 더하기
  function solution(polynomial) {
    var arr = polynomial.split(" + ")
    xnum = 0;
    num = 0;
    arr.forEach((el) => {
        if(el.includes("x")) {
         let str = el.replace(/x/g,"") || "1";//x를 없애줘, 빈칸(false값이면) 1로
            xnum += parseInt(str,10)
       
    }else{
            num += parseInt(el)
            }})
    
    let answer = [];
    if (xnum) answer.push(`${xnum === 1 ? "" : xnum}x`) //xnum이 있으면 배열에 넣어주는데 그게 1이면 그냥 빈문자 + x로 푸시
    if (num) answer.push(num);
    return answer.join(" + ");
}

//등수매기기
function solution(score) {
    var answer = [];
    let arr = score.flat()
    for(i=0; i < score.length; i++){
       answer.push((arr[i*2]+arr[i*2+1])/2)
        }
    let answerSorted = (answer.slice().sort((a,b)=> b-a))
    return answer.map((aver) => answerSorted.indexOf(aver)+1);
}

//치킨쿠폰
function solution(chicken) {
    let free = 0;
    let coupon = 0;
   
        for(i = 1; i < 7; i++){
    free += chicken / 10**i
    coupon += free % 10**i
    }
    return Math.floor(free);
}

//로그인 성공?
function solution(id_pw, db) {
    for(i = 0; i < db.length; i++){
        
        if(id_pw[0] == db[i][0] && id_pw[1] == db[i][1]) return "login"
        else if(id_pw[0] == db[i][0] && id_pw[1] != db[i][1]) return "wrong pw"    
    }
    db.flat()
    if(!db.includes(id_pw[0])) return "fail"

}

//직사각형 넓히기
function solution(dots) {
    let x2 = Math.max(dots[0][0],dots[1][0],dots[2][0],dots[3][0])
    let x1 = Math.min(dots[0][0],dots[1][0],dots[2][0],dots[3][0])
     
     let y3 = Math.max(dots[0][1],dots[1][1],dots[2][1],dots[3][1])
     let y2 = Math.min(dots[0][1],dots[1][1],dots[2][1],dots[3][1])
     
     let height = y3 - y2
     let width = x2 - x1 
     
     var answer = Math.abs(height * width);
     return answer;
 }

 //종이 자르기
 function solution(M, N) {
    let mx = Math.max(M,N)
    let mn = Math.min(M,N)
    return (mn - 1) + (mn * (mx-1))
  
}

//구슬을 나누는 경우의 수
function solution(balls, share) {
    let top = 1;
    let bottom1 = 1;
     let bottom2 = 1;
    for(i = 1; i <= balls; i++){
        top *= i
    }
    for(i = 1; i <= balls - share; i++){
        bottom1 *= i
    }
    for(i = 1; i <= share; i++){
        bottom2 *= i
    }
    return Math.round(top/(bottom1*bottom2));
}

//잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    for(i = 0; i < my_str.length; i += n)
        answer.push(my_str.substr(i, n))
    
    return answer;
}

//영어가 싫어요
function solution(numbers) {
    var answer = numbers;
    const number = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
    }
    
    answer = numbers.replace(/zero|one|two|three|four|five|six|seven|six|seven|eight|nine/g, 
                             function(matched){ return number[matched]})
  
return Number(answer)
}

//7의 개수
function solution(array) {
    var answer = 0;
    let arr = array.join("").toString().split("").map(Number)
    for(i = 0; i < arr.length; i++)
    arr[i] === 7 ? answer++ : answer;
    
    return answer
    

}

//정수의 제곱근 판별
function solution(n) {
    if(Math.sqrt(n)%1 === 0) return (Math.sqrt(n)+1)**2
    else return -1
}

//나머지 1이 되는 수
function solution(n) {
    for(i = 1; i < n; i++)
    if(n % i == 1) 
    return i;
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
   for (let i = 1; i<=n; i++){
       answer.push(x*i);
   }
   return answer;
}

//자릿수 더하기
function solution(n)
{
    var answer = String(n).split("").map(Number).reduce((arr,el) => arr + el,0)

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

//약수의 합
function solution(n) {
    sum = 0;
    for(i = 1; i <= n; i++){
        if(n % i === 0) sum += i
    }
    return sum;
}

//평균 구하기
function solution(arr) {
    return arr.reduce((arr,el)=> (arr+el), 0)/arr.length
   
}

//짝수와 홀수