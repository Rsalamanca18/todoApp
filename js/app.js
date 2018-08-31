//items stored in this array
var itemArray = []

document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#listForm')
  form.addEventListener('submit', function(event){
    event.preventDefault()

    //grabs the input element
    var newListItem = document.querySelector('#todo')
    //asks if there is a value in input
    if (newListItem.value){
      //if there is, then we push it into array
      itemArray.push(newListItem.value)
    }

    renderListItems()
    clearAll()
    taskDone()
  })
})

//function for rendering list items
//disabled for now
function renderListItems(){

  //grabs input element
  var newListItem = document.querySelector('#todo')

  //resets input after submission
  newListItem.value = ''

  //grabs list item elements
  var lis = document.querySelectorAll('ul li')

  //removes previous entries to avoid duplicate prints
  lis.forEach(function (li){
    li.remove()
  })

  //grabs and prepends items. renders to DOM
  itemArray.forEach(function(item){
    var ul = document.querySelector('#listOfItems')
    var li = document.createElement('li')

    //item is the item in array
    //adds to li element and to beginning of list
    li.innerHTML = '<span class="check"><i class="fa fa-check"></i></span>' + item
    // li.textContent = item
    ul.prepend(li)

    // var items = document.querySelectorAll('#listOfItems span')
    // for (var i = 0; i < items.length; i++){
    //   items[i].onclick = function(){
    //     // liIndex = itemArray.indexOf(this.innerHTML)
    //     var removeLi = this.parentNode
    //     removeLi.remove()
    //     console.log(this.parentNode)
    //   }
    // }

    //clears console
    console.clear()
    //shows list items onto console
    console.log("List of things to do: " + itemArray)

  })
}
