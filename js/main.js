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

  const inViewport = (elem) => {
    let allElements = document.getElementsByClassName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            let top = viewportOffset.top;  //  get the offset top
            if(top < windowHeight) {
                allElements[i].classList.add('animation');  //  add the class
            } else{
                allElements[i].classList.remove('in-viewport');  //  remove the class
            }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
}

inViewport("anime");


const newViewport = (elem) => {
    if ($(window).width() > 767) {
        let allElements = document.getElementsByClassName(elem);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {
                let viewportOffset = allElements[i].getBoundingClientRect();
                let top = viewportOffset.top + 400;
                if(top < windowHeight) {
                    console.log(allElements[i]);
                    allElements[i].classList.add('inviewport');
                } else{
                    allElements[i].classList.remove('in-viewport'); 
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    } else {
        let allElements = document.getElementsByClassName(elem);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {
                let viewportOffset = allElements[i].getBoundingClientRect();
                let top = viewportOffset.top;
                if(top < windowHeight) {
                    console.log(allElements[i]);
                    allElements[i].classList.add('inviewport');
                } else{
                    allElements[i].classList.remove('in-viewport'); 
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    }
}

newViewport("viewport");
    
});