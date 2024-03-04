const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

function handleTryClick(event) {
  event.preventDefault();

  toogleScreen()
}

function handleResetClick() {
  toogleScreen()
}

function toogleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
