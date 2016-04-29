(function (document) {
    var container = document.querySelector('#icon-container');

    if (container) {
    
        container.innerHTML = "<svg style=\"display: none;\" viewBox=\"0 0 500 500\" x=\"0px\" y=\"0px\"><symbol viewBox=\"0 0 446.3 756.3\" id=\"icon-arrow-left\"> <path d=\"M434.9,57.7L82.8,378.1l352.1,320.5c14,12.7,15.3,33.9,2.8,47.3c-12.5,13.4-33.8,13.9-47.8,1.2L16.5,407.3\r\n\tc-2.9-1.6-5.6-3.7-8-6.2c-6-6.4-8.8-14.7-8.5-22.9c-0.2-8.2,2.6-16.5,8.6-22.9c2.4-2.5,5.1-4.6,8-6.2L389.9,9.2\r\n\tc14-12.7,35.4-12.2,47.9,1.2C450.2,23.8,448.9,45,434.9,57.7L434.9,57.7z\"/> </symbol><symbol viewBox=\"0 0 100 158.36\" id=\"icon-arrow-right\"> <polygon points=\"21.2,0 0,21.1 57.81,79.18 0,137.26 21.2,158.36 100,79.18 \"/> </symbol><symbol viewBox=\"0 0 100 100\" id=\"icon-close\"> <path d=\"M100,82.5L82.5,100L50,67.5L17.5,100L0,82.5L32.5,50L0,17.5L17.5,0L50,32.5L82.5,0L100,17.5L67.5,50L100,82.5z\"/> </symbol><symbol viewBox=\"0 0 332 332\" id=\"icon-cross\"> <path d=\"M332,166C332,74.2,257.7,0,166,0C74.2,0,0,74.3,0,166c0,91.8,74.3,166,166,166C257.8,332,332,257.7,332,166z M235.3,272.5\r\n\tL168,205.2l-67.3,67.3l-36.2-36.2l67.3-67.3l-67.3-67.3l36.2-36.2l67.3,67.3l67.3-67.3l36.2,36.2L204.2,169l67.3,67.3L235.3,272.5z\"/> </symbol><symbol viewBox=\"0 0 220.4 39.3\" id=\"icon-logo-smart\"> <style type=\"text/css\"> .st0{fill:#7EC2D0;} .st1{fill:#CE665E;} </style> <path class=\"st0\" d=\"M0,0c1.1,0,2.3,0,3.4,0c0.1,12.8,0,25.5,0,38.3c-1.2,0-2.3,0-3.5,0C0,25.6,0,12.8,0,0z\"/> <path class=\"st0\" d=\"M41.4,0c0.9,0,2.6,0,3.5,0c0,12.8,0,25.5,0,38.3c-0.9,0-2.7,0-3.6,0C41.4,25.5,41.4,12.8,41.4,0z\"/> <path class=\"st1\" d=\"M83,11.1c-1.9-5.9,3.6-11.9,9.6-11c3.9,0.2,6.6,3.1,8.9,5.9c-1,0.8-2,1.5-3,2.2c-2.1-2.6-5.2-5.7-8.8-4.2\r\n\tc-3.9,1.2-3.8,6.8-0.9,9c4.7,4.3,11.4,7.3,13.2,14c1.8,7-5.6,13.7-12.4,12c-4.3-0.6-7.2-4.3-9.3-7.8c1.1-0.6,2.1-1.3,3.2-1.9\r\n\tc1.9,2.9,4.3,6.5,8.2,6.2c4.1,0,7.7-4.4,6.1-8.4C94.6,20.3,85.5,18.4,83,11.1z\"/> <path class=\"st1\" d=\"M211.2,0.7c0.9,0,2.7,0,3.6,0c0,3.4,0,6.8,0,10.2c1.8,0,3.7,0,5.6,0c0,0.9,0,2.5,0,3.4c-1.9,0-3.7,0-5.5,0\r\n\tc0,8,0,16,0,24c-0.9,0-2.7,0-3.6,0c0-8,0-16,0-24c-1.6,0-3.2,0-4.9,0c0-0.8,0-2.5,0-3.3c1.6,0,3.2,0,4.8,0\r\n\tC211.2,7.5,211.3,4.1,211.2,0.7z\"/> <path class=\"st1\" d=\"M112.8,15.4c2.4-3,5.9-5.5,9.9-5c3.8,0,7,2.8,8.1,6.3c2.2-3.3,5.5-6.3,9.7-6.3c4.6-0.5,8.9,3.3,9.3,7.9\r\n\tc0.8,6.7,0.2,13.5,0.4,20.2c-0.9,0-2.6,0-3.5,0c-0.4-7.1,0.6-14.3-0.9-21.3c-2.8-5.9-11.9-3.4-13.5,2.3c-1.7,6.2-0.7,12.7-1,19.1\r\n\tc-1.1,0-2.3,0-3.5,0c-0.2-6.4,0.3-12.8-0.3-19.1c-0.1-3.1-2.9-5.8-6.1-5.6c-4.4-0.1-8.1,3.9-8.5,8.2c-0.5,5.5-0.1,11-0.3,16.5\r\n\tc-0.9,0-2.7,0-3.6,0c0-9.1,0-18.3,0-27.4c0.9,0,2.7,0,3.6,0C112.8,12.4,112.8,13.9,112.8,15.4z\"/> <path class=\"st1\" d=\"M195,14.8c2.3-3.3,6.3-5.7,10.4-3.8c-0.6,0.9-1.2,1.9-1.7,2.8c-4.2-1.2-7.6,2.5-8.1,6.4\r\n\tc-0.9,6-0.4,12.1-0.5,18.1c-0.9,0-2.7,0-3.6,0c0-9.1,0-18.2,0-27.4c0.9,0,2.7,0,3.6,0C195,11.9,195,13.8,195,14.8z\"/> <path class=\"st0\" d=\"M10.3,10.9c0.9,0,2.7,0,3.6,0c0.2,6.3-0.4,12.6,0.4,18.8c1.5,7.4,13.7,7.9,15.8,0.7c1-6.5,0.7-13.1,0.4-19.6\r\n\tc1.3,0,2.6,0.1,3.8,0.1c-0.5,7,0.9,14.2-1.1,21c-3.1,9.5-19.3,9.2-22.1-0.4C9.5,24.9,10.5,17.8,10.3,10.9z\"/> <path class=\"st0\" d=\"M52.1,27.2c-0.2-5.4-0.1-10.9,0-16.4c0.9,0,2.6,0.1,3.4,0.1c0.3,6.6-0.7,13.3,0.8,19.8c2.4,6.9,14.3,6.4,15.8-1\r\n\tc0.7-6.3,0.2-12.6,0.4-18.8c0.9,0,2.7,0,3.6,0c-0.3,6.9,0.8,13.9-0.9,20.7c-2.1,7.3-11.7,9-17.7,5.7C53.8,35.4,52.2,31.1,52.1,27.2z\r\n\t\"/> <path class=\"st1\" d=\"M181.4,10.9c0,1.6,0,3.2,0,4.8c-1.7-1.8-3.5-3.8-5.9-4.6c-6.1-2.4-13.7,0.1-17,5.8c-4.3,6.4-2.1,15.9,4.5,19.9\r\n\tc5.8,3.8,14,2.3,18.4-3.1c0,1.5,0,3,0,4.5c0.9,0,2.6,0,3.5,0c0-9.1,0-18.3,0-27.4C184,10.9,182.3,10.9,181.4,10.9z M173.4,35.6\r\n\tc-5.8,1.8-12.1-2.4-13.4-8.2c-1.2-4.8,1.3-10.3,5.8-12.4c6-3.2,14.1,0.7,15.3,7.3C182.7,28,179.1,34.3,173.4,35.6z\"/> </symbol></svg>";

    

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

        if ($(target).length) {
            var scrollTo = $(target).offset().top;

            $('html, body').stop().animate({
                'scrollTop': scrollTo
            }, 1000, 'easeInOutExpo');
        
        }
        
    });
    
    var scroll;

    $(window).scroll(function() {    
        scroll = $(window).scrollTop();
        
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
    var scrollMobMenu;

    $('.navbar-mobile-toggle').click(function(){
        $('.navbar-mobile').addClass('opened');
        $('body').css('position', 'fixed'); 

        scrollMobMenu = scroll;   
    });

    $('.navbar-collapse-close').click(function(){
        $('.navbar-mobile').removeClass('opened');
        $('body').css('position', 'relative');

        $(window).scrollTop(scrollMobMenu);
    });

    //----------------- FOOTER - GENERATE CURRENT YEAR ---------------
    var year = new Date().getFullYear();
    $('#current-year').text(year);

    //----------------- HOME SECTION FULL PAGE BACKGROUND IMAGE -------------
    
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var backgroundSize;

    bgSize();

    $(window).resize(function(){
        bgSize();
    });

    function bgSize(){
        if (winWidth > winHeight) {
            backgroundSize = winWidth + 'px auto'; 
        } else {
            backgroundSize = 'auto ' + winHeight + 'px';
        }

        $('.home').css('background-size', backgroundSize);
    }

    

});

