
var carYear = 2000
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2020
  var result = currentYear - year
  return result
}

function checkAngLogAge(year, name, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
  } else {
    console.log('Возраст '  + name + ' больше ' + compareTo + ' лет')
  }
}

checkAngLogAge(carYear, 'машины', 8)
checkAngLogAge(personYear, 'человека', 40)


const fruits = ['mangoes', 'apples', 'bananas']
const b = fruits.pop();
console.log(b)
