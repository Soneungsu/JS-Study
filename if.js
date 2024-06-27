// 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오

let userText = "";
userText = 1;
if (userText < 0) {
    console.log("음수입니다");
} else {
    console.log("양수입니다.");
}

//나는 대학교 교수다. 레포트 점수에 따라 등글을 매기는 프로그램을 만드시오.
// 90 ~ 100 : A
// 80 ~ 89 : B
// 70 ~ 79 : C
// 60 ~ 69 : D
// lett than 59 : F

let score = 90;
let grade = "";
if (90 <= score && score <= 100) {
    grade = "A";
} else if (80 <= score && score <= 89) {
    grade = "B";
} else if (70 <= score && score <= 79) {
    grade = "C";
} else if (60 <= score && score <= 69) {
    grade = "D";
} else if (0 <= score && score <= 59) {
    grade = "F";
} else {
    console.log("잘못된 범위의 점수입니다");
}
console.log(grade);

// 문제 3

let skills = ["HTML", "CSS", "JS", "React"];

if (skills.includes("JS") && skills.includes("React")) {
    console.log("합격");
} else if (
    skills.includes("HTML") &&
    skills.includes("CSS") &&
    skills.includes("JS")
) {
    console.log("예비");
} else {
    console.log("불합격");
}
