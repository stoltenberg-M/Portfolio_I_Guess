let x = 100;
let y = 100;
let x1 = 200;
let y1 = 200;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
    background(180,200,180); 
    //aadd
  if (x <= 1) {
    x;
  }
  else if (keyIsDown(65)) {
    x -= 5;
  }

  if (x >= 510) {
    x;
  }
  else if (keyIsDown(68)) {
    x += 5;
  }
  
  if (y <= 1) {
    y;
  }
  else if (keyIsDown(87)) {
    y -= 5;
  }

  if (y >= 510) {
    y;
  }
  else if (keyIsDown(83)) {
    y += 5;
  }

  ellipse(x,y,10,20);
  
  //>><<
  if (x1 <= 1) {
    x1;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    x1 -= 5;
  }

  if (x1 >= 510) {
    x1;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    x1 += 5;
  }
  
  if (y1 <= 1) {
    y1;
  }
  else if (keyIsDown(UP_ARROW)) {
    y1 -= 5;
  }

  if (y1 >= 510) {
    y1;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    y1 += 5;
  }
  ellipse(x1,y1,10,20);

}

