$(document).on('ready', function() {

  console.log('JS is loaded!');

  $(window).on("keypress", function moveRight(e) {
    if (e.keycode === 97) {
      $('#player-one').animate({'left': '+=10px' }, 0);
    } else if (e.keycode === 108) {
      $('#player-two').animate({ 'left': '+=10px' }, 0);
    }
  });
});
