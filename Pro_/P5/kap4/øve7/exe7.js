function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
 //keyIsPressed betyder at vis en knap på tastaturet bliver trøket på så... og key betyder at vis fx h bliver trøket på så...
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 