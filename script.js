let currentPage = 1;
const totalPages = 4;

const audio = document.getElementById("bgMusic");
const pages = document.querySelectorAll(".page");

// MUSIC (persistent start)
audio.volume = 0.5;

function startMusic() {
  audio.play().catch(() => {
    document.body.addEventListener("click", () => audio.play(), { once: true });
  });
}

// PAGE SWITCHER
function showPage(pageNumber) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("page" + pageNumber).classList.add("active");

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
  const message = "Happy Birthday! 🎉 I just want to tell you how special you are to me as your cousin. You bring so much joy, laughter, and happiness. I wish you success, love, and everything beautiful in life 💖";

  const el = document.getElementById("typedMessage");
  if (el && !el.dataset.done) {
    typeText(el, message);
    el.dataset.done = "true";
  }
}

// INIT
window.onload = () => {
  showPage(1);
  startMusic();
};