var now = new Date();
var delay = 60 * 60 * 1000; // 1 hour in msec
var start =
  delay -
  (now.getMinutes() * 60 + now.getSeconds()) * 1000 +
  now.getMilliseconds();

setTimeout(function doSomething() {
  if (now.getHours() === 9 || now.getHours() === 11 || now.getHours() === 21) {
    tweeter();
  }
  setTimeout(doSomething, delay);
}, start);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slider");
  let dots = document.querySelectorAll(".nav-btn");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].className += " active";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3000);
}

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slider");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {});
});

//

var updateValuesMinutes = function () {
  $to.prop("value", to);
  localStorage.setItem("Test", to); // add line 1 of 3
  let slidesCheck = localStorage.getItem("Test"); // add line 2 of 3
  console.log(slidesCheck); // add line 3 of 3
};
