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
    
    
    $('.navbar-mobile-toggle').click(function(){
        $('.navbar-mobile').addClass('opened');
        $('body').css('position', 'fixed');    
    });

    $('.navbar-collapse-close').click(function(){
        $('.navbar-mobile').removeClass('opened');
        $('body').css('position', 'relative');
    });

    //----------------- FOOTER - GENERATE CURRENT YEAR ---------------
    var year = new Date().getFullYear();
    $('#current-year').text(year);

    //----------------- HOME SECTION FULL PAGE BACKGROUND IMAGE -------------
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var backgroundSize;

    if (winWidth > winHeight) {
        backgroundSize = winWidth + 'px auto'; 
    } else {
        backgroundSize = 'auto ' + winHeight + 'px';
    }

    $('.home').css('background-size', backgroundSize);

});

