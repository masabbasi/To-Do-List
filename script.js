
let list = document.querySelector('.list');
let listItem = document.querySelectorAll('.list-item');
let inputDo = document.querySelector('.input-do');
let alert = document.querySelector('.alert')
let faIcon = document.querySelectorAll('.fa');
let toDoArray = []

function removeItem (event){
    event.target.parentElement.remove()

    // let localStorageTodos = JSON.parse(localStorage.getItem('toDo'));
    // let removeItem =event.target.parentElement.textContent;
    // toDoArray = localStorageTodos.filter(function (item) {
    //   item.title != removeItem;
    // })
    // console.log(toDoArray);
    // setLocalStorage(toDoArray);


    let localStorageToDo = JSON.parse(localStorage.getItem('toDo'))
    toDoArray = localStorageToDo;
    let removeItem =event.target.parentElement.textContent;
    let mainToDoIndex = toDoArray.findIndex(function(toDo){
      return removeItem===toDo.title
    })
    toDoArray.splice(mainToDoIndex,1)
    setLocalStorage(toDoArray)
    alert.innerHTML="To Do Deleted!"
}


faIcon.forEach(function(item){
item.addEventListener('click',removeItem)
})

document.body.addEventListener('click',function(event){
    alert.innerHTML=""   
    inputDo.value=''
})

inputDo.addEventListener('keydown',function(event){
  if (event.code === 'Enter' && event.target.value!=='')
  {
    let toDoText = event.target.value;
    let newToDoObj = {
      title:toDoText
    }
    toDoArray.push(newToDoObj);
    setLocalStorage(toDoArray);
    let newLiTag = document.createElement('li');
    newLiTag.innerHTML = event.target.value;
    newLiTag.setAttribute('class','list-item');
    // newLiTag.setAttribute('id',newToDoObj.id);
    let newLiIcon = document.createElement('i');
    newLiIcon.setAttribute('aria-hidden','true');
    newLiIcon.setAttribute('class','fa fa-trash');
    newLiTag.appendChild(newLiIcon);
    list.appendChild(newLiTag);
    newLiIcon.addEventListener('click',removeItem);
    alert.innerHTML=""
    event.target.value=''
  } else if (event.code === 'Enter' && event.target.value==='') {
      alert.innerHTML="Enter The Value"
  } else {
    alert.innerHTML="Typing..."
  }
})

function setLocalStorage (toDoList) {
  localStorage.setItem('toDo',JSON.stringify(toDoList))
}

function toDoGenerator () {
  let myToDoArray = JSON.parse(localStorage.getItem('toDo'))
  if (myToDoArray) {
    toDoArray = myToDoArray;
  } else {
    toDoArray = [];
  }
   myToDoArray.forEach(function (item) {
   let newLiTag = document.createElement('li');
   newLiTag.innerHTML = item.title;
   newLiTag.setAttribute('class','list-item');
   let newLiIcon = document.createElement('i');
   newLiIcon.setAttribute('aria-hidden','true');
   newLiIcon.setAttribute('class','fa fa-trash');
   newLiTag.appendChild(newLiIcon);
   list.appendChild(newLiTag);
   newLiIcon.addEventListener('click',removeItem);
 })
}

window.addEventListener ('load',toDoGenerator)