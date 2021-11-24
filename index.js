const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');
const saveBtn = document.querySelector('.save');
const clearAll = document.querySelector('.clearall');
const askMeBtn = document.querySelector('.askMe');
const askmeList = document.querySelector('.askmeList');
const classes = askmeList.classList;

function onPageLoaded(){
saveBtn.addEventListener("click", () => {
    localStorage.setItem("toDoList", toDoList.innerHTML);
    console.log(localStorage);
});
clearAll.addEventListener("click", () => {
    toDoList.innerHTML = "";
    localStorage.removeItem('toDoList', toDoList.innerHTML);
    
});

function loadTodos() {
    const data = localStorage.getItem("toDoList");
    if (data) {
        toDoList.innerHTML = data;
    }
    }
    
    loadTodos();
}

document.addEventListener("DOMContentLoaded", onPageLoaded);


askMeBtn.addEventListener('click', function() {
    const result = classes.toggle("askmeList");
})



btn.addEventListener('click', addNewLi);

function addNewLi(){
    if (inputField.value.length >0){
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('added');
    toDoList.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', ()=>{
        item.classList.add('done');
    });
    item.addEventListener('dblclick', ()=>{
        toDoList.removeChild(item);
    })
}
};

inputField.addEventListener("keypress", (e)=>{
    if (e.keyCode === 13 && inputField.value.length > 0) {
        addNewLi()
    }
});





