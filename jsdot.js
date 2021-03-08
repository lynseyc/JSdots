let grow = 22 //declaring a variable

function setup() {
  createCanvas(600, 600);
   background(111, 42, 132);
}

function draw() {
 if(mouseIsPressed){
  fill(
random(235, 64, 52),
random(166, 112, 219),
random(219, 112, 155)
);
  strokeWeight(2);
  stroke(0);
  ellipse(mouseX, mouseY, 20, 20);

 }
   if (keyIsPressed) {
 background(111, 42, 132);
}
}
