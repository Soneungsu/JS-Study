// 문제 1
// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}

// 문제 2
// 1부터 100까지 홀수만 출력하자

for (let i = 0; i <= 100; i++) {
    i += 1;
    console.log(i);
}

// 문제 3
// 3,6,9 출력해보자 (3,6,9에 짝, 33,36 짝짝 등)

for (let i = 1; i <= 50; i++) {
    let output = "";
    let numberString = i.toString();
    for (let j = 0; j < numberString.length; j++) {
        if (
            numberString[j] === "3" ||
            numberString[j] === "6" ||
            numberString[j] === "9"
        ) {
            output += "짝";
        }
    }
    console.log(output.length > 0 ? output : i);
}

//문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 작성하시오

let isPrime = true;

let nums = 11;

if (nums === 1) {
    isPrime = false;
} else {
    for (let i = 0; i < nums; i++) {
        if (nums % i === 0) {
            isPrime = false;
        }
    }
}
console.log(isPrime);
