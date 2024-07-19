const resetBtn = document.querySelector("#reset");
const resultArea = document.querySelector(".result-area");
const startBtn = document.querySelector("#start");
let inputUser = document.querySelector("#input-user");
let chanceArea = document.querySelector(".chance-area");

let inputNumList = [];
let randomNumber = 0;
let chance = 5;
let gamaOver = false;

const gamePlay = () => {
  let userValue = parseInt(inputUser.value);
  //유저가 입력한 값 저장하기

  if (inputNumList.includes(userValue)) {
    resultArea.textContent = "이미 입력되었습니다";
    return;
  }
  inputNumList.push(userValue);
  //입력한 겂
  //1과 50 사이 입력하게 하기 그 외 숫자는 1과 50사이 숫자 입력해주세요 문구
  if (userValue > 50 || userValue < 1) {
    alert("1과 50사이의 숫자를 입력해주세요.");
    return;
  }

  let result =
    userValue > randomNumber
      ? (resultArea.textContent = "down")
      : userValue < randomNumber
      ? (resultArea.textContent = "up")
      : userValue === randomNumber
      ? (resultArea.textContent = "정답")
      : null;
  console.log(result);
  if (result === "정답") {
    startBtn.disabled = true;
    return;
  }

  if (result === "down" || result === "up") {
    chance--;
    chanceArea.textContent = `남은기회 : ${chance}번`;
    if (chance === 0) {
      gamaOver = true;
    }
  }

  if (gamaOver === true) {
    startBtn.disabled = true;
    chanceArea.textContent = `기회를 모두 소진하였습니다. 처음부터 다시 시작해주세요`;
  }
};

const reset = () => {
  resultArea.textContent = "초기화 되었습니다.";
  inputUser.value = "";
  gamaOver = false;
  chance = 5;
  chanceArea.textContent = `남은기회: ${chance}번`;
  startBtn.disabled = false;
  inputNumList = [];
  randomPickNumber();
};

startBtn.addEventListener("click", gamePlay);
resetBtn.addEventListener("click", reset);
const randomPickNumber = () => {
  randomNumber = Math.floor(Math.random() * 50 + 1);
  console.log(randomNumber);
};

randomPickNumber();
