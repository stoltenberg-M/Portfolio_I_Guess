let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
//vis left arrow bliver hold nede så x=x-5
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
//vis right arrow bliver hold nede så x=x+5
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
//vis up arrow bliver hold nede så y=y-5
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
//vis down arrow bliver hold nede så y=y+5
  clear();
  circle(x, y, 50);
}