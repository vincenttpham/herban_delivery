/* global $ */


/* eslint-env jquery */

/* For the sticky navigation */
$('document').ready(function () {

  $('.js--features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });
});


/* Scroll on buttons */
$('.js--scroll-to-plans').click(function () {
  $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
});

$('.js--scroll-to-start').click(function () {
  $('html, body').animate({ scrollTop: $('.js--features').offset().top }, 1000);
});


/* Navigation scroll */
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

/* Animations script */
$('#features').waypoint(function (direction) {
  $('#features .span-1-of-4').addClass('animated fadeIn');
}, { offset: '50%' });

$('#cities').waypoint(function (direction) {
  $('#cities .span-1-of-4').addClass('animated fadeIn');
}, { offset: '50%' });

$('#works').waypoint(function (direction) {
  $('.app-iPhone img').addClass('animated slideInUp');
}, { offset: '50%' });

$('#plans').waypoint(function (direction) {
  $('.plan:first-of-type').addClass('animated pulse');
}, { offset: '50%' });