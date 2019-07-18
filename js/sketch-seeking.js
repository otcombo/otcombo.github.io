p5.disableFriendlyErrors = true;

var play_it = 1;
var time = 0;
var inc = 0.005;
var xoff = 0.1;
var yoff = 1;
var r = 200;

//============================================================

function setup() {
  var container = select('#sketch-seeking');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch-seeking');

  if (width > 800) {
    var c = select('#intro');
    c.mouseOver(checkState);
    c.mouseOut(checkState);
  }

  frameRate(60);
  angleMode(DEGREES);
  noFill();
}

//============================================================

function draw() {
  background(240);
  translate(width / 2, height * 0.3);

  for (var i = 0; i < 180; i += 3) {
    var w = 2 * r * pow(2, sin(time + i)) + cos(time + i) * sin(time + i) / tan(time + i);
    var x = r * noise(xoff, i / 200) * pow(2, cos(i)) + sin(i);
    var y = r * noise(yoff, i / 200) * pow(2, sin(i)) * cos(i);

    var col = map(i, 0, 90, 15, 0);
    stroke(0, col);
    ellipse(x, y, w, w);
  }

  for (var i = 0; i < 360; i += 2) {
    var w = 2 * r * pow(2, sin(time + i)) + cos(time + i) * sin(time + i) / tan(time + i);
    var x = r * noise(xoff, i / 200) * pow(2, sin(i)) + cos(i);
    var y = r * noise(yoff, i / 200) * pow(2, cos(i)) * sin(i);

    var col = map(i, 0, 360, 0, 10);
    stroke(0, col);
    ellipse(x, y, w, w);
  }
  time++;
  xoff += inc;
  yoff += inc;
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
