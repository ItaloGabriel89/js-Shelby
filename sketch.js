function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("black");
    stroke("draw");
    fill("red");
    
    if(mouseIsPressed){
      react(mouseX, mouseY, 20, 35);
    }
  }
  