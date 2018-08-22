document.addEventListener('DOMContentLoaded', function(){
  renderName()

  document.getElementById('userForm').addEventListener('submit', function(event){
    event.preventDefault()

    let input = document.getElementById('name')
      setName(input.value)
      renderName()
  })
})

function setName(name) {
  localStorage.setItem('obj', name)
}

function renderName() {
  let inputName = localStorage.getItem('obj')
  if (inputName != null){
    let welcome = document.getElementById('userName')
    welcome.innerHTML = inputName
  } else {
    console.log('No Name entered')
  }
}
