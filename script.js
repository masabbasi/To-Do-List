
let list = document.querySelector('.list');
let listItem = document.querySelectorAll('.list-item');
let inputDo = document.querySelector('.input-do');
let alert = document.querySelector('.alert')
let faIcon = document.querySelectorAll('.fa');

function removeItem (event){
    event.target.parentElement.remove()
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
    alert.innerHTML=""
    let newLiTag = document.createElement('li')
    newLiTag.innerHTML = event.target.value
    newLiTag.setAttribute('class','list-item')
    newLiTag.setAttribute('aria-hidden','true')
    let newLiIcon = document.createElement('i')
    newLiIcon.setAttribute('class','fa fa-trash')
    list.appendChild(newLiTag)
    newLiTag.appendChild(newLiIcon)
    newLiIcon.addEventListener('click',removeItem)
    event.target.value=''
  } else if (event.code === 'Enter' && event.target.value==='') {
      alert.innerHTML="Enter The Value"
  } else {
    alert.innerHTML="Typing..."
  }
})