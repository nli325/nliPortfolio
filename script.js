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
