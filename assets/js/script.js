$(document).ready(function() {
    var $window = $(window),
    $navbar = $('#navbar-wrapper'),
    navbar_top = $navbar.offset().top - 20,
    work_top = $('#work').offset().top - 20,
    $topbar = $('#topbar'),
    navbar_margin = $navbar.height() + 20,
    $content = $('#content-wrapper'),
    $ghost = $('#navbar-ghost');

    $ghost.css('height', navbar_margin);
    $ghost.hide();

    $window.scroll(function() {
        $navbar.toggleClass('sticky', $window.scrollTop() > navbar_top);
        $ghost.toggle($window.scrollTop() > navbar_top);
        $topbar.toggleClass('blue', $window.scrollTop() > work_top);
    });
});

