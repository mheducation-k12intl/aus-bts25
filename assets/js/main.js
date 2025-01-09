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
                navText: ["<img src='./assets/images/arrow-left.svg'>", "<img src='./assets/images/arrow-right.svg'>"],
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
                navText: ["<img src='./assets/images/arrow-left.svg'>", "<img src='./assets/images/arrow-right.svg'>"],

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
                navText: ["<img src='./assets/images/arrow-left.svg'>", "<img src='./assets/images/arrow-right.svg'>"],

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




      });
  
      $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('.bannerArea, .stickyNav').addClass('sticky')
        } else{
            $('.bannerArea, .stickyNav').removeClass('sticky')
        }
    });


}(jQuery));	