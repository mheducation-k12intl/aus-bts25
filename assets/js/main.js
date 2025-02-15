(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
          
    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.onboardingSlide').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                dots: true,
                autoplay: false,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ["<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-left.svg'>", "<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-right.svg'>"],
            });
        }

    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.schoolSlide').owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                dots: true,
                autoplay: false,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ["<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-left.svg'>", "<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-right.svg'>"],

                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        margin: 10
                    },
                    768: {
                        items: 2,
                        margin: 20,
                    },
                    1200: {
                        items: 3
                    }
                }

            });
        }

    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.librarySlide').owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                dots: true,
                autoplay: false,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ["<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-left.svg'>", "<img src='https://mheducation-k12intl.github.io/aus-bts25/assets/images/arrow-right.svg'>"],

                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        margin: 10
                    },
                    768: {
                        items: 2,
                        margin: 20,
                    },
                    1200: {
                        items: 3
                    },
                }

            });
        }

        /*====  responsive menu js active =====*/
        if ($.fn.slicknav) {
            $('.mainMenu ul.resMenu').slicknav({
                prependTo: ".responsive_menu",
                label: ""
            })
        }

        $('.clickme').click(function () {
			$('html, body').animate({
              scrollTop: $("#tabArea").offset().top -120
          	}, 700);
			
            $('.nav .nav-link').removeClass('active');
            $('.nav .nav1').addClass('active');
        });

		$('.clickme2').click(function () {
			$('html, body').animate({
              scrollTop: $("#tabArea").offset().top -120
          	}, 700);
			
            $('.nav .nav-link').removeClass('active');
            $('.nav .nav2').addClass('active');
        });

		$('.clickme3').click(function () {
			$('html, body').animate({
              scrollTop: $("#tabArea").offset().top -120
          	}, 700);
			
            $('.nav .nav-link').removeClass('active');
            $('.nav .nav3').addClass('active');
        });

		$('.clickme4').click(function () {
			$('html, body').animate({
              scrollTop: $("#tabArea").offset().top -120
          	}, 700);
			
            $('.nav .nav-link').removeClass('active');
            $('.nav .nav4').addClass('active');
        });

        
        $('a[href^="#onboarding"], a[href^="#development"], a[href^="#school"], a[href^="#clinic"], a[href^="#library"]').on('click',function (e) {
          e.preventDefault();
          var target = this.hash;
          var $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top -120
          }, 400, 'swing', function () {
          });
      });


      });
  
      $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('.bannerArea, .stickyNav').addClass('sticky')
        } else{
            $('.bannerArea, .stickyNav').removeClass('sticky')
        }
    });


}(jQuery));
