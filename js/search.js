$(document).ready(function () {
    $('.search').click(function (e) { 
        e.preventDefault();
        
        $('.searchPage').slideDown();
        $('.navbar-collapse').removeClass("show");
        // $('#footer').hide();
        // $('#content').hide();
        $('.Overlay').show();
    });

    $("body").on("click",".cancel", function(e){
        e.preventDefault();

        $('.searchPage').slideUp();
        // $('#content').show();
        // $('#footer').show();
      });

});