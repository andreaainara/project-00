$(document).on('ready', function() {

  console.log('JS is loaded!');

  var playerOne = $('#player-one');
  var playerTwo = $('#player-two');

  $(window).on("keypress", function readySetGo(e) {
    if (e.keyCode === 97) {
      playerOne.animate({'left': '+=10px' }, 0);
    } else if (e.keyCode === 108) {
      playerTwo.animate({ 'left': '+=10px' }, 0);
    }

    if(playerOne.css('left') === '810px') {
        alert("player one wins!");
  } else if (playerTwo.css('left') === '810px') {
        alert("player two wins!");

}
  $('#reset').on("click" , function resetGame(e){
    playerOne.animate ({
      'left': '0px'
    }, 0);
    playerTwo.animate({
      'left': '0px'
    } ,0 );
  });
});
});
