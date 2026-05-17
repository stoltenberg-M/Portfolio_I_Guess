let o1 = 0;
let a
function setup() {
    createCanvas(1512, 715);
    background(180,200,180); 

}    
function draw() {
    o1=0;
    a=color(random(255),random(255),random(255));
    while(o1<10) {
        stroke(a);
        fill(0,0,0,0);
        ellipse(random(1512),random(715),256,200);
        o1++; 
        
    }
    a=color(random(255),random(255),random(255));
    for(let i = 0;i<10;i++) {
        stroke(a);
        fill(0,0,0,0);
        ellipse(random(1512),random(715),200,256);        
    }
}