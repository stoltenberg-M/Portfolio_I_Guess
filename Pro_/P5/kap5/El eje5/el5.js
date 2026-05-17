let o1 = 0;
let r,h;
function setup() {
    createCanvas(512, 512);
    background(180,200,180); 
}    
function draw() {
    r=10; h=10;
    while(o1<15) {
        fill(0,0,0,0);
        ellipse(256,256,r,h);
        o1++; 
        r+=10; h+=10;
        
    }
    console.log(o1)
    draw1();
    noLoop();
}
function draw1() {
    for(let i = 0;i<15;i++) {
        fill(0,0,0,0);
        ellipse(256,256,r,h);
        console.log(i);
        r+=10; h+=10;
    } 
}