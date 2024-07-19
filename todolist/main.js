//추가하기 버튼을 클릭하면 할일이 추가된다.
// 완료 버튼을 클릭하면 줄이 그어진다.
// 삭제 버튼을 누르면 해당 아이템이 삭제된다.
// 완료 버튼을 클릭하면 완료 탭으로 이동하고
// 모두 탭에선 모두 전체 아이템을 보여준다.

const addBtn = document.querySelector(".add-btn");
let userValue = document.querySelector("#user-value");

const render = () => {
  let userTask = userValue.value;
  //   console.log(userTask);
  let resultHTML = "";
  resultHTML += `  <div class="item-list">
            <div class="item">${userTask}</div>
            <div>
              <button id="done-btn">완료</button>
              <button id="delete-btn">삭제</button>
            </div>
          </div>`;
  document.querySelector(".main-board").innerHTML = resultHTML;
};

addBtn.addEventListener("click", addTask);
