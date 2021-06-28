$(window).scroll(function () {
    if ($(this).scrollTop() > 150)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});
//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});