// slider filter 


$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        merge:true,
        responsive:{
            600:{
                items:3,
                nav:false,
                mergeFit:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false,
                mergeFit:false
            }
        }
    })
});
