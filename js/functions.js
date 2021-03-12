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

// Matching blue buttons with respective images
function clickButton() {
    // Removing and adding active "status" to blue buttons
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    
    // Variable
    var matchingImg = $(".images > img");

    // Matching respective image
    matchingImg.eq($(this).index()).addClass('active');
    matchingImg.eq($(this).index()).siblings().removeClass('active');
}