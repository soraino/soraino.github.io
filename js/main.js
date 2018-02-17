$(document).ready(function() {
    $('#achievements').masonry({
        itemSelector: '.portfolio-item'
    })
    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            J
            $('#header').removeClass('fixed');
        }
    });
    
    new Typed('#dev', {
      stringsElement: '#typed',
      typeSpeed: 40,
      loop: false,
      showCursor: false,
    });

    // Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 276
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function() {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function() {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });
    
});
