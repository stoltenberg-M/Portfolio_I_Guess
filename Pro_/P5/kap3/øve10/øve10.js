function setup() {
    createCanvas(300, 300);
    background(204,0,80);
    strokeWeight(5);
  }
  function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }