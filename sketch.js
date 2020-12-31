var fixedRect, movingRect;
var object,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object = createSprite(200,200,20,20);
  object.shapeColor = "green";
  object.velocityX = 3;

  object2 = createSprite(200,500,60,30);
  object2.shapeColor = "green";
  object2.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(isTouching(movingRect,object)){
    movingRect.shapeColor = "red";
  object.shapeColor = "red";

  }else {
    movingRect.shapeColor = "green";
    object.shapeColor = "green";
  }
  
  bounceOff(movingRect,object);
  drawSprites();
}

