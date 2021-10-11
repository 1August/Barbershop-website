// All

$("#brick, #nav-logo, #nav-link-1, #nav-link-2, #nav-link-3, #nav-link-4, #nav-link-5").css('cursor', 'pointer');

////////////////////////////////////////////////////////////////

// Button on top

var btn = $('.btnTop');
btn.css('opacity', '70%');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 1000);
});

btn.hover(function() {
  btn.css('opacity', '100%');
}, function() {
  btn.css('opacity', '70%');
});

////////////////////////////////////////////////////////////////

// Scroll Reveal

ScrollReveal().reveal('.part1', { delay: 350, easing: 'ease-in' });
ScrollReveal().reveal('.part2', { delay: 350, easing: 'ease-in' });
ScrollReveal().reveal('.part3', { delay: 350, easing: 'ease-in' });
ScrollReveal().reveal('.part4', { delay: 350, easing: 'ease-in' });
ScrollReveal().reveal('.part5', { delay: 350, easing: 'ease-in' });

////////////////////////////////////////////////////////////////

// parts

$(".part1, .part2, .part3, .part4, .part5").css('opacity', '50%');
$(".part1, .part2, .part3, .part4, .part5").css('transition', 'all 0.5s linear');

$(".part1").hover(function() {
  $(".part1").css('opacity', '100%');
}, function() {
  $(".part1").css('opacity', '50%');
});

$(".part2").hover(function() {
  $(".part2").css('opacity', '100%');
}, function() {
  $(".part2").css('opacity', '50%');
});

$(".part3").hover(function() {
  $(".part3").css('opacity', '100%');
}, function() {
  $(".part3").css('opacity', '50%');
});

$(".part4").hover(function() {
  $(".part4").css('opacity', '100%');
}, function() {
  $(".part4").css('opacity', '50%');
});

$(".part5").hover(function() {
  $(".part5").css('opacity', '100%');
}, function() {
  $(".part5").css('opacity', '50%');
});

$("#part2").click(function() {
  $("html, body").animate({ scrollTop: $("#part3").offset().top }, 1000);
});

////////////////////////////////////////////////////////////////

// nav-link, nav-logo

$("#nav-logo").click(function() {
  $("html, body").animate({ scrollTop: $("#part1").offset().top }, 1000);
});

$("#nav-link-1").click(function() {
  $("html, body").animate({ scrollTop: $("#part2").offset().top }, 1000);
});

$("#nav-link-2").click(function() {
  $("html, body").animate({ scrollTop: $("#part3").offset().top }, 1000);
});

$("#nav-link-3").click(function() {
  $("html, body").animate({ scrollTop: $("#part4").offset().top }, 1000);
});

$("#nav-link-4").click(function() {
  $("html, body").animate({ scrollTop: $("#part5").offset().top }, 1000);
});

$("#bookApp").click(function() {
  $("html, body").animate({ scrollTop: $("#part5").offset().top }, 1000);
});

////////////////////////////////////////////////////////////////

// Brick

var brick = document.getElementById('brick');

brick.addEventListener('click', function() {
  $("html, body").animate({ scrollTop: $("#part5").offset().top }, 1000);
});

////////////////////////////////////////////////////////////////

// order button

$("#submit-btn").click(function () {
  document.getElementById('submit-btn').innerHTML = "Ordered!";
  setTimeout(function () {
    document.getElementById('submit-btn').innerHTML = "Order!";
  }, 2000);
  $("#submit-btn").css('opacity', '100%');
  $("#submit-btn").css('color', '#719274');
})

////////////////////////////////////////////////////////////////

// jQuery ready:
// window idth in device

jQuery(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  if ($(window).width() <= 1024) {
    $("h1").css('font-size', '4em');
    $(".nav .container").css('width', '100%');
  }

  if ($(window).width() <= 768) {
    $(".nav-link-1, .nav-link-2, .nav-link-3, .nav-link-4").css('padding-left', '1.5em');
    $(".nav-link-1, .nav-link-2, .nav-link-3, .nav-link-4").css('font-size', '0.8em');
    $("#part3 h4").css('font-size', '1.8em');
    $(".part4 ul").css('font-size', '1.2em');
    $(".footer a:not(.logo)").css('font-size', '1em');
    $(".footer ul").css('padding', '0 1rem');
  }

  if ($(window).width() <= 425) {
    $("*:not(.btnTop)").css('font-size', '100%');
    $("*:not(.btnTop)").css('width', '90%');
    $(".nav").css('font-size', '50%');
  }
});

////////////////////////////////////////////////////////////////

// footer

$(".footer .logo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$(".footer .logo").hover(function() {
  $(this).css('cursor', 'pointer');
}, function() {
  $(this).css('cursor', 'auto');
});

////////////////////////////////////////////////////////////////
