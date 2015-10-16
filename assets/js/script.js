$(document).ready(function() {
    var $window = $(window),
    $navbar = $('#navbar-wrapper'),
    navbar_top = $navbar.offset().top - 20,
    work_top = $('#work').offset().top - 100,
    $topbar = $('#topbar'),
    navbar_margin = $navbar.height() + 20,
    $content = $('#content-wrapper'),
    $ghost = $('#navbar-ghost');

    $ghost.css('height', navbar_margin);
    $ghost.hide();

    $(function () {
        $("img.youtube").YouTubePopup(options);
    });

    $window.scroll(function() {
        $navbar.toggleClass('sticky', $window.scrollTop() > navbar_top);
        $ghost.toggle($window.scrollTop() > navbar_top);
        $topbar.toggleClass('blue', $window.scrollTop() > work_top);
    });
    $('#about-link').click(function() {
        $('html, body').animate({scrollTop: 0}, 500, 'swing');
    });
    $('#work-link').click(function() {
        $('html, body').animate({scrollTop: $("#work").offset().top - 50}, 500, 'swing');
    });
});

