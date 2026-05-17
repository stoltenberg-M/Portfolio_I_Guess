let angle =0;
let x = 50;
let y= 50; 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink"); 
  noStroke(); 
}

function draw() {
  background("yellow");
  translate(x,y)
  //translate får alt til at bevege sig til siden
  rotate(angle);
  //rotate får angle til at roteger 
  ellipseMode(CENTER);
  
  x=x+2
  //x=x+2 er translate's hastehed 
  angle = angle + 4
  //angle = angle + 4 er hasteheden af rotate
  for (var row=3; row <= width; row = row + 50){
    for (var col=3; col <= height; col = col + 50){
        ellipse(row,col,20,20);
    }
    //de 2 for() bestemer megnen af ellipse i en formason
}
}