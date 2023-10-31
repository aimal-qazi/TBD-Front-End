const icon = document.getElementById("menu-icon");
const list = document.getElementById("menu-list");

icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  list.classList.toggle("active");
});
