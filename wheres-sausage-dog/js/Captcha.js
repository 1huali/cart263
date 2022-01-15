class Captcha extends Animal {

  constructor(x, y, image) {
    super(x, y, image);
    this.found = false,

      this.rotationSpeed = 0.25
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (mouseX > this.x - this.img.width / 2 &&
      mouseX < this.x + this.img.width / 2 &&
      mouseY > this.y - this.img.height / 2 &&
      mouseY < this.y + this.img.height / 2) {
        this.found=true;
        console.log(this.found);

      }
  }
} //end
