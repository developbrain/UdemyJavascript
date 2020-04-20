/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer, dice, playOn;
//Initilize Game
init();

document.querySelector('.btn-roll').addEventListener("click", function(){
    if(playOn)
    {
        //Genearte Dice Number
        let dice = Math.floor(Math.random()*6)+1;
        //Get The Current Value
        let currentActiveVal = document.getElementById('current-'+activePlayer).innerText;
        //Set Dice Image
        document.querySelector('.dice').style.display = 'block';
        //document.getElementById("myImg").src = "hackanm.gif";
        document.querySelector('.dice').attributes['src'].value = 'dice-'+dice+'.png';
        //If Dice Value is 1
        if(dice === 1)
        {
            //Set currentActiveVal to 0 and change Active Player
            roundScore = 0;
            document.getElementById('current-'+activePlayer).innerText = roundScore;
            //let styleVal = document.querySelector('.player-'+activePlayer+'-panel').style;
            //console.log(styleVal);
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activePlayer = (activePlayer === 0) ? 1 : 0;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        }
        else
        {
            //Set currentActiveVal
            roundScore = parseInt(currentActiveVal)+parseInt(dice);
            document.getElementById('current-'+activePlayer).innerText = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener("click", function(){
    if(playOn)
    {
        setScore();
        if(score[activePlayer] < 20)
        {
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            activePlayer = (activePlayer === 0) ? 1 : 0;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        }
        else
        {
            playOn = false;
            document.getElementById('name-'+activePlayer).innerText = 'Winner !';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
        }
    }
});

function setScore()
{
    score[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).innerText = score[activePlayer];
    document.getElementById('current-'+activePlayer).innerText = 0;
}

document.querySelector('.btn-new').addEventListener("click", init);

function init()
{
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').innerText = 0;
    document.getElementById('score-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;
    document.getElementById('score-1').innerText = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').innerText = 'Player 1';
    document.getElementById('name-1').innerText = 'Player 2';
    //Set Active Player to Player 1 
    document.querySelector('.player-0-panel').classList.add('active');
    playOn = true;
}