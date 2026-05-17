let o1 = 0;
function setup() {
    createCanvas(512, 512);
    background(180,200,180); 

}    
function draw() {
    o1=0;
    while(o1<10) {
        stroke("red");
        fill(0,0,0,0);
        ellipse(random(512),random(512),256,200);
        o1++; 
        
    }

    for(let i = 0;i<10;i++) {
        stroke("blue");
        fill(0,0,0,0);
        ellipse(random(512),random(512),200,256);        
    }
    noLoop();
}