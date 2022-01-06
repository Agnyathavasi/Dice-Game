
function restart(){

var player_1 = Math.floor(Math.random()*6)+1;

var player_2 = Math.floor(Math.random()*6)+1;

document.getElementById('player1dice').src = ('dice-'+player_1+'.png');

document.getElementById('player2dice').src = ('dice-'+player_2+'.png');

if (player_1 > player_2) {
  document.getElementById('title').innerHTML = 'Player 1 wins!!!';
  document.getElementById('pl1').innerHTML = 'WINNER!!!!';
  document.getElementById('pl2').innerHTML = 'Player 2';
}

else {
  document.getElementById('title').innerHTML = 'Player 2 wins!!!';
  document.getElementById('pl2').innerHTML = 'WINNER!!!!';
  document.getElementById('pl1').innerHTML = 'Player 1';
}

}
