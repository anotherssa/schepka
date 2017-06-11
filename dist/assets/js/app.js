$(function() {
    var $menuBar = $('.menu-bar');
    var $btnToggleMenu = $('.btn_toggle-menu');

    var oddClick = true;
    $btnToggleMenu.click(function() {

        if (oddClick) {
            $menuBar.slideDown(400);
        } else {
            $menuBar.slideUp(400);

        }

        oddClick = !oddClick;
    });

});