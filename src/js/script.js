$(document).ready(function(){
  new WOW().init();
});
// If the user has disabled javascript support in his browser this code not working
$(document).ready(function(){

  $('#navbar').removeClass('navbar--no-js');
  // Slider remove hidden class
  $('.slider--hidden').removeClass('slider--hidden').addClass('slider--active');
  // Header for mobile togle burger button
  $('.mobile-header').removeClass('mobile-header').addClass('mobile-header--hidden');
  // Portfolio controls remove hidden class
  $('.controls--hidden-desctop.noJS').removeClass('noJS');
  $('.portfolio--hidden').removeClass('portfolio--hidden');
  // CONTACT section remove hidden class
  $('#contact').removeClass('offJS');
  // Map section remove hidden class
  $('#footerMap').removeClass('offJS');

  function startOptions(){
    if ( $(window).width() < 768 ) {
      $('input[type="checkbox"]').css({'display': 'none'});
      $('label[for="nav-trigger"]').css({'display': 'none'});
      $('a.navbar__button-burger').css({'display': 'block'});
    } else if ( $(window).width() > 768 && $(window).width() < 795 ){
      $('input[type="checkbox"]').css({'display': 'none'});
      $('label[for="nav-trigger"]').css({'display': 'none'});
      $('a.navbar__button-burger').css({'display': 'none'});
    } else {
      $('input[type="checkbox"]').css({'display': 'none'});
      $('label[for="nav-trigger"]').css({'display': 'none'});
      $('a.navbar__button-burger').css({'display': 'none'});
    }
  }

  // Start options when user do something
  $(window).resize(function() {
    startOptions();
  });
  startOptions();
});



// Slider header
$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		autoplay:true,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
		stagePadding: 0
	});
});

// Menu site
$(document).ready(function(){

  // Variables. Must be after the removal of the class, otherwise the height will be set from the fixed menu at the top of the page
  var heightMenu = $('#navbar').height();
  var winHeight = $(window).height();
  // Sticky menu when scrolling
  function stikyMenu () {
    var scrollTop = $(window).scrollTop();
    $('header.page-header').css({
      'top': winHeight - 80
    });
    if ( scrollTop < winHeight && $(window).width() > 768 ){
      $('header.page-header').css({
        'top': winHeight - scrollTop - 60
      });
    } else if (scrollTop > winHeight && $(window).width() > 768 ){
      $('header.page-header').css({
        'top': 0
      });
    }
    if ( scrollTop < winHeight && $(window).width() > 992 ){
      $('header.page-header').css({
        'top': winHeight - scrollTop - 60
      });
    } else if (scrollTop > winHeight && $(window).width() > 992 ){
      $('header.page-header').css({
        'top': 0
      });
    } else if ( $(window).width() < 768 ){
      $('header.page-header').css({
        'top': 0
      });
      $('.slider--active').removeClass('slider--active').addClass('slider--hidden');
      $('.mobile-header--hidden').removeClass('mobile-header--hidden').addClass('mobile-header');
    }
  }

  // Smooth scrolling of anchor links and toggle active class
  $('#navbar').on("click","a", function (event) {
		event.preventDefault();
    $('#navbar a.active').removeClass('active');
		var i = $(this).addClass('active');
		var id  = $(this).attr('href'),
			  top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
    $('.navbar__menu-items.navbar__menu-items--collapse').removeClass('active');
    $('a.navbar__button-burger--active').removeClass('navbar__button-burger--active').addClass('navbar__button-burger');
  });

  // Add active class for menu burger click and slidedown venu list
	$('a.navbar__button-burger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('navbar__button-burger--active');
		$('.navbar__menu-items.navbar__menu-items--collapse').toggleClass('active');
		$('.bottom-row').slideToggle();
	});

  // Start position menu
  $(window).scroll(
    function () { stikyMenu (); }
  );
  stikyMenu ();
});

// About section - progress
$(document).ready(function(){
  var target = $('#counter');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;

  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem + 200){ counter (); }
  });

  function counter (){
    $('#num-one span:first-child').animate({ num: 7533 - 10}, { duration: 3000,
      step: function (num){ this.innerHTML = (num + 10).toFixed(0); }
    });
    $('#num-two span:first-child').animate({ num: 4222 - 10}, { duration: 3000,
      step: function (num){ this.innerHTML = (num + 10).toFixed(0); }
    });
    $('#num-three span:first-child').animate({ num: 6980 - 10}, { duration: 3000,
      step: function (num){ this.innerHTML = (num + 10).toFixed(0); }
    });
    $('#num-four span:first-child').animate({ num: 100 - 10}, { duration: 3000,
      step: function (num){ this.innerHTML = (num + 10).toFixed(0); }
    });
  }
});

// Portfolio script restiling
$(document).ready(function(){
  var $data = $(".portfolio-area").clone();

  $('.portfolio-categ li').click(function(e) {
    e.preventDefault(); // remove standart link work

    $(".filter li").removeClass("active");

    var filterClass = $(this).attr('class');
    var $filteredData = '';
    if(filterClass == 'all') {
      $filteredData = $data.find('.all');
    } else {
      $filteredData = $data.find('.all[data-type=' + filterClass + ']');
    }
    $(".portfolio-area").quicksand($filteredData, {
      duration: 600,
      adjustHeight: 'auto'
    });

    $(this).addClass("active");
    return false;
  });

  $( function() {
    $( '#cd-dropdown' ).dropdown( {
      gutter : 4,
      stack : false,
      delay : 100,
      slidingIn : 100
     });
  });

});

// Map section
$(document).ready(function(){
  var mapTitleHeight = $('.title-map').outerHeight() - 5;
  $('.map-section iframe').css({'height': mapTitleHeight});
  $('.title-map').click(function(e){
    e.preventDefault();
    $('.footer__button').toggleClass('footer__button--active');
    $('.map-section iframe').css({'height': mapTitleHeight});
    $('.map-section').toggleClass('map-section--active');
    $('.map-section.map-section--active iframe').css({'height': 600});
  });
});
