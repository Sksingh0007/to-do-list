

const taskInput = document.querySelector('#input');
const buttonAdd = document.querySelector('#button');

const toDoList = document.querySelector('#todolist');


 //Adding "enter key" functionality
taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addToDo();
    }
});

buttonAdd.addEventListener('click', addToDo);

function addToDo(){
    const task = taskInput.value;
   
    //If task is empty
    if(task === ""){
        alert("Please enter a task");
        return;
    }
    
    //Creating a li element to add tasks
    const list = document.createElement('li');
    list.textContent = task;

    //Creating a Delete button
    const deleteButton = document.createElement('a');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", function(){
        toDoList.removeChild(list);
    });


    //Append child
    list.appendChild(deleteButton);
    toDoList.appendChild(list);
    
    //Clear the input field
    taskInput.value = '';
}
console.log("dhf");
