//idk ok is fucked.

let r1, r2, rr1, rr2, t1, t2;

    function setup(){
    createCanvas(1920,1080);
    r1 = random(1920);
    r2 = random(1080);
    rr1 = random(1920);
    rr2 = random(1080);
    t1 = random(150);
    t2 = random(150);
  
    }       
    function draw(){
    background(random(255),random(255),random(255))
    if (r1 !== undefined && r2 !== undefined) {
        circle(r1,r2,t1);
        rect(rr1,rr2,t2);
      }
    if(mouseButton==LEFT){
        fill(random(255),random(255),random(255))
        circle(r1,r2,t1)
        r1 = random(1920);
        r2 = random(1080);
        t1 = random(150);   
    }
       
        if(mouseButton==RIGHT){
            fill(random(255),random(255),random(255))
            rect(rr1,rr2,t2)
            rr1 = random(1920);
            rr2 = random(1080);
            t2 = random(150);
        }
    }
    //WARNING! Flickering Screen!//
    