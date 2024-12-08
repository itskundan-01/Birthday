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


// Random color generator for balloons
function getRandomGradient() {
    const colors = [
        ['#ff6f61', '#ff9a9e'],
        ['#ffcc33', '#ff9966'],
        ['#66ccff', '#0099ff'],
        ['#99ff99', '#33cc33'],
        ['#ff66cc', '#ff33cc']
    ];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(to bottom, ${randomColors[0]}, ${randomColors[1]})`;
}

// Add balloons with dynamic behavior
const balloonContainer = document.querySelector('.balloon-container');

for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 90}%`; // Random horizontal position
    balloon.style.background = getRandomGradient(); // Assign random gradient color
    balloonContainer.appendChild(balloon);

    // Remove balloon after animation completes to avoid memory issues
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Create new balloons periodically
setInterval(() => {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.background = getRandomGradient();
    balloonContainer.appendChild(balloon);

    // Remove balloon after animation completes
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}, 2000);
