const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const modc = document.querySelector('.modal-content');
const scoreboard = {
    player: 0,
    computer: 0
};


function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const outcome = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice);
    console.log(outcome);
    updateScore(outcome, computerChoice);
}

function clearModal(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;
}

choices.forEach(choice => {
    choice.addEventListener('click', play);
});
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

function getComputerChoice() {

    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand > 0.66) {
        return 'scissors';
    }
    else return 'paper';
}

function getWinner(p,c) {
    if (p===c) {
        return 0 
    } else if (p==='rock') {
        if (c==='paper') {
            return -1;
        } else return 1;
    } else if (p==='paper') {
        if (c==='scissors') {
            return -1;
        } else return 1;
    }
    else if (p==='scissors') {
        if (c==='rock') {
            return -1;
        } else return 1;
    }
    
}

function updateScore(result, c) {
    if (result === -1) {
        scoreboard.computer++;
        modc.innerHTML = `<h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>Computer chose ${c}</p>`;
    } else if (result === 1) {
        scoreboard.player++;
        modc.innerHTML = `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>Computer chose ${c}</p>`;
    } else {
        modc.innerHTML = `<h1>Draw</h1>
        <i class="fas fa-hand-${c} fa-10x"></i>
        <p>Computer chose ${c}</p>
        <button onclick="document.querySelector('.modal').style.display = 'none';">Clear</button>`;
    }
    score.innerHTML = `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}