$(document).ready(function () {
    $('.newsletter').slideDown();
    $('.Overlay').show();
    $('.cancel').click(function (e) { 
        e.preventDefault();
        $('.Overlay').hide();
        $('.newsletter').slideUp();
    });

    $('body').on('click touchstart','.Overlay',function(e){
        e.preventDefault();
        $('.newsletter').slideUp();
        $(".Overlay").hide();
    })
});