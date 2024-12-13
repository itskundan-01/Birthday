// Popup functionality
const popup = document.querySelector('.popup');
const showPopupBtn = document.querySelector('.btn-show-popup');
const closePopupBtn = document.querySelector('.btn-close-popup');

showPopupBtn.addEventListener('click', () => {
  popup.classList.add('visible');
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('visible');
});

// Music toggle
const music = document.getElementById('birthday-song');
const musicToggle = document.getElementById('toggle-music');

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = 'Pause Music';
  } else {
    music.pause();
    musicToggle.textContent = 'Play Music';
  }
});

// Auto-play music on page load
window.addEventListener('load', () => {
  music.play();
});

// Gallery zoom functionality
const galleryImages = document.querySelectorAll('.gallery-container img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

// Hide splash screen and show main content after 3 seconds
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide splash screen
    mainContent.classList.add("visible"); // Show main content
    document.body.style.overflow = "auto"; // Restore scrolling
  }, 5000); // 3 seconds
});
