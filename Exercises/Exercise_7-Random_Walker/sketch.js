/* Exercise 7 : Random Walker */ 
/* Globalizing variables */
let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

  /* Adding random colours */
  r = random(255);
  g = random(255);
  b = random(255);

  background(32);
}

function draw() {

  let nextX = x + random(-20, 20);
  let nextY = y + random(-20, 20);
  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);

  r += random(-50, 50); // To add a bit of randomness to the colour changes
  g += random(0, 10);
  b += random(-10, 10);
  r = constrain(r, 0, 255); // To constrain the colour values to stay within the valid range
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  beginShape(); // Customized shape
  curveVertex(x,y);
  curveVertex(x,y);
  curveVertex(nextX,nextY);
  curveVertex(nextX,nextY);
  endShape();
  
  x = nextX;
  y = nextY;
}
/* Mouse click to reset the random walker */
function mousePressed(){
  background(32);
  x = width/2;
  y = height/2;
}