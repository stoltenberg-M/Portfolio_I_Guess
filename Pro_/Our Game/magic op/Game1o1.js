function movePlay() {
Gspeed += gravity
y +=Gspeed



if (y+10 > 790){
  y = 790-10;
  Gspeed=0
}


//A

if (keyIsDown(65)) {
  x-=4
}
//D

if (keyIsDown(68)) {
  x+=4
}

//up

if (keyIsDown(87)) {
  y-=7

}


strokeWeight(1)
Player = rect(x,y,10,10);
console.log(y);console.log(x);


if (keyIsDown(69)) {
  x+=25;
}

if (keyIsDown(81)) {
  x=80;
  y=700;
}
}
function playerDie() {
if (y >= 373.3 && y <= 385 || y >= 772.3 && y <= 785) {
  x=50;
  y=10;
 }  
}
