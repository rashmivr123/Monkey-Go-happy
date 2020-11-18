
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(600,400);
  
  monkey = createSprite(50,250,40,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
}


function draw() {
background("aqua");
  console.log(ground.x)
  
  text("Score :" + score , 300,100);
  score = score + Math.round((frameCount/60));
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  food();
  Obstacles();
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}
function food()
{
  if(frameCount % 80 === 0){
      banana = createSprite (600,250,40,10)
      banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.Lifetime = 200;
    
    monkey.depth = banana.depth +1;
    
 bananaGroup.add(banana);
  }

  
}
function Obstacles()
{
  if(frameCount % 300 === 0){
      obstacle = createSprite (800,320,10,30)
        obstacle.addImage(obstacleImage );
    obstacle.velocityX = -6;
    obstacle.scale = 0.15;
    
    obstacle.lifetime = 300;
 obstacleGroup.add(obstacle);
  }
}

