//추가하기 버튼을 클릭하면 할일이 추가된다.
// 완료 버튼을 클릭하면 줄이 그어진다.
// 삭제 버튼을 누르면 해당 아이템이 삭제된다.
// 완료 버튼을 클릭하면 완료 탭으로 이동하고
// 모두 탭에선 모두 전체 아이템을 보여준다.

const addBtn = document.querySelector(".add-btn");
let userValue = document.querySelector("#user-value");
let taskList = [];

const addTask = () => {
  let userTask = userValue.value;
  let task = {
    id: newID(),
    taskContent: userTask,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
};

const doneBtn = (id) => {
  let task = taskList.find((item) => item.id === id);
  if (task) {
    task.isComplete = !task.isComplete;
  }
  console.log(task);
  render();
};

const render = () => {
  //   console.log(userTask);
  let resultHTML = taskList
    .map((item, index) => {
      if (item.isComplete === false) {
        return `<div class="item-list">
          <div class="item">${item.taskContent}</div>
          <div>
            <button id="done-btn" data-index="${index}" onclick="doneBtn('${item.id}')">완료</button>
            <button id="delete-btn" data-index="${index}">삭제</button>
          </div>
        </div>`;
      } else {
        return `<div class="item-list">
          <div class="item" id="task-done">${item.taskContent}</div>
          <div>
            <button id="done-btn" data-index="${index}" onclick="doneBtn('${item.id}')">완료</button>
            <button id="delete-btn" data-index="${index}">삭제</button>
          </div>
        </div>`;
      }
    })
    .join();
  document.querySelector(".main-board").innerHTML = resultHTML;
};

addBtn.addEventListener("click", addTask);

var newID = function () {
  return Math.random().toString(36).substr(2, 16);
};
