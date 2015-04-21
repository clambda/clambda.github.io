$(document).ready(function() {
    var $window = $(window),
    $navbar = $('#navbar-wrapper'),
    navbar_top = $navbar.offset().top - 20,
    navbar_margin = $navbar.height() + 20,
    $content = $('#content-wrapper'),
    $ghost = $('#navbar-ghost');

    $ghost.css('height', navbar_margin);
    $ghost.hide();

    $window.scroll(function() {
        $navbar.toggleClass('sticky', $window.scrollTop() > navbar_top);
        $('#navbar-ghost').toggle($window.scrollTop() > navbar_top);
    });
});

