$(document).ready(function(){

    $('.js--features-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    //Scroll on buttons
    $('.scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.pricing').offset().top}, 1000);
    });

    $('.scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--features-section').offset().top}, 1000);
    });


    //Animations on scroll
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn') 
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeIn') 
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated pulse') 
    }, {
        offset: '50%'
    });

    // Toggle

    $('.toggle-icon').click(function() {
        var nav = $('.nav-items');

        nav.slideToggle(200);
    });
});
