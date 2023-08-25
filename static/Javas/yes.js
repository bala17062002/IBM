function animateSalaryCounter(targetValue, duration) {
    const startValue = 0;
    const element = document.getElementById('salary-counter');
    const increment = targetValue / (duration / 16); 

    let currentCount = 0;
    const interval = setInterval(() => {
        currentCount += increment;
        element.textContent = currentCount.toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' LPA';
        if (currentCount >= targetValue) {
            clearInterval(interval);
            element.textContent = targetValue.toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' LPA';
        }
    }, 16);
}
animateSalaryCounter(450000, 1200);

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabconent of tabcontents) {
        tabconent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  const confettiColors = ['#e74c3c', '#3498db', '#f39c12', '#27ae60', '#9b59b6'];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

    container.appendChild(confetti);
  }

  setTimeout(() => {
    fadeOutConfetti(container);
  }, 4500);
}

function fadeOutConfetti(container) {
  const confettiElements = container.getElementsByClassName('confetti');
  for (const confetti of confettiElements) {
    confetti.classList.add('fade-out');
  }

  setTimeout(() => {
    container.innerHTML = '';
  }, 2000); 
}

createConfetti();
