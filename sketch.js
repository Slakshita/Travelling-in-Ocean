var seaImg , shipImg1;
var sea , ship;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png" , "ship-2.png" );
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  // Moving background
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite(200,200);
  ship.addAnimation("moving ship",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  
  //code to reset the background
  if (sea.x < 0){
  sea.x = sea.wigth/2;
  }
  drawSprites();
}