let x1, y1, x2, y2;
let xS1, yS1, xS2, yS2;
let tR;


function setup() {
  createCanvas(750, 500);
  x1 = 20;
  y1 = 250;
  x2 = 730;
  y2 = 250;
  xS1 = 6.5;
  yS1 = 0.5 * xS1;
  xS2 = -5.5;
  yS2 = -0.5 * xS2;
  tR = color(255, 100, 50);
}

function draw() {
  background(tR);
  x1 += xS1;
  y1 += yS1;
  x2 += xS2;
  y2 += yS2;
  
  if (dist(x1, y1, x2, y2) < 30) {
    tR = color(random(255), random(255), random(255));
  }
  fill(255, 0, 0);
  circle(x1, y1, 30);
  fill(0, 0, 255);
  circle(x2, y2, 30);
  if (x1 > width-15 || x1 < 15) {
    xS1 = -xS1;
  }
  if (y1 > height-15 || y1 < 15) {
    yS1 = -yS1;
  }
  if (x2 > width-15 || x2 < 15) {
    xS2 = -xS2;
  }
  if (y2 > height-15 || y2 < 15) {
    yS2 = -yS2;
  }
}