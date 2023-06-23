const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const slides = document.querySelector(".slides");
const slideCount = slides.childElementCount;
let activeSlideIndex = 0;

prevButton.addEventListener("click", () => {
  activeSlideIndex = (activeSlideIndex - 1 + slideCount) % slideCount;
  updateActiveSlide();
});

nextButton.addEventListener("click", () => {
  activeSlideIndex = (activeSlideIndex + 1) % slideCount;
  updateActiveSlide();
});

function updateActiveSlide() {
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");
  slides.children[activeSlideIndex].classList.add("active");
}
