let btn = document.querySelector("button");
var title = document.getElementById("title");
var content = document.getElementById("content");
let listContainer = document.querySelector(".list-container");
let taskId = 0;

btn.addEventListener('click', event => {
    let li = document.createElement('li');
    li.classList.add("created");
    li.setAttribute("id", "task-" + taskId);
    taskId++;


    li.innerHTML = title.value + ' : ' + content.value +' <i class="fas fa-trash-alt" onclick="deleteTask(\'task-' + (taskId-1) + '\')"></i>';
    li.addEventListener('click' , event => {
        red = Math.floor(Math.random() * 255)
        green = Math.floor(Math.random() * 255)
        blue = Math.floor(Math.random() * 255)
        li.style.color=`rgb(${red} , ${green} , ${blue})`
    })
    listContainer.appendChild(li);
    title.value = "";
    content.value = "";
});

function deleteTask(taskId) {
    let task = document.getElementById(taskId);
    task.remove();
}
