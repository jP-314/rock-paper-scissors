function getComputerChoice() {
    const n = Math.floor(Math.random() * 3)
    switch (n) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice() {
    const choice = prompt('Rock, paper or scissors?').trim().toLowerCase()
    return choice
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper')
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else if (computerChoice === 'rock' && humanChoice === 'scissors'
            || computerChoice === 'paper' && humanChoice === 'rock'
            || computerChoice === 'scissors' && humanChoice === 'paper')
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        } else {
            console.log('Draw!')
        }
    }

    let humanScore = 0, computerScore = 0
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log('Game over. You win!')
    }

    if (computerScore < humanScore) {
        console.log('Game over. You lose!')
    }

    if (computerScore == humanScore) {
        console.log('Game over. Draw!')
    }
}

playGame()