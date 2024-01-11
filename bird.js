class Bird {
  constructor() {
    this.x = width / 3;
    this.y = height / 2;
    this.velocity = 0;
    this.gravity = 0.5; 
    this.flapHeight = -10; // how high the bird goes each flap
    this.flaps = [birdU, birdM, birdD]; // 3 images for flap animation cycle. See sketch.js lines 9-11
    this.alive = true;
    this.tilt = 45;
    this.h = 24;
    this.w = 34;
    this.score = 0;
  }

  checkCollision() {
    if (this.y + this.w / 2 > 470) { // checks collisions with the ground
      this.velocity = 0;
      this.alive = false;
      panSpeed = 0;
    }
  }

  death() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.tilt);
    image(birdD, 0, 0, this.w, this.h);
    pop();
    panSpeed = 0;
    this.alive = false;
  }

  show() { 
    if (this.alive) {
      this.animate();
    } else {
      this.death();
    }
  }

  update() {
    if (this.velocity < -10) {
      this.velocity = -10;
    } else {
      this.y += this.velocity;
    }
    this.velocity += this.gravity;
  }

  flap() {
    this.velocity += this.flapHeight;
  }

  animate() {  
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    if (this.velocity < 0) {  // controls the angle of the bird based on its velocity 
      rotate(-this.tilt);
    } else {
      rotate(this.tilt);
    }
    image(this.flaps[animateFrame], 0, 0, this.w, this.h);
    pop();

   // controls the speed of the "flap" animation
    if (frameCount % 5 === 0) {
      animateFrame++;
      if (animateFrame == 3) { // cycles through the 3 images in this.flaps
        animateFrame = 0;
      }
    }
  }
}
