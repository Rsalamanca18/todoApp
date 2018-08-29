//items stored in this array
var itemArray = []

document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#listForm')
  form.addEventListener('submit', function(event){
    event.preventDefault()

    var newListItem = document.querySelector('#todo')
    if (newListItem.value){
      itemArray.push(newListItem.value)
    }

    renderListItems()
    clearAll()
    checked()
  })
})

//function for rendering list items
function renderListItems(){

  var newListItem = document.querySelector('#todo')
  //resets input after submission
  newListItem.value = ''


  var lis = document.querySelectorAll('ul li')

  //removes previous entries to avoid duplicates
  lis.forEach(function (li){
    li.remove()
  })

  //grabs and prepends items. renders to DOM
  itemArray.forEach(function(item){
    var ul = document.querySelector('#listOfItems')
    var li = document.createElement('li')



    li.textContent = item
    ul.prepend(li)

    //clears console
    console.clear()
    //shows list items onto console
    console.log("List of things to do: " + itemArray)

  })

  //trying to add spans in the 'li's
  li.forEach(function(){
    var span = document.createElement('span')
    // span.innerHTML('<i class="fas fa-trash"></i>')
    li.innerHTML = '<span><i class="fas fa-trash"></i></span>'
  })
}



function checked (){
  var listItem = document.querySelector('li')
  listItem.addEventListener('click', function(){
    listItem.className = 'complete'
    console.log('clicked')
  })
}
