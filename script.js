// Smooth scrolling for anchor links
$(document).ready(function() {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Form validation
    $("#contactForm").submit(function(event) {
        var valid = true;

        // Check if name is provided
        if ($("#name").val() === "") {
            alert("Name is required.");
            valid = false;
        }
        // Check if email is valid
        if ($("#email").val() === "") {
            alert("Email is required.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
