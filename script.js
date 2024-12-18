// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const welcomeTitle = document.getElementById("welcome-title");
  const welcomeText = document.getElementById("welcome-text");

  // Click event on the logo
  logo.addEventListener("click", () => {
    // Animate the logo to move up and to the right
    logo.style.transform = "translateX(-50px)";
    logo.style.transition = "all 1.5s ease";

    // Show the welcome title and text after a short delay
    setTimeout(() => {
      welcomeTitle.style.opacity = "1";
      welcomeTitle.style.transform = "translateX(0)";
      welcomeText.style.opacity = "1";
      welcomeText.style.transform = "translateX(0)";
    }, 1000); // Delay ensures the logo animation runs first
  });
});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
