$(document).ready(function () {
    $('.newsletter').show();
    $('.Overlay').show();
    $('.cancel').click(function (e) { 
        e.preventDefault();
        $('.Overlay').hide();
        $('.newsletter').hide();
    });

    $('body').on('click','.Overlay',function(e){
        e.preventDefault();
        $('.newsletter').hide();
        $(".Overlay").hide();
        $('.menu1').hide();
    })
});