// Create a Carousel

// Calling functions
$(function() {
    // Sliding to the left
    $(".prev").click(slideLeft);

    // Sliding to the right
    $(".next").click(slideRight);

    // Clicking blue buttons
    $(".fas.fa-circle").click(clickButton);

    // Enabling keyboard buttons to slide images
    $(document).keydown(function(event) {
        if ((event.which === 8) || (event.which === 37)) {
            slideLeft();
        } else if ((event.which === 13) || (event.which === 39)) {
            slideRight();
        }
    });
});