
//creating variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey ,monkey_running;
var banana ,bananaImage, bananaGroup,obstacle, obstacleImage,obstacleGroup;
var score=0;
var  ground_Img
function preload()
{
  ground_Img =loadImage("bg2.png")
 monkey_running =loadAnimation("mrio1.png","mrio2.png","mrio3.png");
  
bananaImage = loadImage("coin.png");
obstacleImage = loadImage("ob.png")



   
}
function setup() {
  createCanvas(1000, 400);
  
   ground=createSprite(400,355,10000,10)
  
 
  
  monkey=createSprite(100,350,900,10)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=2;
  monkey.debug=true
  monkey.setCollider("rectangle",0,0,20,50)
   bananaGroup=new Group ();     
  obstacleGroup=new Group ();
}

function draw() {
  background(ground_Img);
  monkey.velocityY = monkey.velocityY + 0.8
  text("score"+score ,300,300)
  
 //making monkey jump when space is pressed
if( gameState===PLAY){
   if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
      ground.visible=false
   }
   
 if(keyDown("space"))
  {
    monkey.velocityY=-12
   
  }
 spawnbanana();
spawnobstacle();
   
 
  
    
    
   if (score+score==10) {
     monkey.scale=0.2
   }


 if(monkey.isTouching(obstacleGroup))  {
   
   gameState=END
  }
  monkey.collide(ground);
  drawSprites()
}

   if (gameState === END) {
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  
     ground.velocityX = 0;
        monkey.velocityY = 0
  
   }
}
                                  

  
   function spawnbanana(){
if (World.frameCount%50===0){
banana=createSprite(500,200,10,2); 
 banana.x=Math.round(random(100,500)) 
banana.y = Math.round(random(80,120))
  banana.setlifetime=150;
  banana.velocityX=-3
banana.addImage( bananaImage );
  banana.scale=0.20     
  bananaGroup.add(banana);
}  
}  
  
 function spawnobstacle (){
if (World.frameCount%160===0){
obstacle=createSprite(500,280,300,2);
obstacle.setlifetime=150;
obstacle.velocityX=-3
obstacle.addImage( obstacleImage);
obstacle.scale=0.50
obstacleGroup.add(obstacle);
}  
    
}  
  
 
  































































