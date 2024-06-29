const greet = () => {
    console.log("안녕 내 이름은 제시카야");
};
greet();

const userNames = (name) => {
    console.log(name);
};

userNames("안녕 내 이름은 에멜리야");
userNames("안녕 내 이름은 할리야");

const nicName = (nicname) => {
    return nicname;
};

console.log(nicName("eungsu"));

const meetAt = (year, month, date) => {
    if (date) {
        return `${year}년 ${month}월 ${date}일`;
    }
    if (month) {
        return `${yerr}년 ${month}월`;
    }
    if (year) {
        return `${year}년`;
    }
};

console.log(meetAt(2024, 6, 28));

const findSmallestElement = (arr) => {
    let number = arr[0];
    // 만익 arr 비어있으면 0을 리턴
    if (number.length === 0) {
        return 0;
    }
    // arr 값들 중 가작 적은 값을 리턴
    for (let i = 1; i < arr.length; i++) {
        if (number > arr[i]) {
            number = arr[i];
        }
    }
    return number;
};

const result = findSmallestElement([100, 200, 0, 3, 2]);
console.log(result);

let unit = [50000, 10000, 5000, 1000, 500, 100];
function changeCalculate(money) {
    for (let i = 0; i < unit.length; i++) {
        let num = Math.floor(money / unit[i]);
        console.log(unit[i] + "X" + num);
        money = money - unit[i] * num;
    }
}

changeCalculate(12300);
