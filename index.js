function Enter() {
  if (event.key === "Enter") {
    todo();
  }
}

let todolist = JSON.parse(localStorage.getItem("todolist")) || [];

renderToDoList();
function renderToDoList() {
  let todolistHTML =  "";
  
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    let name = todoObject.name;
    let dueDate = todoObject.dueDate;
    let html = `
    
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-Button" onclick=" 
    todolist.splice(${i},1) 
    renderToDoList()">
    Delete</button>
    `;
    
    todolistHTML += html;
  }
  
  document.querySelector(`.js-para`).innerHTML = todolistHTML;
  localStorage.setItem("todolist", JSON.stringify(todolist))
}


function todo() {
  let input = document.querySelector(`.js-input`);
  let dateElement = document.querySelector(`.js-date`);
  

  let name = input.value;
  let dueDate = dateElement.value;

  todolist.push({
    name: name,
    dueDate: dueDate,
  });
  renderToDoList();
  input.value = "";
}