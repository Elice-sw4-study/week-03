//[level 0] 영어가 싫어요 120894
//https://school.programmers.co.kr/learn/courses/30/lessons/120894

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    var dict = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9 
    }
    var answer = "";
    
    while (true) {
        if (numbers === null || numbers === undefined || numbers === '')
            return parseInt(answer);
        
        if (numbers[0] === 'z') { //zero
            answer += '0';
            numbers = numbers.replace("zero", '');
        }
        else if (numbers[0] === 'o') { //one
            answer += '1';
            numbers = numbers.replace("one", '');
        }
        else if (numbers[0] === 'e') { //eight
            answer += '8';
            numbers = numbers.replace("eight", '');
        } 
        else if (numbers[0] === 'n') { //nine
            answer += '9';
            numbers = numbers.replace("nine", '');
        }
        else if (numbers[0] === 't') { //two, three
            if (numbers[1] === 'w') { //two
                answer += '2';
                numbers = numbers.replace("two", '');
            }
            else { //three
                answer += '3';
                numbers = numbers.replace("three", '');
            }
        }
        else if (numbers[0] === 'f') { //four, five
            if (numbers[1] === 'o') { //four
                answer += '4';
                numbers = numbers.replace("four", '');
            }
            else { //five
                answer += '5';
                numbers = numbers.replace("five", '');
            }
        }
        else if (numbers[0] === 's') { //six, seven
            if (numbers[1] === 'i') { //six
                answer += '6';
                numbers = numbers.replace("six", '');
            }
            else { //seven
                answer += '7';
                numbers = numbers.replace("seven", '');
            }
        }
    }
}