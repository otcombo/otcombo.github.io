p5.disableFriendlyErrors = true;

var play_it = 1;
var size;

//============================================================

class BRUSH {
  constructor() {
    this.off1 = random(10);
    this.off2 = random(10);
    this.inc1 = 0.02;
    this.inc2 = 0.03;

    this.head = 5;
    this.weight = 10;
    this.shake = 6;
  }

  drawRect(posx, posy, width_, height_) {
    let w = width_ + this.head;
    let h = height_ + this.head;

    push();
    translate(posx, posy);


    //draw two horizontal lines;
    for (let x = 0; x < w; x++) {
      let y = noise(this.off1) * this.shake;

      ellipse(x, y, noise(this.off2) * this.weight, noise(this.off2) * this.weight);
      ellipse(x, y + height_, noise(this.off2) * this.weight, noise(this.off2) * this.weight);

      this.off1 += this.inc1;
      this.off2 += this.inc2;
    }

    //draw two vertical lines;
    for (let y = 0; y < h; y++) {
      let x = noise(this.off1) * this.shake;
      ellipse(x, y, noise(this.off2) * this.weight, noise(this.off2) * this.weight);
      ellipse(x + width_, y, noise(this.off2) * this.weight, noise(this.off2) * this.weight);
      this.off1 += this.inc1;
      this.off2 += this.inc2;
    }
    pop();
  }

  drawEllipse(posx, posy, width_, height_) {
    let w = width_ / 2;
    let h = height_ / 2;
    push();
    noStroke();
    translate(posx, posy);

    for (let x = w * -1; x < w; x += 0.5) {
      let y = sqrt(w * w - x * x);
      ellipse(x, y, noise(this.off1) * this.weight, noise(this.off1) * this.weight);
      ellipse(x, y * -1, noise(this.off2) * this.weight, noise(this.off2) * this.weight);
      this.off1 += this.inc1;
      this.off2 += this.inc2;
    }
    pop();
  }


  drawLine(posx, posy, length_, weight_) {


    push();
    noStroke();
    translate(posx, posy);

    for (let y = 0; y < length_; y++) {
      let x = noise(this.off1) * this.shake;
      ellipse(x, y, noise(this.off2) * weight_, noise(this.off2) * weight_);
      this.off1 += this.inc1;
      this.off2 += this.inc2;
    }
    pop();
  }
}

//============================================================

function setup() {
  var container = select('#sketch');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch');

  if (width > 800) {
    canvas.mouseOver(checkState);
    canvas.mouseOut(checkState);
  }

  background(255);
  smooth();
  noStroke();

  frameRate(8);

  size = 300;
  noiserect = new BRUSH();
}

//============================================================

function draw() {
  background('#0050EC');
  translate(width * 0.8, height * 0.3);
  rotate(PI / 4);

  // push();
  // fill(255);
  // rotate(PI / -2);
  // noiserect.drawLine(-5, 50, 55, 30);
  // pop();

  fill(255);
  noiserect.drawEllipse(0, 0, size, size);
  ellipse(random(2), random(2), size - random(4), size - random(5));

  fill('#002B7E');
  noiserect.drawEllipse(-30, 0, size, size);

  fill('#0050EC');
  rotate(PI / -2);
  noiserect.drawLine(-5, 70, 70, 20);
}

//============================================================

function checkState() {
  if (play_it) {
    loop();
    play_it = 0;
  } else {
    noLoop();
    play_it = 1;
  }
}
