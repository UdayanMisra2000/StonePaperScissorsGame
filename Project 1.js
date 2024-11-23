function rulesOnfun(){
    const rulesContainer = document.getElementById('rulesContainer');
    rulesContainer.style.display = 'block';
}

function rulesOfffun(){
    const rulesContainer = document.getElementById('rulesContainer');
    rulesContainer.style.display = 'none';
}
function game(playerChoice){
    const handsDisplay = document.getElementById('Hands');
    const gameResultdisplay = document.getElementById('gameResult');
    const animationDisplay = document.getElementById('animation');
    const playerSec = document.getElementById('playerChoice');
    const compSec = document.getElementById('compChoice');
    const resultSec = document.getElementById('result');
    gameResultdisplay.style.display = 'flex';
    handsDisplay.style.display = 'none';
    const choice = ['stone','paper','scissors'];
    const ringColor = {
        stone:'rgba(0, 116, 182, 1)',
        paper: 'rgba(255, 169, 67, 1)',
        scissors: 'rgba(189, 0, 255, 1)'
    };
    let compChoice = choice[Math.floor(Math.random()*3)];
    console.log(`Your choice is ${playerChoice} and comp choice is ${compChoice}`);
    cloneAppend(playerChoice,playerSec,ringColor[playerChoice]);
    cloneAppend(compChoice, compSec,ringColor[compChoice]);
    const result = document.createElement('div');
    result.id = 'resultDisplay';
    if(playerChoice === compChoice) {
        console.log(`It's a tie`);
        animationDisplay.style.display = 'none';
        result.innerHTML = `<h1> TIE UP </h1>`;
        result.style.color = 'white';
        result.style.marginBottom = '2rem';
        resultSec.prepend(result);
    }
    else if((playerChoice==='stone' && compChoice==='scissors') || (playerChoice==='paper' && compChoice==='stone') || (playerChoice==='scissors' && compChoice==='paper')) {
        console.log(`You win!!`);
        playerSec.appendChild(animationDisplay);
        animationDisplay.style.display = 'block';
        let scoreUser = document.getElementById('scoreUser');
        scoreUser.textContent = parseInt(scoreUser.textContent)+1;
        sessionStorage.setItem('userScore',scoreUser.textContent);
        result.innerHTML = `<h1> YOU WIN </h1><br><h2>AGAINST PC</h2>`;
        result.style.color = 'white';
        result.style.marginBottom = '2rem';
        resultSec.prepend(result);
        const next = document.getElementById('next');
        next.style.display = 'block'; 
    }
    else {
        console.log(`You Lose`);
        compSec.appendChild(animationDisplay);
        animationDisplay.style.display = 'block';
        let compScore = document.getElementById('scoreComp');
        compScore.textContent = parseInt(compScore.textContent) +1;
        sessionStorage.setItem('compScore',scoreUser.textContent);
        result.innerHTML = `<h1> YOU LOST </h1><br><h2>AGAINST PC</h2>`;
        result.style.color = 'white';
        result.style.marginBottom = '2rem';
        resultSec.prepend(result);
    }

}
window.onload = function(){
    let userScore = sessionStorage.getItem('userScore');
    let compScore = sessionStorage.getItem('compScore');
    if(userScore){
        document.getElementById('scoreUser').textContent = userScore;
    }
    if(compScore){
        document.getElementById('scoreComp').textContent = compScore;
    }
}
const cloneAppend = (Choice,Section,ringColor)=>{
    const userHand = document.createElement('div');
    userHand.className = 'handResult';
    userHand.innerHTML = `<img src="./Images/${Choice}.png" alt="${Choice}">`;
    const img = userHand.querySelector('img');
    img.style.height = '4rem';
    userHand.style.height = '8rem';
    userHand.style.width = '8rem';
    userHand.style.backgroundColor = 'white';
    userHand.style.borderRadius = '50%';
    userHand.style.padding = '1rem';
    userHand.style.position = 'relative';
    userHand.style.display = 'inline-block';
    userHand.style.margin = '2rem';
    userHand.style.zIndex = '1';
    userHand.style.border = `solid 18px ${ringColor}`;
    Section.append(userHand);
}
function playAgain(){
    const gameResultdisplay = document.getElementById('gameResult');
    gameResultdisplay.style.display = 'none';
    const handsDisplay = document.getElementById('Hands');
    handsDisplay.style.display = 'block';
    const handResults = document.getElementsByClassName('handResult');
    const handResultsArray = Array.from(handResults);
    handResultsArray.forEach(element => element.remove());
    const Resultdisplay = document.getElementById('resultDisplay');
    Resultdisplay.remove();
    const next = document.getElementById('next');
    next.style.display = 'none';
    const trophyDisplay = document.getElementById('trophyDisplay');
    trophyDisplay.style.display = 'none';
    const trophyVanish = document.getElementById('trophy');
    trophyVanish.style.display='block';
}
function nextfun(){
    const next = document.getElementById('next');
    next.style.display = 'none';
    const trophyVanish = document.getElementById('trophy');
    trophyVanish.style.display='none';
    trophyDisplay.style.display = 'flex';
}