var movingRect, fixedRect ,karlsqa,bobrect,jrrect;

function setup() {
  createCanvas(1200,800);
movingRect= createSprite(400, 200, 50, 50);
movingRect.shapeColor = "purple";
movingRect.debug = true;

fixedRect= createSprite(400, 200, 75, 50);
fixedRect.shapeColor = "purple";
fixedRect.debug = true;

karlsqa= createSprite(350,250,89,89);
karlsqa.shapeColor = "green";

bobrect= createSprite(200,400,20,40);
bobrect.shapeColor = "blue";

jrrect= createSprite(600,50,10,20);
jrrect.shapeColor = "yellow";
}

function draw() {
  background(45,55,25);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,jrrect)){
    movingRect.shapeColor ="red";
    jrrect.shapeColor ="red";
  }else{
    movingRect.shapeColor ="purple";
    jrrect.shapeColor ="yellow";
  }
  
  drawSprites();
}

function isTouching(object1, object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
return true;
   } else{
   return false;
  }
}