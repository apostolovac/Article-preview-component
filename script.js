const share = document.querySelector(".card__bottom__button");
const popup = document.querySelector(".card__popup");

let isOpen = false;

share.addEventListener("click", () => {
 isOpen = !isOpen; // This line toggles the value of the isOpen variable.
 if (isOpen) {
  popup.style.display = "flex";
 } else {
  popup.style.display = "none";
 }
});
