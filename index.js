const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const slides = document.querySelectorAll(".slide");
const carouselNav = document.querySelector(".carousel-nav");
let index = 0;
function showSlide(n) {
  const dots = document.querySelectorAll(".dots");
  slides.forEach((slide) => (slide.style.display = "none"));
  console.log(dots);
  dots.forEach((dot) => dot.classList.remove("active-dot"));
  index = (n + slides.length) % slides.length;

  slides[index].style.display = "block";
  slides[index].classList.add("slide-transition");
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  clearInterval(slideInterval);
  showSlide(index + 1);
}

function previousSlide() {
  clearInterval(slideInterval);
  showSlide(index - 1);
}
function createCarouselDots() {
  slides.forEach((slide, idx) => {
    const dot = document.createElement("div");
    dot.classList.add("dots");
    if (index === idx) {
      dot.classList.add("active-dot");
    }
    dot.setAttribute("index", idx);
    carouselNav.append(dot);
  });
}
function handleDots(event) {
  if (event.target.classList.contains("dots")) {
    const dotIndex = parseInt(event.target.getAttribute("index"));
    clearInterval(slideInterval);
    showSlide(dotIndex);
  }
}
rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", previousSlide);
carouselNav.addEventListener("click", handleDots);
const slideInterval = setInterval(nextSlide, 5000);
createCarouselDots();
