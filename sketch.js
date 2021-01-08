const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   
    polygon = Bodies.circle(200,500,30);
    World.add(world,polygon);
    ground = new Ground(600,800,1200,20);
    stand = new Ground(900,500,300,20);
   // layer 1
    block1 = new Block(900,400)
   block2 = new Block(870,400); 
   block3 = new Block(840,400);
   block4= new Block(810,400);
   block5= new Block(780,400);
   block6=new Block(930,400);
   block7 = new Block(960,400);
   block8 = new Block(990,400);
   block9 = new Block(1020,400);
   // layer2
   block10 = new Block(810,360);
   block11 = new Block(840,360);
   block12 = new Block(870,360);
   block13 = new Block(900,360);
   block14=new Block(930,360);
   block15 = new Block(960,360);
   block16=new Block(990,360);
   // layer3
   block17 = new Block(870,320);
   block18 = new Block(900,320);
   block19=new Block(930,320);
   //top
   block20 = new Block(900,280);
   //slingshot thingy
   sling = new SlingShot(this.polygon,{x:150,y:450});
   Engine.run(engine);
    
}

function draw(){
    background("black");
   imageMode(CENTER);
   image(img,polygon.position.x,polygon.position.y,50,50);
   
   
   
    drawSprites();
    ground.display();
    stand.display();

    //layer 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    //layer2
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    //layer3
    block17.display();
    block18.display();
    block19.display();
    
    //top
    block20.display();  
    //sling
    sling.display();    
}
function mouseDragged(){
   
        Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
}