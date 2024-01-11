class Bird {
  constructor() {
    this.x = width / 3;
    this.y = height / 2;
    this.velocity = 0;
    this.gravity = 0.5;
    this.flapHeight = -10;
    this.flaps = [birdU, birdM, birdD];
    this.alive = true;
    this.tilt = 45;
    this.h = 24;
    this.w = 34;
    this.score = 0;
  }

  checkCollision() {
    if (this.y + this.w / 2 > 470) {
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
    if (this.velocity < 0) {
      rotate(-this.tilt);
    } else {
      rotate(this.tilt);
    }
    image(this.flaps[animateFrame], 0, 0, this.w, this.h);
    pop();

    //if frame count % 3, increment sumthnig
    if (frameCount % 5 === 0) {
      animateFrame++;
      if (animateFrame == 3) {
        animateFrame = 0;
      }
    }
  }
}
