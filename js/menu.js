$(document).ready(function () {
    $('.product').click(function (e) { 
        e.preventDefault();

        $('.menu1').show();
        $('.Overlay').show();
    });

    $('body').on('click','.Overlay',function(e){
        e.preventDefault();

        $(".Overlay").hide();
        $('.menu1').hide();
    })
});