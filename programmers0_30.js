//1. 한 번만 등장한 문자
function solution(s) {
    const noOverlay = new Set(s);
    if (noOverlay.size === s.length) {
        return s.split("").sort().join("");
    }
    const sArr = s.split("");
    for (let i = 0; i < sArr.length; i++) {
        if (!s.includes(sArr[i])) {
            continue;
        }
        if (s.indexOf(sArr[i]) !== s.lastIndexOf(sArr[i])) {
            s = s.split(sArr[i]).join("");
        }
    }
    return s.split("").sort().join("");
}

//2. 2차원으로 만들기
function solution(num_list, n) {
    let ans = [];
    for(let i = 0; i < num_list.length; i += n){
        const oneArr = num_list.slice(i, i + n);
        ans.push(oneArr);
    }
    return ans;
}

//3. k의 개수
function solution(i, j, k) {
    let a = '';
    let result = 0;
    for (i; i <= j; i++) {
        a += i
    }
    result = a
        .split(k)
        .length - 1;
    return result;
}

//4. 가까운 수
function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return array[0];
}

//5. 이진수 더하기
function solution(bin1, bin2) {
    var answer = '';
    answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
    return answer;
}

//6. 소인수분해
function solution(n) {
    let result = [];
    let divisor = 2;
    
    while (n >= 2) {
      if (n % divisor === 0) {
        result.push(divisor)
        n = n / divisor;
      }
       else divisor ++;
    }
    return [...new Set(result)];
  }

//7. 컨트롤 제트
function solution(s) {
    const sArr = s.split(' ')

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == "Z" && sArr[0] !== "Z") {
            sArr.splice((i - 1), 2)
            i = i - 2;
        }

        if (sArr[i] == "Z" && sArr[0] === "Z") {
            sArr.splice((i), 1)
            i = i - 1;
        }
    }

    return sArr.map(n => +n).reduce((a, c) => a + c, 0);
}

//8.공 던지기
function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length]
}

//9. 구슬을 나누는 경우의 수
function solution(balls, share) {
    const fac = (num) => num === 0 ? 1 : num * fac(num - 1);
    return Math.round(fac(balls) / fac(balls - share) / fac(share));
}

//10. 삼각형의 완성조건 (2)
function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a - b)
    let lec = []
    for (let i = 1; i < (sides[0] + sides[1]); i += 1) {
        if (sides[0] + i > sides[1] && i <= sides[1]) {
            lec.push(i)
        } else if (sides[0] + sides[1] > i && sides[1] < i) {
            lec.push(i)
        }
    }
    return answer = lec.length;
}

//11. 외계어 사전
function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}

//12. 캐릭터의 좌표
function solution(keyinput, board) {
    let answer = [0, 0];
    for (let x of keyinput) {
        if (x === 'left' && answer[0] !== -Math.floor(board[0] / 2)) {
            answer[0] -= 1
        } else if (x === 'right' && answer[0] !== Math.floor(board[0] / 2)) {
            answer[0] += 1
        } else if (x === 'up' && answer[1] !== Math.floor(board[1] / 2)) {
            answer[1] += 1
        } else if (x === 'down' && answer[1] !== -Math.floor(board[1] / 2)) {
            answer[1] -= 1
        }
    }
    return answer;
}

//13. 종이 자르기
function solution(M, N) {
    var answer = 0;
    answer = M*N-1;
    return answer;
}

//14. 직사각형 넓이 구하기
function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    
    const oneSide = Math.abs(dots[0][1] - dots[1][1]);
    const otherSide = Math.abs(dots[0][0] - dots[2][0]);
    
    return oneSide * otherSide;
}

//15. 로그인 성공?
function solution(id_pw, db) {
    // db에서 아이디가 같은 원소만 남긴다
    let findId = db.filter((e) => e[0] === id_pw[0]);
    // 이때, 비밀번호가 같은 원소인지 판단
    let findPw = findId.filter((e) => e[1] === id_pw[1]);
    if (!!findPw.length) {
        return 'login'; // 비밀번호가 같으면 login, 아니면 wrong pw
    } else if (!!findId.length) {
        return 'wrong pw';
    }
    // db에 아이디가 같은 원소가 없으면, fail
    return 'fail';
}

//16. 치킨 쿠폰
function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    // 쿠폰이 10개 이상이라면
    while (coupon >= 10) {
        // 쿠폰을 10으로 나눈 몫만큼 서비스 치킨 추가
        service += coupon / 10 << 0;
        // 남은 쿠폰 = coupon%10, 서비스로 주문한 치킨의 쿠폰 수 = coupon/10
        coupon = coupon % 10 + coupon / 10 << 0;
    }
    return service
}

//17. 유한소수 판별하기
function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}

//18. 등수 매기기
function solution(score) {
    let avg = score.map(v => (v[0] + v[1]) / 2);
    let sorted = avg.slice().sort((a, b) => b - a);
    return avg.map(v => sorted.indexOf(v) + 1);
}

//19. 저주의 숫자 3

//20. 특이한 정렬

//21. 문자열 밀기
function solution(A, B) {
    if(A===B) {return 0};
    let total = 0;
    let arr = A.split("");
    for (let i = arr.length-1; i >= 0; i-- ){
        let tmp = arr.splice(arr.length-1, 1)[0]
        arr.unshift(tmp);
        total++
        if(arr.join("") === B) {
            return total
        };
    }
    return -1;
}

//22. 다항식 더하기
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    let xNum = 0;
    let num = 0;
    arr.forEach((n) => {
        if (n.includes("x")) {
            const strVal = n.replace("x", "") || "1";
            xNum += parseInt(strVal, 10);
        } else {
            num += parseInt(n);
        }
    });

    let answer = [];
    if (xNum) {
        answer.push(`${xNum === 1? "" : xNum}x`);
    }
    if (num) {
        answer.push(num);
    }
    return answer.join(" + ");
}

//23. 최빈값 구하기
function solution(array) {
    array.sort(function (a, b) {
        return a - b
    });
    var maxCount = 1; // 가장 많이 등장한 횟수
    var mode = array[0]; // 최빈값
    var currentCount = 1; // 현재 요소의 등장 횟수
    for (var i = 1; i < array.length; i++) {
        // 현재 요소와 이전 요소가 같다면 등장 횟수를 증가시킴
        if (array[i] === array[i - 1]) {
            currentCount++;
        } else {
            // 현재 요소와 이전 요소가 다르다면 등장 횟수를 1로 초기화
            currentCount = 1;
        }
        // 이전 요소와 같지 않은 현재 요소의 등장 횟수가 최빈값의 등장 횟수보다 크다면 최빈값을 갱신함
        if (currentCount > maxCount) {
            maxCount = currentCount;
            mode = array[i];
        }
    }
    // 같은 숫자의 갯수가 똑같은게 2개 이상이라면 -1을 리턴
    for (var j = 0; j < array.length; j++) {
        if (array[j] !== mode && array.filter(function (val) {
            return val === array[j]
        }).length === maxCount) {
            return -1;
        }
    }
    // 최빈값 리턴
    return mode;
}

//24. OX퀴즈
function solution(quiz) {
    const answer = [];
    for (let i = 0; i < quiz.length; i++) {
        const [xy, z] = quiz[i].split(" = ");
        const [x, op, y] = xy.split(" ");
        const result = op === "+" ? Number(x) + Number(y) : Number(x) - Number(y);
        answer.push(result === Number(z) ? "O" : "X");
    }
    return answer;
}

//25. 분수의 덧셈
// 최대 공약수 구하기
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    let gcd = cal_gcd(denum, num);
    
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [denum / gcd, num / gcd]
}

//26. 다음에 올 숫자
function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        return common.pop() + common[1] - common[0];
    } else {
        return common.pop() * (common[1] / common[0]);
    }
}


//27. 연속된 수의 합
function solution(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));
    return Array.from({
        length: num
    }, (_, i) => i + min);
}

//28. 안전지대

//29. 겹치는 선분의 길이

//30. 평행