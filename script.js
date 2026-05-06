let currentPage = 0;
const totalPages = 5;

const audio = document.getElementById("bgMusic");

/* PASSWORD */
function checkPassword() {
  const pass = document.getElementById("passwordInput").value;

  if (pass === "agnes19") {
    showPage(1);
  } else {
    document.getElementById("error").textContent = "Wrong password!";
  }
}

/* START */
function startExperience() {
  audio.play();
  showPage(2);
}

/* PAGE SWITCH */
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  if (page === 0) {
    document.getElementById("passwordPage").classList.add("active");
  } else {
    document.getElementById("page" + page).classList.add("active");
  }

  currentPage = page;

  if (page === 3) startTyping();
  if (page === 5) startFireworks();
}

/* NEXT */
function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

/* POPUP */
function openBox() {
  document.getElementById("popup").classList.add("show");
  createConfetti();
}

/* CONFETTI */
function createConfetti() {
  for (let i = 0; i < 40; i++) {
    let c = document.createElement("div");
    c.style.position = "absolute";
    c.style.width = "5px";
    c.style.height = "5px";
    c.style.background = "yellow";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 2000);
  }
}

/* TYPING */
function startTyping() {
  const text = "Happy Birthday Agnes 🎉 I wish you happiness, success and blessings always 💖";
  const el = document.getElementById("typedText");

  if (el.innerHTML !== "") return;

  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

/* HEARTS */
setInterval(() => {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);

/* FIREWORKS */
function startFireworks() {
  setInterval(() => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    for (let i = 0; i < 20; i++) {
      let p = document.createElement("div");
      p.style.position = "absolute";
      p.style.width = "4px";
      p.style.height = "4px";
      p.style.background = "white";
      p.style.left = x + "px";
      p.style.top = y + "px";

      document.body.appendChild(p);

      let angle = Math.random() * 2 * Math.PI;
      let dist = Math.random() * 100;

      p.animate([
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`, opacity: 0 }
      ], { duration: 1000 });

      setTimeout(() => p.remove(), 1000);
    }
  }, 600);
}