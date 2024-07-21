//추가하기 버튼을 클릭하면 할일이 추가된다.
// 완료 버튼을 클릭하면 줄이 그어진다.
// 삭제 버튼을 누르면 해당 아이템이 삭제된다.
// 완료 버튼을 클릭하면 완료 탭으로 이동하고
// 모두 탭에선 모두 전체 아이템을 보여준다

const tabs = document.querySelectorAll(".tabs-wrapper div");
const addBtn = document.querySelector(".add-btn");
let userValue = document.querySelector("#user-value");
let taskList = [];
let mode = "all";
let filterList = [];
for (let i = 1; i < tabs.length; i++) {
  // console.log(tabs[i]);
  tabs[i].addEventListener("click", (event) => filter(event));
}

const filter = (event) => {
  mode = event.target.className;

  if (mode === "all") {
    render();
  } else if (mode === "inprogress") {
    let inprogress = taskList.filter((item) => item.isComplete === false);
    filterList = inprogress;
    console.log("진행중", filterList);
    render();
  } else if (mode === "done") {
    //완료된 아이템을 보여준다
  }
};

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

const deleteBtn = (id) => {
  let index = taskList.findIndex((item) => item.id === id);
  if (index !== -1) {
    taskList.splice(index, 1);
  }
  console.log(index);
  render();
};

const render = () => {
  //내가 선택한 탭에 따라서 리스트들을 달리보여준다

  let list = [];
  if (mode === "all") {
    list = taskList;
  } else if (mode === "inprogress") {
    list = filterList;
  }
  let resultHTML = list
    .map((item, index) => {
      if (item.isComplete === false) {
        return `<div class="item-list">
          <div class="item">${item.taskContent}</div>
           <div>
            <button id="done-btn" data-index="${index}" onclick="doneBtn('${item.id}')">완료</button>
            <button id="delete-btn" data-index="${index}" onclick="deleteBtn('${item.id}')">삭제</button>
          </div>
          </div>`;
      } else {
        return `<div class="item-list">
          <div class="item" id="task-done">${item.taskContent}</div>
           <div class="btn-wrapper">
            <button id="done-btn" data-index="${index}" onclick="doneBtn('${item.id}')">완료</button>
            <button id="delete-btn" data-index="${index}" onclick="deleteBtn('${item.id}')">삭제</button>
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
