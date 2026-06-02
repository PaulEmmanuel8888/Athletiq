document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      hamburger.classList.remove("fa-bars");
      hamburger.classList.add("fa-xmark");
    } else {
      hamburger.classList.remove("fa-xmark");
      hamburger.classList.add("fa-bars");
    }
  });

  function removeActive(options) {
    options.forEach((option) => {
      option.classList.remove("active-link");
    });
  }

  const navOptions = document.querySelectorAll(".nav-link");

  navOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      removeActive(navOptions);
      const selectedOption = this;
      selectedOption.classList.add("active-link");
      navLinks.classList.toggle("active");

      if (navLinks.classList.contains("active")) {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-xmark");
      } else {
        hamburger.classList.remove("fa-xmark");
        hamburger.classList.add("fa-bars");
      }
    });
  });
});
