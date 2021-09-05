var trex, trex_running, edges;
var groundImage,ground;
var invisibleGround;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,400);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.y = 170;

  ground=createSprite(180,180,400,10);
  ground.addImage(groundImage);
  ground.velocityX = -2;
  
  invisibleGround =  createSprite(180,190,400,10);
  invisibleGround.visible = false; 
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  
  if(ground.x<0){
    ground.x = ground.width / 2;
  }

  //jump when space key is pressed
  if(keyDown("space") && trex.y > 100 ){
    trex.velocityY = -10;
  }
  console.log(trex.y);
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  
  drawSprites();
}