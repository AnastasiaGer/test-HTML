const loadButton = document.querySelector('#load').addEventListener('click', load)

function load() {
  var url = 'https://jsonplaceholder.typicode.com/users'
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      let ul = document.querySelector('#list')
      let html = data.map(function (item) {
        return `<li>${item.id}  ${item.name} '${item.email}'</li>`
      })

      ul.insertAdjacentHTML('afterbegin', html.join(' '))

    })
}
