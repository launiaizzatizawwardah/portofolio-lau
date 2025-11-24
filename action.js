// --- ORIGINAL PARALLAX CODE ---
time = document.getElementsByClassName('bubbles')[0];

// padding values for desktop
var fish2move = 100;
var fish3move = 900;
var fish4move = 1200;

// mobile
if (screen.width < 400) {
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

    fish2move = 1680;
    fish3move = 3000;
    fish4move = 4300;
}

window.addEventListener('scroll', function () {

    let value = window.scrollY;

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.30 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    fish1.style.right = (value - 100) * 1 + 'px';
    fish2.style.left = (value - fish2move) * 1 + 'px';
    fish3.style.right = (value - fish3move) * 1 + 'px';
    fish4.style.left = (value - fish4move) * 1 + 'px';
})


// ----------------------------------------
// 🌸 GENERATE SAKURA PETALS (FIXED VERSION)
// ----------------------------------------

function generatePetals() {
  const container = document.querySelector('.petal-container');

  const TOTAL = 80; // banyak banget!

  for (let i = 0; i < TOTAL; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // random horizontal
    petal.style.left = Math.random() * 100 + "vw";

    // random start position (atas banget)
    petal.style.top = Math.random() * -20 - 5 + "vh";

    // random jatuh
    petal.style.animationDuration = (Math.random() * 7 + 5) + "s";

    // random telat jatuh
    petal.style.animationDelay = Math.random() * 5 + "s";

    // random ukuran
    const size = Math.random() * 20 + 10;
    petal.style.width = size + "px";
    petal.style.height = size + "px";

    container.appendChild(petal);
  }
}

generatePetals();


// SOCIAL MEDIA LINKS
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });
