$(document).ready(function () {
    $('.search').click(function (e) { 
        e.preventDefault();
        
        $('.searchPage').show();
        $('#footer').hide();
        $('#content').hide();

    });

    $(".searchPage").on("click",".cancel", function(e){
        e.preventDefault();

        $('.searchPage').hide();
        $('#content').show();
        $('#footer').show();
      });

});