// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("my-slides-fade");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//
//   setTimeout(showSlides, 5000);
// }

//declares the slideIndex variable to represent the current slide
var slideIndex;
// functional jaw showing slides
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("my-slides-fade");
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
  setTimeout(showSlides, 3000);
}
//first slide default
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
