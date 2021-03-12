// Functions
// Slide to the left (affecting buttons as well)
function slideLeft() {
    var activeImg = $("img.active");
    var activeBtn = $(".fa-circle.active");

    if (activeImg.hasClass("first")) {
        activeImg.removeClass("active");
        $("img.last").addClass("active");
        activeBtn.removeClass("active");
        $("i.last").addClass("active");
    } else {
        activeImg.removeClass("active");
        activeImg.prev().addClass("active");
        activeBtn.removeClass("active");
        activeBtn.prev().addClass("active");
    }
}

// Slide to the right (affecting buttons as well)
function slideRight() {
    var activeImg = $("img.active");
    var activeBtn = $(".fa-circle.active");

    if (activeImg.hasClass("last")) {
        activeImg.removeClass("active");
        $("img.first").addClass("active");
        activeBtn.removeClass("active");
        $("i.first").addClass("active");
    } else {
        activeImg.removeClass("active");
        activeImg.next().addClass("active");
        activeBtn.removeClass("active");
        activeBtn.next().addClass("active");
    }
};