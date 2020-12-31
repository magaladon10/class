const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine,world,ground,box,box2
function setup() {
  createCanvas(800,800);
engine = Engine.create()
world = engine.world
ground = new Ground(400,700,800,10)
box = new Box(425,300,50,100)
box2 = new Box(400,500,50,100)

}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 ground.display()
 box.display()
 box2.display()

}