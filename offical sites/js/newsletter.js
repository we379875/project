$(document).ready(function () {
    $('.newsletter').show(1000);
    $('.Overlay').show(1000);
    $('.cancel').click(function (e) { 
        e.preventDefault();
        $('.Overlay').hide(1000);
        $('.newsletter').hide(1000);
    });

    $('body').on('click','.Overlay',function(e){
        e.preventDefault();
        $('.newsletter').hide();
        $(".Overlay").hide();
        $('.menu1').hide(1000);
    })
});