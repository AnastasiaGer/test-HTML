const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')
let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handelBoxClick)

function startGame() {
  isGameStarted = true
  $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')
  const interval = setInterval(function () {
    let time = parseFloat($time.textContent)
    if (time <= 0) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)
    }
  }, 100)

  renderBox()
}

function endGame() {
  isGameStarted = false
}

function handelBoxClick(event) {
  if (!isGameStarted) {
    return
  }
  if (event.target.dataset.box) {
    score++
    renderBox()
  }
}

function renderBox() {
  $game.innerHTML = ''
  let box = document.createElement('div')
  const boxSize = getRandom(30, 100)
  const gameSize = $game.getBoundingClientRect()
  const maxTop = gameSize.height - boxSize
  const maxLeft = gameSize.width - boxSize

  box.style.height = box.style.width = boxSize + 'px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = getRandom(0, maxTop) + 'px'
  box.style.left = getRandom(0, maxLeft) + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
