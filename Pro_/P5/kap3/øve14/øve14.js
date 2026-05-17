let x; 
//der bliver laver en ukendt variabel
let y; 
//der bliver laver en ukendt variabel
let xspeed; 
//der bliver laver en ukendt variabel
let yspeed; 
//der bliver laver en ukendt variabel


function setup() { 
  createCanvas(400, 400);
  //der bliver sagt lav et canvas
  x = width/2
  //variabel bliver defineret som canvas bredde divideret med 2
  y = height/2
  //variabel bliver defineret som canvas højte divideret med 2  
  xspeed = -1; 
  //x hastighed bliver defineret som x aktuel hastighed -1
  yspeed = 0.5*xspeed; 
  //y hastighed bliver defineret som x aktuel hastighed * 0.5
  
} 

function draw() { 
  background(220);
  //der bliver sagt lav en background  
  ellipse(x, y, 50, 50); 
  //der bliver sagt lav en firkant med x variabel som x position og y variabel som y position og højde og bredde på 50.
  x+=xspeed; 
  //der bliver sagt x variabel + xspeed variabel giver en ny x variabel
  y+=yspeed; 
  //der bliver sagt y variabel + yspeed variabel giver en ny y variabel
}