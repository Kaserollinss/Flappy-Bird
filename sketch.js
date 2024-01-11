let panSpeed = 3;
let animateFrame = 0;
let pipes = [];
let gameStarted = false;

function preload() {
  // Preload all game sprites
  bg = loadImage("sprites/background-day.png");
  groundSprite = loadImage("sprites/base.png");
  birdU = loadImage("sprites/yellowbird-upflap.png");
  birdM = loadImage("sprites/yellowbird-midflap.png");
  birdD = loadImage("sprites/yellowbird-downflap.png");
  bottomPipe = loadImage("sprites/pipe-green.png");
  topPipe = loadImage("sprites/top-pipe-green.png");
  endSprite = loadImage("sprites/gameover.png");
  scorePage = loadImage("sprites/scorePage.png");
  message = loadImage("sprites/message.png");

}
function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  textSize(40);

  bird = new Bird();
  pipes[0] = new Pipes(300); // initialize pipe sets 
  pipes[1] = new Pipes(500);
  pipes[2] = new Pipes(700);
  ground = new Ground();
}
function keyPressed() {
  if (key === " ") {
    gameStarted = true;
    if (bird.alive) {
      bird.flap();
    }
  }
}
function draw() { // Game loop
  if (gameStarted) {
    bird.tilt = 45;

   background(bg);
    for (let i = 0; i < pipes.length; i++) {
      pipes[i].show();
      pipes[i].update();
      pipes[i].passes(bird);
      if (pipes[i].hit(bird)) {
        bird.death();
      }
    }
    bird.show();
    bird.update();
    bird.checkCollision();
    ground.show();
    ground.update();
    endGame();
  } else {
    background(bg);
    push();
    imageMode(CENTER);
    image(message, width / 2, height / 2, 200, 200);
    pop();
    bird.show();
    bird.tilt = 0;
    text(bird.score, width / 2 - 12, height / 7);
    ground.show()
    ground.update();
  }
}
