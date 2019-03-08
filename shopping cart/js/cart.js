$(document).ready(function () {
    $('.cart').click(function (e) { 
        e.preventDefault();
        $('.shoppingCart').toggle();
        $(".Overlay").toggle();
        event.stopPropagation(); 

        
    });

    $('body').on('click','.Overlay',function(e){
        e.preventDefault();
        $('.shoppingCart').hide();
        $(".Overlay").hide();
    })
});