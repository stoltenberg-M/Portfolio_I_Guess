function setup() {
    let i = 0
    //der bliver sigt at i = 0
    createCanvas(400, 400);
    while(i<100)
      {
        let x=random(400)
        let y=random(400)
        let r = random(100)
        circle(x,y,r)
        text(i,x,y)
        i=i+1
      }
    //(while) siger at imens i<100 så Go Go Gadget
  }