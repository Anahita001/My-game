const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var robin,robinImage;
var background, backgroundImage;
function preload() {
  backgroundImage = loadImage("assets/bg.jpg");
  robinImage = loadImage("assets/office worker.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    background = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    background.addImage("bg",backgroundImage);
    background.scale = 4;

    robin = createSprite(200,100,1,1)
    robin.addImage("office worker",robinImage);
    robin.scale = 0.1;
}

function draw() {
  
  drawSprites();
}


