$(document).ready(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        
        $('.sidebar').toggle();
        event.stopPropagation();
    });
});