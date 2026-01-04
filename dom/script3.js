const boxes = document.querySelectorAll(".box");
const mainImage = document.getElementById("mainImage");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    const imagePath = box.getAttribute("src");
    mainImage.src = imagePath;
  });
});