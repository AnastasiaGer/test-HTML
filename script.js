// setTimeout(function() {
//   alert('Hello timeout')
// }, 2 * 1000)

var counter = 0

var interval = setInterval(function() {
  console.log(++counter)
}, 1000 * 2)

setTimeout(function() {
  clearInterval(interval)
}, 5 * 1000)

