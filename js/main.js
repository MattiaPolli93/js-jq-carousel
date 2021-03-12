// Create a Carousel

// Click function(s)
$(function() {
    // Slide to the left
    $(".prev").click(function() {
        var activeImg = $("img.active");

        if (activeImg.hasClass("first")) {
            activeImg.removeClass("active");
            $(".last").addClass("active");
        } else {
            activeImg.removeClass("active");
            activeImg.prev().addClass("active");
        }
    });

    // Slide to the right
    $(".next").click(function() {
        var activeImg = $("img.active");

        if (activeImg.hasClass("last")) {
            activeImg.removeClass("active");
            $(".first").addClass("active");
        } else {
            activeImg.removeClass("active");
            activeImg.next().addClass("active");
        }
    });
});