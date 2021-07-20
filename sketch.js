  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(200,450, 160, 310);
  cannon = new Cannon(200, 300, 110, 50, angle);
  

}

function draw() {
  background(backgroundImg);
  image(backgroundImg, 0, 0, 1200, 600);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  
 
}








