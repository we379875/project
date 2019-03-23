$(document).ready(function () {
    $('.newsletter').slideDown();
    $('.Overlay').show();
    $('.cancel').click(function (e) { 
        e.preventDefault();
        $('.Overlay').hide();
        $('.newsletter').slideUp();
    });

    $('body').on('click','.Overlay',function(e){
        e.preventDefault();
        $('.newsletter').slideUp();
        $(".Overlay").hide();
    })
});