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

  /* Adding random colours */
  r += random(-10, 10);
  g += random(-10, 10);
  b += random(-10, 10);
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  beginShape(); // Customized shape
  curveVertex(x,y);
  curveVertex(x,y);
  curveVertex(nextX,nextY);
  curveVertex(nextX,nextY);
  endShape(CLOSE);
  
  x = nextX;
  y = nextY;
}
/* Mouse click to reset the random walker */
function mousePressed(){
  background(32);
  x = width/2;
  y = height/2;
}