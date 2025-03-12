let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");

    // Update slide index
    slideIndex += n;

    // Loop back to the first slide if at the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Show the updated slide
    showSlides();
}

// Initialize the slideshow
showSlides();