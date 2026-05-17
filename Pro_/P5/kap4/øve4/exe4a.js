function setup() { 
    createCanvas(600, 400);
  } 
  //der bliver lavet et canvas
  function draw() { 
    background(220);
    fill(255,0,0);
    noStroke();
    //der bliver lavet en background og alle figurer under bliver farvet med fill Og der er ingen border på figurene 
    if (mouseX < width/3) {
      rect(0, 0, width/3, height);
    }
    //vis mouseX er større end canvas / 3 så lave en firkant i x og y position 0 med en bredde af canvas / 3 og en højde af canvas
    else if (mouseX <= width*2/3) {
      rect(width/3, 0, width/3, height);
    }
    //ellers vis mouseX er større eller det samen som canvas * 2/3 så lave et firkant
    else {
      rect(width*2/3, 0, width/3, height);
    }
    //eller lave en firkant ;)
  }