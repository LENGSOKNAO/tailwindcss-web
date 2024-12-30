const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const sl = document.querySelector(".sl ");
const s = document.querySelectorAll(".s ");
const widthSlide = slide[0].offsetWidth - 100;
const w = s[0].offsetWidth - 240;
const btnR = document.querySelector(".btn-r");
const btnRight = document.querySelector(".btn-right");
const btnL = document.querySelector(".btn-l ");
const btnLeft = document.querySelector(".btn-left");

let n = 0;
let l = slide.length;

btnR.addEventListener("click", () => {
  if (n < l - 1) {
    n++;
    slider.style.transform = `translateX(-${n * widthSlide}px)`;
  }
});
btnL.addEventListener("click", () => {
  if (n > 0) {
    n--;
    slider.style.transform = `translateX(-${n * widthSlide}px)`;
  }
});
btnRight.addEventListener("click", () => {
  if (n < s.length - 1) {
    n++;
    sl.style.transform = `translateX(-${n * w}px)`;
  }
});
btnLeft.addEventListener("click", () => {
  if (n > 0) {
    n--;
    sl.style.transform = `translateX(-${n * w}px)`;
  }
});
