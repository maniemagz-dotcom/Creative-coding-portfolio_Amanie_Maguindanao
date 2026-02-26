/* Exercise 10: Load font and Draw Text */ 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(251,255,253);
  textSize(50);
  text("I see colors!", width/2,height/2);
  textAlign(CENTER,CENTER);
  
  textSize(30);
  text("try clicking on the text!", width/2, 550);
  textFont('VT323'); // Loaded font using name font accessing from embedded code placed on index.html
}

function mousePressed(){
  if (mouseButton === LEFT){
    fill(random(250), random(250), random(250),random(250)); // To generate random colors when pressed
    textSize(random(50,100)); // To create glitch effect
  } 
}