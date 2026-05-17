function setup() {
  createCanvas(300, 300);
  background(204);
  strokeWeight(5);
}
function draw() {
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      ellipse(mouseX, mouseY, 40, 40);

    }
    else if (mouseButton == RIGHT) {
      rect(mouseX-20,mouseY-20, 40, 40);
    }
  }
}
