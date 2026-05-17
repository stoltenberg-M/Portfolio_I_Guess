let i=1
function setup() {
    createCanvas(512, 512);
    background(180,200,180); 
    setInterval(tat,1000)
}    

function tat() {
    while(i<101) {
        fill("red")
        text(i,random(512),random(512))
        i+=2 
    }
    if(i=101)
        i=1
}
