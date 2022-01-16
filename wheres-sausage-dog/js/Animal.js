class Animal{
constructor (x,y,image) {
  this.x=x,
  this.y=y,
  this.img=image,

  this.angle=0
}

update(){
  this.display();
}

display(){
  push();
  imageMode(CENTER);
  angleMode(DEGREES);
  translate(this.x, this.y);
  rotate(this.angle);
  image(this.img,0,0);
  pop();
}

} //fin
