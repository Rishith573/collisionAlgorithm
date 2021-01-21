var fixedRect, movingRect, anotherRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  anotherRect = createSprite(300, 300, 30, 80);
  anotherRect.shapeColor = "yellow";
  anotherRect.debug = true;
  rect1 = createSprite(1100, 70, 50, 60);
  rect1.shapeColor = "pink";
  rect1.velocityX = -4;
  rect2 = createSprite(50, 70, 50, 60);
  rect2.shapeColor = "white";
  rect2.velocityX = 4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }else if(isTouching(movingRect, anotherRect)){
    movingRect.shapeColor = "blue"
    anotherRect.shapeColor = "blue"
  }else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    anotherRect.shapeColor = "yellow";
  }
  bounceOff(rect1, rect2);
  
  drawSprites();
}

function bounceOff(a1, a2){
  if(a1.x - a2.x < a2.width/2 + a1.width/2
    && a2.x - a1.x < a2.width/2 + a1.width/2){
    a1.velocityX = -a1.velocityX;
    a2.velocityX = -a2.velocityX;
  }
}