const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
 ground = new Base(0,height-10,width*2,20,"brown",true )
 leftwall = new Base(100,height/2,500,100,"brown",true)
 rightwall = new Base(width-100,height/2,300,100,"brown",true)

 for(var i = 0; i < 9; i++){
  x = random(width/2 - 200, width/2 + 300 )
  y = random(0, 140)
 var stone = new Stone(x, y, 80, 80)
 stones.push(stone)
 }

bridge = new Bridge(20,{x:width/2-400 , y:height/2})
jointPoint = new Base(width-200,height/2,40,20,"yellow",true)

Composite.add(bridge, jointPoint)

jointLink = new Link(bridge,jointPoint)

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftwall.show()
  rightwall.show()
  bridge.show()
  for(var stone of stones){
    stone.show()
  }
 
}
