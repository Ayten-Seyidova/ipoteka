(function ($) {
	'use strict';
	$(".navbar-form").hide()
	// Preloader JS
	$(function () {
		$('body').addClass('loaded');
	});

	function AddZero(num) {
        return num >= 0 && num < 10 ? "0" + num : num + "";
    }

    function getTime() {
        var now = new Date();
        var strDateTime = [
            [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),
        ];
        document.getElementById("time").innerHTML = strDateTime;
    }

    getTime();

    setInterval(() => {
        getTime();
    }, 1000);

	// Go To Top JS
	// Scroll Event
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	// Click Event JS
	$('.go-top').on('click', function () {
		$("html, body").animate({ scrollTop: "0" }, 100);
	});

	// Owl-Carousel JS

	$('.owl-carousel1').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4,
			}
		}
	})

	$('.owl-carousel2').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		nav: false,
		responsive: {
			0: {
				items: 2,
			},
			400: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	})
})(jQuery);
