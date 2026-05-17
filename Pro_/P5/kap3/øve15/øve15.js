let mX, mY;

function setup() {
  createCanvas(400, 400);
  mX=mouseX; 
  mY=mouseY; 
}
  
function draw() {
  background(100,200,28)
  if (mX !== undefined && mY !== undefined) {
    ellipse(mX,mY,50,50);
  }
  if (mouseIsPressed && mouseButton === LEFT){
      mX=mouseX; 
      mY=mouseY; 
      ellipse(mX, mY, 50, 50);
    }  
}