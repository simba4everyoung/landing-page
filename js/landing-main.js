(function (document) {
    var container = document.querySelector('#icon-container');

    if (container) {
    
        container.innerHTML = "<svg style=\"display: none;\" viewBox=\"0 0 500 500\" x=\"0px\" y=\"0px\"><symbol viewBox=\"0 0 446.3 756.3\" id=\"icon-arrow-left\"> <path d=\"M434.9,57.7L82.8,378.1l352.1,320.5c14,12.7,15.3,33.9,2.8,47.3c-12.5,13.4-33.8,13.9-47.8,1.2L16.5,407.3\r\n\tc-2.9-1.6-5.6-3.7-8-6.2c-6-6.4-8.8-14.7-8.5-22.9c-0.2-8.2,2.6-16.5,8.6-22.9c2.4-2.5,5.1-4.6,8-6.2L389.9,9.2\r\n\tc14-12.7,35.4-12.2,47.9,1.2C450.2,23.8,448.9,45,434.9,57.7L434.9,57.7z\"/> </symbol><symbol viewBox=\"0 0 100 100\" id=\"icon-close\"> <path d=\"M100,82.5L82.5,100L50,67.5L17.5,100L0,82.5L32.5,50L0,17.5L17.5,0L50,32.5L82.5,0L100,17.5L67.5,50L100,82.5z\"/> </symbol><symbol viewBox=\"0 0 332 332\" id=\"icon-cross\"> <path d=\"M332,166C332,74.2,257.7,0,166,0C74.2,0,0,74.3,0,166c0,91.8,74.3,166,166,166C257.8,332,332,257.7,332,166z M235.3,272.5\r\n\tL168,205.2l-67.3,67.3l-36.2-36.2l67.3-67.3l-67.3-67.3l36.2-36.2l67.3,67.3l67.3-67.3l36.2,36.2L204.2,169l67.3,67.3L235.3,272.5z\"/> </symbol></svg>";

    

    } else {
        throw new Error('svginjector: Could not find element: #icon-container');
    }

})(document);

$( document ).ready(function() {
    
    // Slimscroll
    $('.slimscroll').slimscroll({
        allowPageScroll: true
    });
    
    // Wow
    new WOW().init();
    
    // Smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        if ($target.length) {
            var scrollTo = $target.offset().top;

            $('html, body').stop().animate({
                'scrollTop': scrollTo
            }, 1000, 'easeInOutExpo');
        }
    });
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 60) {
            $(".navbar").addClass("whiteHeader");
        } else if (!$('.navbar-collapse').hasClass('in')) {
            $(".navbar").removeClass("whiteHeader");
        }
    });
    
    // Tabs
    [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
    });

    //---------------Header Navigation Toggle Menu--------------- 
    $('.navbar-toggle').click(function(){
        var scroll = $(window).scrollTop();

        if (scroll <= 60) {
            if(!$('.navbar').hasClass('whiteHeader')) {
                $('.navbar').addClass('whiteHeader');
            } else {
                $('.navbar').removeClass('whiteHeader');
            }
        }    
    });

    $('.navbar-collapse-close').click(function(){
        $('.navbar-collapse').removeClass('in');
    });

    //----------------- FOOTER - GENERATE CURRENT YEAR ---------------
    var year = new Date().getFullYear();
    $('#current-year').text(year);
});

