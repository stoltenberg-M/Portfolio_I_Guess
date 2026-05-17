let mX

function setup() {
  createCanvas(400, 400);

  mX=mouseX; 
}
  
function draw() {
    background(100,200,28);
    if (mX>200){
      ellipse(200, 200, 50, 50);
    }  
    else if(mX<200){
    rect(185,185, 30, 30);
    }
    mX=mouseX; 

}