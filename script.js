let currentPage = 1;
const totalPages = 5;

const audio = document.getElementById("bgMusic");

/* INTRO */
setTimeout(() => {

  document.getElementById("introPage")
    .classList.remove("active");

  document.getElementById("passwordPage")
    .classList.add("active");

}, 4000);

/* MUSIC */
function fadeInMusic() {

  audio.volume = 0;
  audio.play();

  let volume = 0;

  const fade = setInterval(() => {

    if (volume < 0.5) {

      volume += 0.05;
      audio.volume = volume;

    } else {

      clearInterval(fade);
    }

  }, 300);
}

/* PASSWORD */
function checkPassword() {

  const password =
    document.getElementById("passwordInput").value;

  if (password === "agnes19") {

    document.getElementById("passwordPage")
      .classList.remove("active");

    document.getElementById("page1")
      .classList.add("active");

    fadeInMusic();

  } else {

    document.getElementById("error")
      .textContent = "Wrong password!";
  }
}

/* GIFT */
function openMainGift() {

  const box = document.querySelector(".gift-box");

  const popup =
    document.getElementById("birthdayPopup");

  box.classList.add("open");

  setTimeout(() => {
    popup.classList.add("show");
  }, 700);

  setTimeout(() => {
    nextPage();
  }, 3500);
}

/* NEXT PAGE */
function nextPage() {

  document.getElementById("page" + currentPage)
    .classList.remove("active");

  currentPage++;

  if (currentPage <= totalPages) {

    document.getElementById("page" + currentPage)
      .classList.add("active");

    if (currentPage === 2) {
      startTyping();
    }

    if (currentPage === 4) {
      startSlideshow();
    }
  }
}

/* TYPING */
function startTyping() {

const text =

"Dear shii 😊,\n\n" +

"Since the day I met you, something honestly changed in my life. " +

"I have never really had a cousin around my age that I connected with the way I connected with you, and that is something I will always appreciate deeply ❤️\n\n" +

"In such a short time, you became more than just a cousin to me. " +

"Your presence, your energy, your smile, and the moments we have shared have truly meant a lot to me. " +

"You brought warmth, happiness, and comfort in ways you probably do not even realize 💖\n\n" +

"And honestly, being able to celebrate your birthday for the first time and witness you turning 19 feels really special to me. " +

"It is something I will genuinely treasure because not every person gets to meet someone they connect with so naturally and sincerely.\n\n" +

"As you enter this new era of your life, I pray that God gives you more strength, more peace, more happiness, and endless success. " +

"May you continue growing into an even more beautiful soul than you already are, and may life always remind you how loved and valued you are ✨\n\n" +

"Whenever life gets hard, never forget how strong you are. " +

"Keep smiling, keep believing in yourself, and keep being the amazing person you are because that light inside you is rare 🌹\n\n" +

"May every day ahead of you be filled with joy, beautiful memories, laughter, and blessings beyond measure.\n\n" +

"Happy 19th Birthday once again Agnes 🎂❤️";

  const el =
    document.getElementById("typedText");

  el.innerHTML = "";

  let i = 0;

  function type() {

    if (i < text.length) {

      el.innerHTML += text.charAt(i);

      i++;

      setTimeout(type, 35);
    }
  }

  type();
}

/* SLIDESHOW */
function startSlideshow() {

  const slides = document.querySelectorAll(".slide");

  let current = 0;

  setInterval(() => {

    slides[current]
      .classList.remove("active-slide");

    current =
      (current + 1) % slides.length;

    slides[current]
      .classList.add("active-slide");

  }, 3000);
}

/* FLOATING HEARTS */
setInterval(() => {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left =
    Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);

}, 500);

/* SECRET MESSAGE */
function showSecretMessage() {

  document.getElementById("secretMessage")
    .style.display = "block";
}