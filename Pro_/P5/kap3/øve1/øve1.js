
function setup() { 
	createCanvas(400, 400); 
    
  } 

  function draw() {
	background(255,255,0); 
    let Mx = "Din mus x-koordinat er givet ved ";
    let My = "Din mus y-koordinat er givet ved ";
	console.log(Mx+mouseX+"\n"+My+mouseY)
    let PMx = "Din gamle mus x-koordinat er givet ved "
    let PMy = "Din gamle mus y-koordinat er givet ved "
    console.log(PMx+pmouseX+"\n"+PMy+pmouseY)
    let SMx = "Din hastighed i x-koordinat"
    let SMy = "Din hastighed i y-koordinat"
    let SM = "din hastighed"
    console.log(SMx+(mouseX-pmouseX)+"\n"+SMy+(mouseY-pmouseY))
    console.log(SM+((mouseX-pmouseX)**2+(mouseY-pmouseY)**2)**0.5)
  }