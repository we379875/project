$(document).ready(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        
        $('.sidebar').toggle();
        event.stopPropagation();
    });

    $('body').click(function (e) { 
        $('.sidebar').hide();
    });
});