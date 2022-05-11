window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();

const loadAnime = $('#loading');
$(window).on('load', function () {
  loadAnime.delay(3500).fadeOut(1000);
});

function stopload(){
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 100000);

function fadeAnime() {

  $('.fadeInTrigger').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top;
      let winHeight = $(window).height();
        
      if (scroll >= triTop - winHeight) {
          $(this).addClass('fadeIn');
      }
      else {
          $(this).removeClass('fadeIn');
      }
  });

  $('.fadeUpTrigger').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top;
      let winHeight = $(window).height();
        
      if (scroll >= triTop - winHeight) {
          $(this).addClass('fadeUp');
      }
      else {
          $(this).removeClass('fadeUp');
      }
  });
  
  $('.flipRightTrigger').each(function () {
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top;
        let winHeight = $(window).height();
        
        if (scroll >= triTop - winHeight) {
            $(this).addClass('flipRight');
        }
        else {
            $(this).removeClass('flipRight');
        }
  });

  $('.slideLeftTrigger').each(function () {
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top;
        let winHeight = $(window).height();
        
        if (scroll >= triTop - winHeight) {
            $(this).addClass('slideLeft');
        }
        else {
            $(this).removeClass('slideLeft');
        }
  });
  $('.slideRightTrigger').each(function () {
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top;
        let winHeight = $(window).height();
        
        if (scroll >= triTop - winHeight) {
            $(this).addClass('slideRight');
        }
        else {
            $(this).removeClass('slideRight');
        }
  });
}

$(window).scroll(function () {
  fadeAnime();
});

$('.leftAnime').each(function () { 
  
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
      }
      else {
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
        
      }
});

$(function () {
  if (w > 769) {
} else {
  $(".drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header nav').fadeToggle(200);
    });
  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header nav').fadeToggle(200);
    });
  }
});

