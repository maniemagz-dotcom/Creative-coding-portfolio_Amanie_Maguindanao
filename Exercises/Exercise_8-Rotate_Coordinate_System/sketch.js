/* Exercise 8 - Rotate Coordinate System */
/* An imitation of a spinning beyblade */

/* Global variable for rotation of coordinate system */
let angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES) // To activate the angle
}

function draw() {
  background(128,0,0);
  
  /* Adding a header */
  text("The Fire Beyblade",165, 75);
  textSize(20);
  
  /* Center Circles */
  fill(235,206,4);
  circle(width/2,height/2,230);
  fill(256,69,0); 
  circle(width/2,height/2,200);
  fill(194,24,7); 
  circle(width/2,height/2,55);
  
  /* Edges */
  translate(width/2,height/2); // To change the origin to new position 
  rotate(angle); // Rotating the entire coordinate system
  angle += 1; // To make a spinning effect
  
  /* To spin the squares around the circles */
  let nRect = 20;
  let radius = 110;
  
  for (let num = 0; num < nRect; num++){
    let a = angle + (360/nRect)*num;
    let x = radius * cos(a);
    let y = radius * sin(a);
    
    push(); // To save
    translate(x,y);
    rotate(a);
    fill(194,24,7);
    rect(0,0,30,30);
    line(0,0,20,10); // To add "spikes"
    pop(); // To restore
  }
}