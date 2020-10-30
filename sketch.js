var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockGroup;
gameState = "play";
var spooky;

function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png");
  spooky = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  //create Tower
  tower = createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY = 2;
  
  //create ghost
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage);
  ghost.scale = 0.3; 
  
  
  
 doorsGroup = new Group();
 climbersGroup = new Group();
 invisibleBlockGroup = new Group();
}

function draw(){
  background("white");
  spooky.play();
  
  console.log(tower.y);
  
  if(gameState === "play"){
         if(keyDown("space")){
         ghost.velocityY = -10;

         }
  //add gravity to ghost
  ghost.velocityY = ghost.velocityY + 0.8;
  
      if(keyDown("left")){
         ghost.x = ghost.x - 3;

         }
  
      if(keyDown("right")){
         ghost.x = ghost.x + 3;

         }
         if(tower.y > 400){
         tower.y = 300;

         }
    if(climbersGroup.isTouching(ghost)){
     ghost.velocityY = 0;
     
     }
    
      if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
         ghost.destroy();
         gameState === "end";
         }
    //spawnDoors
  spawnDoors();
  drawSprites();
}
      if(gameState === "end"){
         stroke("brown");
         fill("purple");
         textSize = 30;
         text("Game Over",230,250);
         }
} 
  
  
   
  
  
//creatingDoors
function spawnDoors(){
    if(frameCount % 240 === 0){
       door = createSprite(200,-50);
       door.addImage(doorImage);
      
       climber = createSprite(200,10);
       climber.addImage(climberImage);
      
      invisibleBlock = createSprite(200,15);
      invisibleBlock.width = climber.width;
      invisibleBlock.height = 2;
      invisibleBlock.x = door.x;
             
      door.x = Math.round(random(120,400));
      
      climber.x = door.x;
      door.velocityY = 1;
      climber.velocityY = 1;
      invisibleBlock.velocityY = 1;
      
      //assign lifetime to variable
      door.lifetime = 800;
      climber.lifetime = 800;
      invisibleBlock.lifetime = 800;
      
      ghost.depth = door.depth;
      ghost.depth ++;
      //invisibleBlock.debug = true;
      
      //add each door and climber to group
      doorsGroup.add(door);
      climbersGroup.add(climber);
      invisibleBlockGroup.add(invisibleBlock);
       }
  
  
}








