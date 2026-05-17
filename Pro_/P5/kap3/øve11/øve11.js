function setup() {
    createCanvas(300, 300);
    background(204);
  }
  function keyPressed()
{
    if (keyCode === 70){
        quad(mouseX, mouseY, mouseX+10, mouseY, mouseX+10, mouseY-10, mouseX, mouseY-10)
    }
    else if (keyCode === 67){
        ellipse(mouseX, mouseY, 33, 33)
    }
    else if (keyCode === 69){
        ellipse(mouseX, mouseY, 33, 50)
    }
}