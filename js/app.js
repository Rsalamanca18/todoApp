// document.addEventListener('DOMContentLoaded', function(){
//   console.log('Loaded')
//   list()
// })

function doSomething(){
  var addButton = document.querySelector('#addButton')
  addButton.addEventListener('click', function(event){

    console.log('added')
  })
}
 doSomething()

// function list(){
//   let todo = document.getElementbyId('todo').value
//   //Grabs value from input and creates text node
//   let newItem = document.createTextNode(todo)
//   //creates a new li element
//   let listTodo = document.createElement('li')
//   listTodo.appendChild(newItem)
//   document.getElementbyId('listOfItems').appendChild(newItem)
//   console.log("hello")
// }

// function saveListItem (item) {
//   localStorage.setItem('obj', item)
// }
//
// function renderListItem() {
//   let newTodo = localStorage.getItem('obj')
//   if (newTodo != null){
//     let newTask = document.querySelector('#listOfItems')
//     document.getElementbyId
//
//   } else {
//     console.log('No new task entered')
//   }
// }
