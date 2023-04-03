// 1. 평균 구하기
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

// 2. 짝수와 홀수
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd"
}

// 3. 약수의 합
function solution(n) {
  ret = []
  for(let i = 1; i <= n; i++){
      if(n % i === 0) ret.push(i)
  }
  return ret.reduce((acc,cur) => acc + cur, 0)
}

// 4. 자릿수 더하기
function solution(n){
  ret = n.toString().split('').map(Number)
  return ret.reduce((a, c)=> a+c, 0)
}

// 5. x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  ret = []
  for(let i = 1; i <= n; i++){
      ret.push(x*i)
  }
  return ret;
}

// 6. 나머지가 1이 되는 수 찾기
function solution(n) {
  for(let i = 1; i < n; i++){
      if(n % i === 1){
          return i   
      }
  }
}

// 7. 문자열 내 p와 y의 개수
function solution(s){
  pnum = s.toLowerCase().split('').filter(v => ['p'].includes(v)).length
  ynum = s.toLowerCase().split('').filter(v => ['y'].includes(v)).length
  return pnum === ynum ? true : false
}

// 8. 정수 제곱근 판별
function solution(n) {
  for(let x = 1; x ** 2 <= n; x++){
      if(x**2 == n){
          return (x+1) ** 2
      }
  }
  return -1
}

// 9. 자연수 뒤집어 배열로 만들기
function solution(n) {
  arr = n.toString().split('')
  ret = []
  for(i of arr){
      ret.unshift(Number(i))
  }
  return ret;
}

// 10. 정수 내림차순으로 배치하기
function solution(n) {
  ret = n.toString().split('').sort((a,b) => b-a).join('')
  return +ret
}

// 11. 문자열을 정수로 바꾸기
function solution(s) {
  return Number(s);
}

// 12. 하샤드 수
function solution(x) {
  sum = x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)
  return x % sum === 0 ? true : false
}

// 13. 두 정수 사이의 합
function solution(a, b) {
  arr = [a, b]
  arr.sort((a, b) => a-b)
  sa = arr[0]
  sb = arr[1]
  ret = 0;
  for(let i = sa; i <= sb; i++){
      if(a == b){
          return sa;
      }else{
          ret += i 
      }
  }
  return ret;
}

// 14. 콜라츠 추측
function solution(num) {
  cnt = 0;
  while(num !== 1){
      cnt++
      if(num % 2 === 0){
          num = num / 2
      }else{
          num = num * 3 + 1
      }
  }
  return cnt > 500 ? -1 : cnt
}

// 15. 서울에서 김서방 찾기
function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`
}

// 16. 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  ret = arr.filter(v => v%divisor === 0)
  return ret.length === 0 ? [-1] : ret.sort((a,b) => a-b)
}

// 17. 핸드폰 번호 가리기
function solution(phone_number) {
  arr = phone_number.toString().split('').reverse()
  ret = []
  for(let i = 0; i < arr.length; i++){
      i < 4 ? ret.push(arr[i]) : ret.push('*')
  }
  return ret.reverse().join('');
}

// 18. 음양 더하기
function solution(absolutes, signs) {
  sum = 0;
  for(let i = 0; i < signs.length; i++){
      if(signs[i]){
          sum += absolutes[i]
      }else{
          sum -= absolutes[i]
      }
  }
  return sum
}

// 19. 제일 작은 수 제거하기
function solution(arr) {
  let min = Math.min(...arr)
  if(arr.length === 1){
      return [-1]
  }else{
      return arr.filter(v => v > min)
  }
}

// 20. 없는 숫자 더하기
function solution(numbers) {
  ret = [1,2,3,4,5,6,7,8,9,0].filter(v => !numbers.includes(v))
  return ret.reduce((a,c) => a + c, 0)
}
