// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'

console.log(a.attributes)


const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')

box1.classList.add('red')

box2.classList.add('blue')
