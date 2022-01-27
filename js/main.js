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
        return "It's a tie"
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

function game(e) {
    let p_s = document.querySelector(".player .scr");
    let c_s = document.querySelector(".computer .scr");
    
    let result = play(this.id , computerPlay()).slice(0, 5)
    console.log(result);
    if (result === 'You W') {
        p_s.textContent = +p_s.textContent + 1;
    } else if(result ==="You L"){
        c_s.textContent = +c_s.textContent + 1;
    } else {
        p_s.textContent = +p_s.textContent + 1;
        c_s.textContent = +c_s.textContent + 1;
    }
    if (+p_s.textContent >= 5 || +c_s.textContent >= 5) {
        const winner = document.querySelector(".title")
        if(p_s.textContent === c_s.textContent) {
            winner.textContent = "It's a Tie";
        } else if(p_s.textContent > c_s.textContent) {
            winner.textContent = "You Win!";
        } else {
            winner.textContent = "You Lose!";
        }
        const rm_choice = document.querySelectorAll(".move")
        rm_choice.forEach(rm => rm.removeEventListener("click", game))
    }

}



const choices = document.querySelectorAll(".move");
choices.forEach(choice => choice.addEventListener("click", game))
