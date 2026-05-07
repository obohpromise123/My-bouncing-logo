const logo = document.getElementById("logo");

let x = 100;
let y = 100;

let dx = 3;
let dy = 3;

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function update() {
  const w = logo.offsetWidth;
  const h = logo.offsetHeight;

  let bounced = false;

  x += dx;
  y += dy;

  // collision detection
  if (x + w >= window.innerWidth || x <= 0) {
    dx = -dx;
    bounced = true;
  }

  if (y + h >= window.innerHeight || y <= 0) {
    dy = -dy;
    bounced = true;
  }

  // on bounce: change background + glow
  if (bounced) {
    document.body.style.background = randomColor();
    logo.style.filter = `drop-shadow(0 0 25px ${randomColor()})`;
  }

  logo.style.left = x + "px";
  logo.style.top = y + "px";

  requestAnimationFrame(update);
}

update();