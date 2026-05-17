let x1, y1;
let xS1, yS1;
let tR;


function setup() {
  createCanvas(750, 500);
  x1 = 20;
  y1 = 250;
  xS1 = 6.5;
  yS1 = 0.5 * xS1;
  tR = color(255, 100, 50);
}

function draw() {
  background(tR);
  y1 += yS1;
  x1 += xS1;

  fill(255, 0, 0);
  circle(x1, y1, 30);
  if (y1 > height-15 || y1 < 15) {
    yS1 = -yS1;
  }
  if (x1 > width - 15 || x1 < 15) {
    xS1 = -xS1;
}
}