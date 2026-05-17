function setup() {
    createCanvas(720, 400);
    background(200);
    translate(100, 100);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/4);
    }
    //der bliver lavet en Løkke som laver en ellipse og "rotate" får ellipse til at lave en blomst  
  }