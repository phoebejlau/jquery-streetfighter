$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-still').show()
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide()
    $('.ryu-throwing').show()
    $('.hadouken').finish().show()
    .animate(
      {'left': '1020'},
      500,
      function() {
        $('.hadouken').hide();
        $('.hadouken').css('left', '520px');
      });  
  })
  .mouseup(function() {
    // ryu goes back to his ready position
    $('.ryu-throwing').hide()
    $('.ryu-ready').show()
  })

  $(document).keydown(function(key) {
    if(event.which == 88);
    $(".ryu-ready").hide()
    $(".ryu-cool").show()
  });
  $(document).keyup(function(key) {
    if(event.which == 88);
    $(".ryu-cool").hide()
    $(".ryu-ready").show()
  })
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();

}