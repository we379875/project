

$(document).ready(function () {

    // $('.owl-carousel').owlCarousel({
    //     stagePadding: 30,
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     merge: true,
        
    //     responsive: {
    //         300: {
    //             items: 2,
    //             nav: true,
    //             mergeFit: true
    //         },
    //         600: {
    //             items: 3,
    //             nav: true,
    //             mergeFit: true
    //         },
    //         1000: {
    //             items: 4,
    //             nav: true,
    //             loop: true,
    //             mergeFit: false
    //         }
    //     }
    // })


    $('.item').click(function (e) { 
        e.preventDefault();

        var imageSrc = $(e.currentTarget).find('img').attr('src');

        $(".mainPhoto").attr('src',imageSrc); 

        console.log($(e.currentTarget).find('img').attr('src'));
        console.log($('.mainPhoto').attr('src'));
    });
});
