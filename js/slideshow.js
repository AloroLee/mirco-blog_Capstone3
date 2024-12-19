let slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

// Automatically change slides every 5 seconds (adjust timing here)
setInterval(() => {
  showSlides(slideIndex += 1); // Automatically go to the next slide
}, 5000);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slides');
  const dots = document.querySelectorAll('.dots span');

  // Reset the slide index if out of bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides and deactivate all dots
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}
