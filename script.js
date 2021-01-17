document.querySelector('button').addEventListener('click', function(event) {
  const value = document.querySelector('input').value

  const obj = {
    text : value
  }
  localStorage.setItem('header', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', function() {
  let obj;
  try {
    obj = JSON.parse(localStorage.getItem('header'))
  } catch (e) {
    obj = {}
  }

  if (obj.text && obj.text.trim()) {
    document.querySelector('h1').textContent = obj.text
  }

})
