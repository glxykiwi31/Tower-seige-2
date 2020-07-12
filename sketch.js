const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bodies;

function preload(){
  wood=loadImage("wood.jpg")
}

function setup() {
  createCanvas(1600,800);
 
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(800,460,1600,30)

  box1=new Box(575,425,40,40)
  box2=new Box(620,425,40,40)
  box3=new Box(665,425,40,40)
  box4=new Box(710,425,40,40)
  
  box5=new Box(600,385,40,40)
  box6=new Box(645,385,40,40)
  box7=new Box(690,385,40,40)
 
  box8=new Box(615,345,40,40)
  box9=new Box(660,345,40,40)

 polygon=new Polygon(100,400)

  slingshot=new SlingShot(polygon.body,{x:100,y:200})

}

function draw() {
  background(wood);  
  Engine.update(engine);
  text("x:y "+mouseX+" "+mouseY,mouseX,mouseY)
 
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
slingshot.display();
polygon.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
