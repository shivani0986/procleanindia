
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
//created paper var here
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//created paper
	paper=new Paper(10,100);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  //background("lightblue");
  background("lightgreen");

  groundObject.display();
  dustbinObj.display();
  //displayed paper here
  paper.display();

  stroke("yellow");
  fill("green");
  textSize(40);
  text("Press UP Arrow Key AND KEEP YOUR AREA CLEAN",300,150);
  textSize(50);
  text("*CLEAN INDIA GREEN INDIA*",400,100);
  textSize(50);
  text("*PROJECT BY SHIVANI*",500,200);

}
//created function here 
function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
		stroke("yellow");

	}
}
