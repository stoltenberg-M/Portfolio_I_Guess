/*

tag dette som et eksempel! :) :D :3


0 er nullstel larp tid
mouseButton LEFT er set larp point
*/

let points = [];
let t = 0; 
let run = true;
let gamelPoints = null

function setup() { 
    createCanvas(750, 500); 
    background(200, 200, 200);
}

function draw() { 
if(run){
    tid(); 
    if (points.length > 1) {
        let P = findLerpsPunkt(points, t);
        if(gamelPoints){
        stroke("yellow");
        line(gamelPoints.x, gamelPoints.y, P.x, P.y);
        
        let dirX = P.x - gamelPoints.x;
        let dirY = P.y - gamelPoints.y;

        let perpX = -dirY;
        let perpY = dirX;

        let length = sqrt(perpX * perpX + perpY * perpY);
        perpX /= length;
        perpY /= length;


        }
        gamelPoints=P;
    }

    drawCurve();
 }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        points.push({x: mouseX, y: mouseY});
        t = 0;
        console.log(points);
        gamelPoints = null;
        background(200, 200, 200);

    }
}

function tid() {
    if (run === true) {
        t += 0.005;
    }
    
    //If you wanted to restart automatically 1 needs to be 0 vvvvvvvv
    if (t >= 1) { 
        t = 1;
    } 

    if (keyIsDown(48)) { 
        t = 0;
        run = true;
        background(200, 200, 200);

    } 
}

function findLerpsPunkt(points, t) {
    if (points.length == 1) {
        return points[0];
    }
    let newPoints = [];
    for (let i = 0; i < points.length - 1; i++) {
        let x = lerp(points[i].x, points[i + 1].x, t);
        let y = lerp(points[i].y, points[i + 1].y, t);
        newPoints.push({x, y});
    }
    return findLerpsPunkt(newPoints, t);
}

function drawCurve() {
    stroke(100,100,100,10);
    strokeWeight(3);
    for (let i = 1; i < points.length; i++) {
        line(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
    }
}
