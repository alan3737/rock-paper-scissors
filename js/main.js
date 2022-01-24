function computerPlay() {
    const val = Math.floor(Math.random() * 3)
    switch(val) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function play(playerSel, computerSel) {
    playerSel = playerSel.toLowerCase();
    if (playerSel === computerSel) {
        return "It's tie"
    }
    switch (true) {
        case playerSel === 'rock' && computerSel === 'scissors':
            return `You Win! ${playerSel} beats ${computerSel}`
        case playerSel === 'paper' && computerSel == 'rock':
            return `You Win! ${playerSel} beats ${computerSel}`
        case playerSel === 'scissors' && computerSel === 'paper':
            return `You Win! ${playerSel} beats ${computerSel}`
        default:
            return `You Lose! ${computerSel} beats ${playerSel}`
    }

}

function game() {
    let p_s = 0
    let c_s = 0
    for (let i = 0; i < 2; i++) {
        let result = play(prompt("choose"), computerPlay()).slice(0, 7)
        if (result === 'You Win') {
            p_s++
        } else if(result ==="It's a ti"){
            continue
        } else {
           c_s++ 
        }
    }
    if(p_s === c_s) {
        console.log("It's a Tie")
    } else if(p_s > c_s) {
        console.log("You win!") 
    } else {
        console.log("You lose!")
    }
}

