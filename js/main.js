new Typed('#dev', {
        stringsElement: '#typed',
        typeSpeed: 40,
        loop: true,
        showCursor: false,
    });

$(document).ready(()=>{
    
    // Header Scroll
    $(window).on('scroll', () =>{
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
            $('.to-top-btn').removeClass('active')
        } else {
            $('#header').removeClass('fixed');
            $('.to-top-btn').addClass('active')
        }
    });
    // Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', ()=> {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
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
        id = $el.attr('href')
        $('html, body').animate({
            scrollTop: $(id).offset().top - 100
        }, 500);
        return false;
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function () {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });

});

// placing another $(document).ready function here so that it will wait for the doc.ready to be done then run this
$(document).ready(()=>{
    $('#achievements').masonry({
        itemSelector: '.portfolio-item'
    })
})