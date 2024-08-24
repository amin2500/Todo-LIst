document.body,addEventListener(`keydown`,(event)=>{
  if(event.key === `Enter`){
    todo()
  }
})



let todolist = JSON.parse(localStorage.getItem("todolist")) || [];

renderToDoList();
function renderToDoList() {
  let todolistHTML =  "";
  
  todolist.forEach( (todoObject,index) => {
    let name = todoObject.name;
    let dueDate = todoObject.dueDate;
    let html = `
    
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-Button 
    js-delete">Delete</button>
    `;
    
    todolistHTML += html;
  })

  document.querySelector(`.js-para`).innerHTML = todolistHTML;


  document.querySelectorAll(`.js-delete`)
   .forEach( (deleteButton,index) =>{
    deleteButton.addEventListener('click',()=>{
      todolist.splice(index,1) 
      renderToDoList()
     })
  })
    
  
  localStorage.setItem("todolist", JSON.stringify(todolist))
}

document.querySelector(`.js-addtodo-button`).addEventListener(`click`,()=>{
  todo()
})


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