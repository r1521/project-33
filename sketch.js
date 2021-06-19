const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var backgroundIMG;
var character;
var snow;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  character = createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  snow = new snow(random(0,400), random(0,100))
}

function draw() {
  background("backgoundIMG");  

  if(keyDown("LEFT_ARROW")){
    character.velocityX=-2
  }

  if(keyDown("RIGHT_ARROW")){
     character.velocityX=2;
  }
  
  drawSprites();
  snow.display();
}