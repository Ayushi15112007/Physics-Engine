const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

    var ball_options={
    restitution: 1
    }
   
    var ball1_options={
     restitution: 1
    }

    ball= Bodies.circle(200,100,50,ball_options);
    World.add(world,ball);

    ball1= Bodies.circle(100,50,50,ball1_options);
    World.add(world,ball1);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("green")
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

    fill("purple")
    ellipseMode(RADIUS);
    ellipse(ball.position.x , ball.position.y,50,50)

    fill("blue")
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,50,50)
}
