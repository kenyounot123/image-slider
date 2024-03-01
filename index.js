const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const slides = document.querySelectorAll(".slide");
const carouselNavButtons = document.querySelectorAll(".dots");
let index = 0;

function showSlide(n) {
  slides.forEach((slide) => (slide.style.display = "none"));

  index = (n + slides.length) % slides.length;

  slides[index].style.display = "block";
  slides[index].classList.add("slide-transition");
}

function nextSlide() {
  showSlide(index + 1);
}

function previousSlide() {
  showSlide(index - 1);
}

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", previousSlide);
