$(document).ready(function () {
    $('.cart').click(function (e) { 
        e.preventDefault();
        $('.shoppingCart').slideDown();
        $(".Overlay").show();
        event.stopPropagation();        
    }); 

    $('.product').click(function (e) { 
        e.preventDefault();

        $('.menu1').slideDown();
        $('.Overlay').show();
    });

    $('.search').click(function (e) { 
        e.preventDefault();
        
        $('.searchPage').slideDown();
        $('.navbar-collapse').removeClass("show");
        // $('#footer').hide();
        // $('#content').hide();
        $('.Overlay').show();
    });



    $('body').on('click','.Overlay',function(e){
        e.preventDefault();
        $('.shoppingCart').slideUp();
        $(".Overlay").hide();
        $('.menu1').slideUp();
        $('.searchPage').slideUp();
        $('.searchPage').slideUp();
    })

    $('body').on('click','.delete', function (e) {
        e.preventDefault();
        
        this.closest('.cartItem').remove();
    });
});