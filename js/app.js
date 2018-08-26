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
  })
})

function renderListItems(){

  var newListItem = document.querySelector('#todo')
  newListItem.value = ''

  var lis = document.querySelectorAll('ul li')

  lis.forEach(function (li){
    li.remove()
  })

  itemArray.forEach(function(color){
    var ul = document.querySelector('#listOfItems')
    var li = document.createElement('li')

    li.textContent = color
    ul.prepend(li)
    console.log(itemArray)
  })
}

// function saveListItem (item) {
//   localStorage.setItem('task', item)
// }
