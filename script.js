let currentPage = 1;
const totalPages = 5;

const pages = document.querySelectorAll('.page');
const typedEl = document.getElementById('typedMessage');

function showPage(pageNumber) {
  pages.forEach(p => p.classList.remove('active'));
  const pageEl = document.getElementById('page' + pageNumber);
  if (pageEl) pageEl.classList.add('active');

  // Start typing on page 3
  if (pageNumber === 3) startTyping();
}

function nextPage() {
  currentPage++;
  if (currentPage > totalPages) currentPage = totalPages;
  showPage(currentPage);
}

// TYPING EFFECT
function typeText(element, text, speed = 35) {
  let i = 0;
  element.textContent = '';

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

let typingDone = false;
function startTyping() {
  if (!typedEl || typingDone) return;

  const message =
    "Happy 19th Birthday, Agnes!\n\nToday I just want to remind you how special you are. May your journey be filled with joy, growth, and amazing people around you. Keep shining and never lose faith—God has great plans for you.\n\nWith love, your cousin 💖";

  typeText(typedEl, message);
  typingDone = true;
}

// REVEAL BOX
function initRevealBox() {
  const box = document.getElementById('revealBox');
  const revealText = document.getElementById('revealText');
  const btn = document.getElementById('enterBtn');

  function reveal() {
    if (!box || !revealText) return;
    box.classList.add('revealed');
    revealText.textContent = 'HAPPY 19TH BIRTHDAY AGNES';
    // Hide hint if any
    const hint = box.querySelector('.reveal-hint');
    if (hint) hint.style.display = 'none';
  }

  if (btn) {
    btn.addEventListener('click', () => {
      currentPage = 2;
      showPage(2);
    });
  }

  if (box) {
    box.addEventListener('click', reveal);
    box.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        reveal();
      }
    });
  }
}

// MUSIC (best-effort, graceful)
function setupMusic() {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  audio.volume = 0.4;
  audio.addEventListener('error', () => {
    // ignore
  });

  // Try autoplay, but allow click fallback.
  audio.play().catch(() => {
    document.body.addEventListener(
      'click',
      () => {
        audio.play().catch(() => {});
      },
      { once: true }
    );
  });
}

// Hide broken images (so layout still works)
function hideBrokenImages() {
  const imgs = document.querySelectorAll('img[data-gallery-item]');
  imgs.forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // initial
  showPage(1);
  initRevealBox();
  setupMusic();
  hideBrokenImages();
});

// Expose for onclick attributes
window.nextPage = nextPage;

