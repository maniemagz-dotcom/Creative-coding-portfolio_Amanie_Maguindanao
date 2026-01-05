// Experiment 1: Combination of task 1 and 2

// Task 1
let pos;

function setup() {
  createCanvas(400,500); // x,y
  // Extension for task 1
  // using random(range) to change the position variable every time the sketch runs
  pos = random(200,300);
}

function draw() {
  background(135,206,250); 


  // Task 2
  // Extension for task 2
  // Added repeated ellipses and even spacing using calculations
  let spacing = 80; // Change it to 65 to see a different variation
  
  for (let x = 0; x<= width; x += spacing){
    for (let y = 0; y <= height; y += spacing){
      
  // ellipse : moves vertically (sea bubbles)
  fill(204, 255, 255);
  ellipse(x, y, 70, 60); // x,y,w,h
  fill(0,51,102); // color of text
  textSize(20); // size of text
  textFont('Times New Roman') 
  text("The Abstract Chromis", 120, 80); // text,x,y
    }
  }

// Continuation of task 1
  // circle : moves horizontally (chromis fish)
  fill(0,204,255); // colour
  circle(pos, 200, 90); // x,y,d
  
  // rectangle : moves vertically (frozen cube)
  fill(255, 255, 255); // colour
  rect(150, pos, 50, 55); // x,y,l,w
  
  // triangle : stretches a corner horizontally (fin)
  fill(0,51,102); // colour
  triangle(150, 150, 200, 120, pos, 200); 
  //x1, y1, x2, y2, x3, y3
}
