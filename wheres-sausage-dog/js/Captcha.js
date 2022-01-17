class Captcha extends Animal {

  constructor(x, y, image) {
    super(x, y, image);
    this.found = false,
      this.rotationSpeed = 10,
      this.botAlert = false
  }

  update() {
    super.update();

    if (this.found) {
      // this.showMessage();
      this.angle += this.rotationSpeed;
    }
  }

  showMessage() {
    if (this.botAlert == true) {
        this.botAlert = false;
      setTimeout(function(){
      window.alert('MESSAGE: You have been successfully verified.');
  },1000)
  }
}

  mousePressed() {
    if (mouseX > this.x - this.img.width / 2 &&
      mouseX < this.x + this.img.width / 2 &&
      mouseY > this.y - this.img.height / 2 &&
      mouseY < this.y + this.img.height / 2) {
      this.found = true;
      this.botAlert = true;
      console.log(this.found);

    }
  }
} //end
