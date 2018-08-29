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

    // var todoText = document.querySelector('#todo').value
  	// if (todoText != null && todoText != ''){
    // 	var ul = document.querySelector('ul')
    // 	var li = document.createElement('li')
    //
    // 	li.innerHTML = '<span><i class="fa fa-trash-alt"></i></span>' + todoText
    // 	ul.prepend(li)
    //
    //   todoText = ''
    //   console.clear()
    //
	  // }

    renderListItems()
    clearAll()
    // checked()
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
    li.innerHTML = '<span class="trash"><i class="fa fa-trash-alt"></i></span>' + item
    // li.textContent = item
    ul.prepend(li)

    //clears console
    console.clear()
    //shows list items onto console
    console.log("List of things to do: " + itemArray)

  })
}



// function checked (){
//   var listItem = document.querySelectorAll('li')
//   listItem.addEventListener('click', function(){
//     // .className = 'complete'
//     console.log('clicked')
//   })
// }
