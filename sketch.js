const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup () {
     var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

   //level one
   block9 = new block(460, 255, 30, 30);
   
    //level two
    block6 = new secondblock(430, 285, 30, 30);
    block7 = new secondblock(460, 285, 30, 30);
    block8 = new secondblock(490, 285, 30, 30);
    
    //level three
    block1 = new block(430, 315, 30, 30);
    block2 = new block(460, 315, 30, 30);
    block3 = new block(490, 315, 30, 30);
    block4 = new block(520, 315, 30, 30);
    block5 = new block(400, 315, 30, 30);

    //level four
    block10 = new secondblock(430, 345, 30, 30);
    block11 = new secondblock(460, 345, 30, 30);
    block12 = new secondblock(490, 345, 30, 30);
    block13 = new secondblock(520, 345, 30, 30);
    block14 = new secondblock(550, 345, 30, 30);
    block15 = new secondblock(400, 345, 30, 30);
    block16 = new secondblock(370, 345, 30, 30);


    //next blocks, first level
    block17 = new secondblock(800, 50, 30, 30);

    //second level
    block18 = new block(800, 80, 30, 30);
    block19 = new block(770, 80, 30, 30);
    block20 = new block(830, 80, 30, 30);

    //third level
    block21 = new secondblock(800, 110, 30, 30);
    block22 = new secondblock(770, 110, 30, 30);
    block23 = new secondblock(830, 110, 30, 30);
    block24 = new secondblock(860, 110, 30, 30);
    block25 = new secondblock(740, 110, 30, 30);

    //fourth layer
    block26 = new block(800, 140, 30, 30);
    block27 = new block(770, 140, 30, 30);
    block28 = new block(830, 140, 30, 30);
    block29 = new block(740, 140, 30, 30);
    block30 = new block(710, 140, 30, 30);
    block31 = new block(860, 140, 30, 30);
    block32 = new block(890, 140, 30, 30);

    polygon1 = new polygon(100, 250, 30, 30);
    sling1 = new slingshot(polygon1.body, {x:100, y:250});

    ground1 = new Ground(800, 165, 250, 10);
    ground2 = new Ground(460, 370, 250, 10);

}
function draw () {
    background("black");
    Engine.update(engine);

    ground1.display();
    ground2.display();
   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block14.display();
    block13.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
   polygon1.display();
   sling1.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.image);
    }
}
