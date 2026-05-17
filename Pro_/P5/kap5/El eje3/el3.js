
function setup() {
    createCanvas(512, 512);
    background(180,200,180); 

    setInterval(tat,2000)
}    
function draw() {
    
}
function tat() {
    for(let i=0;i<101;i+=2) {
        fill("red")
        text(i,random(512),random(512))
    }
}
