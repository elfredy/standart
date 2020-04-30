$(document).ready(function () {

  var owl = $('.owl-carousel1');
  owl.owlCarousel({
    loop: false,
    autoplay: false,
    margin: 20,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true
      },
      600: {
        items: 3,
        nav: false,
        loop: true
      },

      1000: {
        items: 5,
        nav: false,
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


  $('#open1').click(function (event) {
    $("#Search").fadeIn("slow");
  });

  $('#open2').click(function (event) {
    $("#Search").fadeIn("slow");
  });

  $('#close').click(function (event) {
    $("#Search").fadeOut("slow");
  });




  $("*").click(function (event) {
    if (!$(event.target).is("#Search")) {
      console.log('içeri')

    } else {
      $("#Search").fadeOut("slow");

    }
  });

});


const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

$(document).ready(function () {
  $(window).bind('scroll', function () {
    var navHeight = $(window).height() - 600;
    if ($(window).scrollTop() > navHeight) {
      $('.navFix').addClass('affix');
      $('.navbar-brand').addClass('navLogo');
      $('.nav__toggle').addClass('navButton');
      $('.nav-1').addClass('navLeft');
      $('.header').addClass('headerFix');

    }
    else {
      $('.navFix').removeClass('affix');
      $('.navbar-brand').removeClass('navLogo');
      $('.nav__toggle').removeClass('navButton');
      $('.nav-1').removeClass('navLeft');
      $('.header').removeClass('headerFix');
    }
  });
});

$(document).ready(function () {

  $(".linkImg").mouseenter(function () {
    console.log($(this).data('hover'))
    $(this).attr('src', $(this).data('hover'));
  });
  $(".linkImg").mouseleave(function () {
    console.log($(this).data('normal'))
    $(this).attr('src', $(this).data('normal'));
  });

  $('.datepicker').datepicker();

});

$(document).ready(function () {
  var owl1 = $('.owl-carousel2');
  owl1.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1
  });
});

$(document).ready(function(){
  function resize(){

    var footer_height=$('footer').innerHeight(),
    
    header_height=$('header').innerHeight(),
    plus_height=footer_height + header_height,
    window_height=$(window).innerHeight(),
    body_height=$('body').innerHeight(),
    new_height= window_height - plus_height;
    
    
    if($('section').innerHeight() < window_height)
    {
    $('section').css({
    
    'min-height':new_height
    
    })
    }
    
    
    console.log(footer_height)
    
    // console.log(header_height)

    // console.log(plus_height)

    
    
    
    
    
    
    
    
    }
    
    resize()
});