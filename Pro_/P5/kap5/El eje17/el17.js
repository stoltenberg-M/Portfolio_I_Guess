let tal = [12,44,13,19,17,16,100,50,33,11]
let lige =[]
let ulige =[]

function setup () {
    createCanvas(600, 600);
    background(180,200,180); 
    deltal();
    alttal();
}

function deltal () {
    for (let i = 0; i<tal.length;i++){
        if(tal[i]%2===0){
            lige.push(tal[i])
        } else {
            ulige.push(tal[i])
        }
    }
}

function alttal () {
    for (let i = 0; i<lige.length;i++){
        text(lige[i],random(width/2,width),random(600))
    }
    for (let i = 0; i<ulige.length;i++){
        text(ulige[i],random(0,width/2),random(600))
    }
}
   