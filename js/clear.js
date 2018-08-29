
//handy to clear all list items at once
function clearAll(){

  //selects clear all tasks btn
  var btnClear = document.querySelector('#btnClear')

  //adds function for click
  btnClear.onclick = function(){

    //selects hidden div
    var div = document.querySelector('#confirm')

    //removes 'hidden' class and replaces with alert(visible)
    div.className = 'alert alert-danger'
    // div.id = 'alertBox'
    div.innerHTML = 'Are you sure you want to delete all items?'

    var btnCancel = document.querySelector('#btnCancel')
    btnCancel.className = 'btn btn-success'

    //hides clear all task button
    btnClear.className = "d-none"

    //calls the confirm delete button
    deleteList()
  }
}

//confirm delete function
function deleteList(){

  //selects the delete button
  var deleteBtn = document.querySelector('#btnDelete')
  deleteBtn.className = 'btn btn-danger'

  //this clears the entire array and the list
  deleteBtn.onclick = function(){
    var ul = document.querySelector('#listOfItems')
    ul.innerHTML = '';
    itemArray = [];

    var div = document.querySelector('#confirm')
    div.className = 'd-none'

    console.log('list was deleted')

    reset()
  }
}

function reset(){
  //resets clear button
  var btnClear = document.querySelector('#btnClear')
  btnClear.className = 'btn btn-warning justify-content-center'

  //hides the delete button
  var deleteBtn = document.querySelector('#btnDelete')
  deleteBtn.className = 'd-none'

  //hides warning box
  var div = document.querySelector('#confirm')
  div.className = 'd-none'

  //removes no button
  var btnCancel = document.querySelector('#btnCancel')
  btnCancel.className = 'd-none'
}
