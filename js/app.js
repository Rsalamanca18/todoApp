// document.addEventListener('DOMContentLoaded', function(){
//
// })

function doSomething(){
  var addButton = document.querySelector('#addButton')
  addButton.addEventListener('click', function(event){

    console.log(itemArray)
  })
}
 doSomething()


//input value will be pushed into this array
var itemArray = []

function addToList(){
  //grabs value from input
  var task = document.querySelector('#todo').value
  //grabs the unordered list
  var ul = document.querySelector('#listOfItems')
  //creates a new list item
  var li = document.createElement('li')
  //if value is not null, push the value into the array
  if (task != null){
    // li.textContent = task
    itemArray.push(task).value
    console.log(itemArray)
  }


}

// function saveListItem (item) {
//   localStorage.setItem('task', item)
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
