const ImageElement = document.querySelector(".image-container");

const prevEle = document.getElementById("prev");

const nextvEle = document.getElementById("next");

let x = 0;
let timer;

function updateGallery() {
  ImageElement.style.transform = ` perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x + 45;
    updateGallery();
  }, 3000);
}
updateGallery();

prevEle.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextvEle.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
