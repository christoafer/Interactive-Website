class Bubble{
  constructor(){
    this.x = 495,
    this.y = 590
  }
  show(){
    ellipse(this.x, this.y, 10);
}
  move(){
    this.x = this.x + random(-1, 1);
    this.y = this.x + random(-1, 1);
  }
 }

var canvas;
var button;
var words = ["Click to find out why video games can become addictive", "1. No pre-defined ends",
 "2. Rewards are based on a leveling system", "3. In-game currency", "4. Video games are considered harmless",
 "5. Rewards are set on variable schedules"];
var wordsWhy = [" ", "Addictive video games have no pre-defined ends, causing the player to want to play more because the brain never experiences the “Game Over” feeling.",
"These games usually reward the player by giving their avatar higher rated attributes, which gives the sense of reward to the player, cause them to play more.",
"A reason for video game addiction is because the in-game currency is a virtual representation of what humans strive for in the real world, which is money. This causes the user to be so locked up in acquiring virtual in-game currency they become addicted to the game.",
"Many people view video games as a harmless pastime compared to alcohol and drugs. However, since it seems like a harmless hobby, it is harder for people to recognize when they’re addicted.",
"Video games can be addictive because of the variable rewarding systems. A certain number of tasks or points must be reached before the player is rewarded. However, the player doesn’t know when the requirements for the reward is fulfilled, causing them to play until they’ve received the reward."
]
var index = 0;
var indexWhy = 0;
var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight*2);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  button = createButton('click me');
  button.position(200, 550);
  button.mousePressed(changeBG);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();
  bubble5 = new Bubble();
}

function draw(){
background(175);
  fill(100, 100, 200);
  textSize(32);
  text(words[index], 100, 550);
  textSize(15);
  text(wordsWhy[index], 10, 650)
  noFill();
  ellipse(500, 600, 80);
  ellipse(495, 590, 60, 40); // brain
  line(538, 590, 548, 620);
  line(548, 620, 535, 620)
  if (index == 0) {
      bubble1.show();
      bubble1.move();
      bubble2.show();
      bubble2.move();
      bubble3.show();
      bubble3.move();
      bubble4.show();
      bubble4.move();
      bubble5.show();
      bubble5.move();
  }
  if (index == 1) {
      fill(150, 200, 100);
      bubble1.show();
      bubble1.move();
      noFill();
      bubble2.show();
      bubble2.move();
      bubble3.show();
      bubble3.move();
      bubble4.show();
      bubble4.move();
      bubble5.show();
      bubble5.move();
    }
  if (index == 2) {
    fill(150, 200, 100);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    noFill();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
    bubble5.move();
    bubble5.show();
  }
  if (index == 3){
    fill(150, 200, 100);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    noFill();
    bubble4.move();
    bubble4.show();
    bubble5.move();
    bubble5.show();
  }
  if (index == 4){
    fill(150, 200, 100);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
    noFill();
    bubble5.move();
    bubble5.show();
  }
  if (index == 5){
    fill(150, 200, 100);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
    bubble5.move();
    bubble5.show();
  }
  if (index > 5){
    index = 0
  }
}

function changeBG(){
  clear();
  index = index + 1;
  indexWhy = indexWhy +1;
}

function windowResized(){
  console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}
