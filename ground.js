class Ground {
  constructor() {
    this.height = 125;
    this.topPixelCoord = 600 - this.height;
    this.pixelOffset = 0;
  }

  show() {
    for (var i = this.pixelOffset; i < canvas.width; i += groundSprite.width) {
      image(groundSprite, i, this.topPixelCoord, 0, 130);
      //ellipse(i,this.pixelOffset, 0, 130)
      console.log
    }
  }

  update() {
    this.pixelOffset -= panSpeed;
    if (this.pixelOffset <= -groundSprite.width) {
      this.pixelOffset += groundSprite.width;
    }
  }
}