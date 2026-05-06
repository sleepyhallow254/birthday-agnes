let currentPage = 1;
const totalPages = 4;

const audio = document.getElementById("bgMusic");
const pages = document.querySelectorAll(".page");

let musicReady = false;

function setupAudio() {
  if (!audio) return;

  try {
    audio.volume = 0.5;
  } catch (_) {}

  // If the file is missing, disable music gracefully.
  audio.addEventListener("error", () => {
    musicReady = false;
  });

  audio.addEventListener("canplaythrough", () => {
    musicReady = true;
  });
}

// MUSIC (persistent start)
function startMusic() {
  if (!audio) return;

  audio.play().catch(() => {
    // iOS/Safari usually needs a user gesture.
    document.body.addEventListener(
      "click",
      () => {
        audio.play().catch(() => {});
      },
      { once: true }
    );
  });
}

// PAGE SWITCHER
function showPage(pageNumber) {
  pages.forEach(p => p.classList.remove("active"));

  const pageEl = document.getElementById("page" + pageNumber);
  if (pageEl) pageEl.classList.add("active");

  if (pageNumber === 2) startTyping();
}

// NEXT BUTTON LOGIC
function nextPage() {
  currentPage++;
  if (currentPage > totalPages) currentPage = totalPages;
  showPage(currentPage);
  startMusic();
}

// TYPING EFFECT
function typeText(element, text, speed = 40) {
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

function startTyping() {
  const message =
    "Happy Birthday! 🎉 I just want to tell you how special you are to me as your cousin. You bring so much joy, laughter, and happiness. I wish you success, love, and everything beautiful in life 💖";

  const el = document.getElementById("typedMessage");
  if (el && !el.dataset.done) {
    typeText(el, message);
    el.dataset.done = "true";
  }
}

function hideBrokenImages() {
  const imgs = document.querySelectorAll("img[data-gallery-item]");
  imgs.forEach(img => {
    img.addEventListener("error", () => {
      // If image fails (404), hide it so the rest of the page still renders.
      img.style.display = "none";

      const gallery = img.closest("[data-gallery]");
      if (gallery) {
        // If both images fail, hide the container.
        const visible = Array.from(gallery.querySelectorAll("img")).some(i => i.style.display !== "none");
        if (!visible) gallery.dataset.allHidden = "true";
      }
    });
  });
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  setupAudio();
  hideBrokenImages();

  showPage(1);
  startMusic();
});

