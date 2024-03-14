let imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");
const Products = document.querySelector(".products");

// logic for hero bg-pic slide changing ----

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block ";
}
changeSlide();

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  let interval = 3000; // 3 seconds

  function changeImage() {
    console.log("hello");
    let img = document.querySelectorAll(".header-slider ul img");
    img[index].style.opacity = 0;
    index = (index + 1) % img.length;
    img[index].style.opacity = 1;
  }
  setInterval(changeImage, interval);
});

// added click event to change pic

// next btn
next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

// next btn
prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

for (item of Products) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
