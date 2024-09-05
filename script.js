let computerscore = 0
let playerscore = 0
let Result = document.querySelector('#result')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissor = document.querySelector('#scissors')

function game(Player) {
  let a = ['rock', 'paper', 'scissor']
  let computerchoice = a[Math.floor(Math.random() * 3)]

  if (Player == computerchoice) {
    Result.innerHTML = `Tie this game! You chose ${Player} and computer chose ${computerchoice}.`
  } else if (
    (Player == 'rock' && computerchoice == 'scissor') ||
    (Player == 'paper' && computerchoice == 'rock') ||
    (Player == 'scissor' && computerchoice == 'paper')
  ) {
    playerscore++
    Result.innerHTML = `You win! You chose ${Player} and computer chose ${computerchoice}.`
  } else {
    computerscore++
    Result.innerHTML = `Computer wins! Computer chose ${computerchoice} and you chose ${Player}.`
  }

  updateScores()
}

function updateScores() {
  document.getElementById('computerscore').innerHTML = `${computerscore}`
  document.getElementById('playerscore').innerHTML = ` ${playerscore}`
}
