var x = 200;
//der bliver sagt at x er 200
var y = 200;
//der bliver sagt at y er 200
function setup() { 
  createCanvas(400, 400);
} 
//der bliver sagt lav et canvas

function draw() { 
  background(220);
  //der bliver sagt lav en background
  fill(0);
  //der bliver sagt farv 
  ellipse(x,y,50,50);   
  //der bliver sagt lav en ellipse med x værdier y værdier og en højde og bredde på 50.
  if (x >= 400){
   x = 0; 
  }
  //der bliver sagt at vis x er det samme som eller større end 400 så er x 0
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
  //der bliver sagt vis knap/pil op bliver trykket på er y = y-1 eller 200 = 200-1
  //der bliver sagt vis ellers knap/pil ned bliver trykket på er y = y+1 eller 200 = 200+1
  //der bliver sagt vis knap/pil venstre bliver trykket på er x = x-1 eller 200 = 200-1
  //der bliver sagt vis ellers knap/pil ned bliver trykket på er x = x+1 eller 200 = 200+1
  
}