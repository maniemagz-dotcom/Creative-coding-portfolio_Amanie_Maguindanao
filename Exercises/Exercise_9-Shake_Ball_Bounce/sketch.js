// Exercise 9 - Shake Ball Bounce  
// Globalizing variables 

// For ball 1
let x = 100; 
let y = 100;
let sp1 = 6;
let sp2 = 7;

// For ball 2
let x2 = 200;
let y2 = 200;
let sp3 = 6;
let sp4 = 7;

// For ball 3
let x3 = 300;
let y3 = 300;
let sp5 = 6;
let sp6 = 7;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250,204,255);
  
  // Ball 1
  fill(204,153,204);
  circle(x ,y ,50);
  x += sp1;
  y += sp2;
  if (x > width || x < 0) // to make the ball bounce
    sp1 = sp1 * -1;
  if (y > height || y < 0)
    sp2 = sp2 * -1;
  x = random(100,104); // to make the shaking effect
  
  // Ball 2
  fill(204,204,255);
  circle(x2 ,y2 ,50);
  x2 += sp3;
  y2 += sp4;
  if (x2 > width || x2 < 0)
    sp3 = sp3 * -1;
  if (y2 > height || y2 < 0)
    sp4 = sp4 * -1;
  x2 = random(200,204); 
  
  // Ball 3
  fill(102,102,153);
  circle(x3 ,y3 ,50);
  x3 += sp5;
  y3 += sp6;
  if (x3 > width || x3 < 0)
    sp5 = sp5 * -1;
  if (y3 > height || y3 < 0)
    sp6 = sp6 * -1;
  x3 = random(300,304); 
}