const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");


button.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodo)


function addTodo(event){
    event.preventDefault();

    console.log(input.value);
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoDiv.classList.add("todo-Item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);
    
    const deleteButton = document.createElement("Button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("Button")
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    todolist.appendChild(todoDiv);
    input.value = "";
}

function deleteTodo(event){
    const Item = event.target;
    if(Item.classList[0] === "delete-btn"){
        const delItem = Item.parentElement;
        delItem.remove();
   }
   if(Item.classList[0] === "complete-btn"){
       const delItem = Item.parentElement;
       delItem.classList.toggle("completed");
  }

}