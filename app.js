

// const taskInput = document.querySelector('#input');
// const buttonAdd = document.querySelector('#button');

// const toDoList = document.querySelector('#todolist');


//  //Adding "enter key" functionality
// taskInput.addEventListener('keypress', function(event){
//     if(event.key === 'Enter'){
//         addToDo();
//     }
// });

// buttonAdd.addEventListener('click', addToDo);

// function addToDo(){
//     const task = taskInput.value;
   
//     //If task is empty
//     if(task === ""){
//         alert("Please enter a task");
//         return;
//     }
    
//     //Creating a li element to add tasks
//     const list = document.createElement('li');
//     list.textContent = task;

//     //Creating a Delete button
//     const deleteButton = document.createElement('a');
//     deleteButton.classList.add('delete');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener("click", function(){
//         toDoList.removeChild(list);
//     });


//     //Append child
//     list.appendChild(deleteButton);
//     toDoList.appendChild(list);
    
//     //Clear the input field
//     taskInput.value = '';
// }

const inputText = document.getElementById('input');
const addButton = document.getElementById('button');
const tasklist = document.getElementById('todolist');

//handleing "Enter press"
inputText.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addToDo();
    }
});
//Add button functionality
addButton.addEventListener('click', addToDo);

function addToDo(){
    const input = inputText.value;
    if(input === ""){
        alert("Please enter some task to complete!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = input;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = "del";
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(){
        tasklist.removeChild(li);
    });

    tasklist.appendChild(li);

    inputText.value = '';
}