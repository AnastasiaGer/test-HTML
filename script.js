var a = [1, 2, 3]

var b = [5, 'hello', 6]

Array.prototype.double = function () {
  var newArray = this.map(function (item) {
    if (typeof item === 'number') {
      return item * item
    }

    if (typeof item === 'string') {
      return item += item
    }
  })
  return newArray
}

var newA = a.double()
var newB = b.double()

console.log(newA)
console.log(newB)
