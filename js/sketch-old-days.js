p5.disableFriendlyErrors = true;

var play_it = 1;
var size, cols, rows;
var xoff, yoff, zoff, inc;

//============================================================

function setup() {
  var container = select('#sketch');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch');

  if (width > 800) {
    canvas.mouseOver(checkState);
    canvas.mouseOut(checkState);
  }
  size = 40;
  cols = width / size;
  rows = height / size;
  stroke(255);
  noFill();


  frameRate(10);
  inc = 0.1;
  zoff = 0;
}

//============================================================

function draw() {
  background(0);
  yoff = 0;


  let color_off_1 = random(10);
  let color_off_2 = random(10);
  let line_1 = random(width);
  let line_2 = random(width);
  for (var y = 0; y <= height; y++) {
    push();
    stroke(255, noise(color_off_1) * 80);
    point(line_1, y);
    stroke(255, noise(color_off_2) * 120);
    point(line_2, y);
    pop();
    color_off_1 += inc;
    color_off_2 += inc * 2;
  }

  for (var x = 0; x <= cols; x++) {


    push();
    stroke(255, random(255));
    point(random(width), random(height));
    pop();



    xoff = 0;
    for (var y = 0; y <= rows; y++) {
      noise_size = map(noise(xoff, yoff, zoff), 0, 1, -1, 1) * size;

      push();
      noStroke();
      fill(255, 20);
      translate(x * size, y * size);
      ellipse(0, 0, noise_size, noise_size);
      pop();

      xoff += inc;
    }
    yoff += inc;
  }

  zoff += 0.005;
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
