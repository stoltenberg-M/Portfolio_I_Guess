function setup() {
    createCanvas(400, 400);
    for(let i=0;i<100;i++) {
        let x=random(400)
        let y=random(400)
        let r = random(100)
        circle(x,y,r)
        text(i,x,y)
      }
  }