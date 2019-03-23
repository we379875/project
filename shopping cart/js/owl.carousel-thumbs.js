$(document).ready(function () {
    var slider = $(".carousel-full");
    var thumbnailSlider = $(".carousel-thumbs");
    var duration = 500;
    var syncedSecondary = true;
    
    

    setTimeout(function () {
        $(".cloned .item-slider-model a").attr("data-fancybox", "group-2");
    }, 500);

    // carousel function for main slider
    slider
        .owlCarousel({
            loop: true,
            nav: false,
            navText: ["", ""],
            items: 1,
            lazyLoad: true,
            autoplay: true,
            smartSpeed: 600,
            autoplayHoverPause: true,
            margin: 10,
            responsiveClass: true,
            merge: true,
        })
        .on("changed.owl.carousel", syncPosition);

    // carousel function for thumbnail slider
    thumbnailSlider
        .on("initialized.owl.carousel", function () {
            thumbnailSlider
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            stagePadding: 30,
            loop: false,
            nav: true,
            margin: 10,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4,
                    margin: 20
                }
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    // on click thumbnaisl
    thumbnailSlider.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        slider.data("owl.carousel").to(number, 300, true);
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        thumbnailSlider
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbnailSlider.find(".owl-item.active").length - 1;
        var start = thumbnailSlider
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbnailSlider
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbnailSlider.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbnailSlider.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data("owl.carousel").to(number, 100, true);
        }
    }

    var height = thumbnailSlider.height();
    $('.owl-nav').css('top',-height-1);
    $('.owl-next').css('height',height+2);
    $('.owl-prev').css('height',height+2);
});


