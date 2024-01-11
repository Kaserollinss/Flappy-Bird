let endGame = () => {
  x = width / 2;
  y = height / 4;
  scaleFactor = 1.2;
  w = 192 * scaleFactor;
  h = 42 * scaleFactor;
  w1 = 342 / 2.5;
  h1 = 450 / 2.5;
  if (bird.alive) {
    text(bird.score, x - 12, height / 7);
  } else {
  if (bird.velocity === 0 && bird.y > 450) {
      push();
      imageMode(CENTER);
      textSize(35);
      image(endSprite, x, y, w, h);
      image(scorePage, x, y * 2, w1, h1);
      text(bird.score, width / 2 - 8, height / 2 + 25);
      pop();
    }
  }
}
