let Name =["Kenya","Demarion","Ayla","Casey","Leonel","Malik","Penelope","Susan","Kristopher","Mark"]
let length


function setup() {
    createCanvas(512, 512);
    background(180,200,180); 
    setInterval(tenam,1000);

}    

function tenam() {
    background(180,200,180); 
    for(let i = 0;i<Name.length;i++) {
       length = Name[i].length;
       textSize(length*2)     
       text(Name[i],random(512),random(512)) 
    }
}
