$(window).scroll(function(){
  var ws = $(window).scrollTop();
  console.log(ws)

  $('#bg4').css({
    'transform': `translate(0px, -${ws / 1.2}px)`
  });

  $('#bg3').css({
    'transform': `translate(0px, -${ws /2}px)`
  });

  $('#bg2').css({
    'transform': `translate(0px, -${ws / 3.5}px)`
  });

  $('#bg1').css({
    'transform': `translate(0px, -${ws / 4}px)`
  });
});
