let x;
let xspeed = 3;
//Vi laver en ubekendt værdi og en kendt værdi
function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 
//der bliver lavet et canvas og vi giver ubekendt x en værdi

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  //der bliver lavet en background og vis x er større end canvas bredde - 25 eller vis x er større end 0 + 25 så ændrer xspeed med xspeed = xspeed * -1 
  //Move
  x += xspeed;
  circle(x, height/2, 50);
  //x bliver definere som x = x + xspeed og der bliver lavet en cirkel
}