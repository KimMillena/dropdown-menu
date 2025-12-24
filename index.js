const headerBtn = document.querySelectorAll(".header-btn");
const dropdownList = document.querySelectorAll(".dropdown-list");

const toggleDropdown = (clickedDropdown) => {
  dropdownList.forEach((dropdown) => {
    if (clickedDropdown === dropdown) {
      clickedDropdown.classList.toggle("open");
    } else {
      dropdown.classList.remove("open");
    }
  });
};

headerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clickedDropdown = btn.nextElementSibling;
    toggleDropdown(clickedDropdown);
  });
});
