//col
function setup() { 
	createCanvas(400, 400); 
  } 

  function draw() {
	background(255,255,0); 
	let x=mouseX
	let y=mouseY
	circle(200,200,sqrt((x-200)**2+(y-200)**2)*2);
	fill(255, 200, 200)
	


}
//slut