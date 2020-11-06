var PLAY = 1;
var END = 0;
var gameState = PLAY;
var survivalTime = 0;
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup, bananaGroup;
var score;
var ground;

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600, 400);

  ground = createSprite(200, 380, 3000, 20);

  monkey = createSprite(80, 145, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  // monkey.debug = true;
  bananaGroup = createGroup();
}

function draw() {
  background("white");
  textSize(15);

  if (gameState === PLAY) {
    survivalTime = Math.ceil(frameCount / frameRate())
    text("Survival Time: " + survivalTime, 50, 50);

    // score = score + Math.round(getFramRate() / 60);
    // text("Score: ")
    spawn_banana();
    spawn_obstacles();
    ground.velocityX = -4;
    ground.x = ground.width / 2;

    monkey.velocityY = 5;
    monkey.collide(ground);
    if (keyDown("space") && monkey.y >= 145) {
      monkey.velocityY = -5;
    }

  }
  drawSprites();
}

function spawn_banana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(580, Math.round(random(200, 320)), 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
  }
}

function spawn_obstacles() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(600, ground.y - 28, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    // console.log(obstacle.y);
  }

}