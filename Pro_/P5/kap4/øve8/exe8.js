function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {
  if ((key == 'a') || (key == 'A')) { line(45, 60, 75, 60); line(60, 20, 30, 100); line(60, 20, 90, 100);} 
  if ((key == 'v') || (key == 'V')) { line(90, 20, 60, 100); line(30, 20, 60, 100); } 
 }  
} 