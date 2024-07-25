$(document).ready(function() {
  "use strict";

  if($(window).width() > 1199) {
    $('.what_slider_wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.what_slider_prev'),
      nextArrow: $('.what_slider_next')
    });
  }

  if($(window).width() > 1199) {
    $('.services_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.services_title_btns_prev'),
      nextArrow: $('.services_title_btns_next')
    });
  }

  if($(window).width() > 1199) {
    $('.result_slider_wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: $('.result_slider_prev'),
      nextArrow: $('.result_slider_next')
    });
  }

  $('.marketing_slider').slick({
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $('.marketing_prev'),
    nextArrow: $('.marketing_next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          fade: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          fade: true
        }
      }
    ]
  });
    
});