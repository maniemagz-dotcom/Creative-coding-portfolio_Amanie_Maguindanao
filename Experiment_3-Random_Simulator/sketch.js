// Experiment 3: The Random Simulator

// Initializing global variable pos
let pos;

function setup(){
  createCanvas(windowWidth, windowHeight); // setting the x and y to window size
  pos = random(300,600); // setting pos minimum and maximum range using random()
}

// Function for when space bar is pressed, background color changes randomly
function keyPressed(){
  if (key === ' '){
    background(random(255), random(255), random(255), random(255));
    
  }
}

function draw(){ 
  ellipse(pos,pos,70,90); // using pos variable to move ellipse randomly every refresh
  square(mouseX,mouseY,random(90)); // using random() to produce random sizes of square with maximum size of 90
  textSize(20); // size of text
  textAlign(CENTER, CENTER); // aligning text to center
  textFont('Times New Roman'); // setting text font to Times New Roman
  // Displaying a welcome message and mechanics
  text("Welcome to the Random Simulator!", width / 2, height / 2 - 250); 
  text("Press the 'space' bar to change colors of background", width / 2, height / 2);
  text("or Click on the mouse to change the colors of square", width / 2, height / 2 + 20 )
}

// Function for when the mouse left-click is pressed, square's color changes randomly
function mousePressed(){
  if (mouseButton === LEFT){
    fill(random(255), random(255), random(255),random(255));
  } 
}


