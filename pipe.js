class Pipes {
  constructor(x) {
    this.x = width + x;
    this.bottomY = random(175, 425);
    this.pipeGap = -450;
    this.topY = this.bottomY + this.pipeGap;
    this.passed = false;
  }
  checkOnScreen() {
    if (this.x < 0 - bottomPipe.width) {
      return false;
    } else {
      return true;
    }
  }
  hit(bird) {
    if (
      bird.x + bird.w / 2 > this.x &&
      bird.x - bird.w / 2 < this.x + bottomPipe.width
    ) {
      if (bird.y + bird.h/2 > this.bottomY || bird.y - bird.h/2 < this.topY + topPipe.height) {
        return true;
      }
    }
    return false;
  }
  passes(bird) {
    if (bird.x > this.x + bottomPipe.width / 2 && this.passed === false) {
      this.passed = true;
      bird.score += 1;
      console.log(bird.score);
    }
  }
  show() {
    image(bottomPipe, this.x, this.bottomY);
    image(topPipe, this.x, this.topY);
  }
  update() {
    this.x -= panSpeed;
    if (this.checkOnScreen() === false) {
      this.x = 600 - bottomPipe.width;
      this.bottomY = random(175, 425);
      this.pipeGap = -450;
      this.topY = this.bottomY + this.pipeGap;
      this.passed = false;
    }
  }
}
