//declares the slideIndex variable to represent the current slide
var slideIndex;
// functional jaw showing slides
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  //next slide
  slideIndex++;
  //final slide back to first slide
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  //auto slide after 5s
  setTimeout(showSlides, 5000);
}
//first slide default
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
