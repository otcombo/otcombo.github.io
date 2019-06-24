var canvas, play_it = 1;

var n = 10000;

var m = new Array(n);
var x = new Array(n);
var y = new Array(n);
var vx = new Array(n);
var vy = new Array(n);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function setup() {
  canvas = createCanvas(800,800,WEBGL);
  fill(0, 32);
  reset();
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function draw() {
  noStroke();
  rect(0, 0, width, height);

  for (var i = 0; i < n; i++) {
    var dx = mouseX - x[i];
    var dy = mouseY - y[i];

    var d = sqrt(dx*dx + dy*dy);
    if (d < 1) d = 1;

    var f = sin(d * 0.04) * m[i] / d;

    vx[i] = vx[i] * 0.5 + f * dx;
    vy[i] = vy[i] * 0.5 + f * dy;
  }

  for (var t = 0; t < n; t++) {
    x[t] += vx[t];
    y[t] += vy[t];

    if (x[t] < 0) x[t] = width;
    else if (x[t] > width) x[t] = 0;

    if (y[t] < 0) y[t] = height;
    else if (y[t] > height) y[t] = 0;

    if (m[t] < 0) stroke(128, 128, 255);
    else stroke(0, 255, 255);

    point(x[t], y[t]);
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function reset() {
  for (var i = 0; i < n; i++) {
    m[i] = randomGaussian() * 16;
    x[i] = random(width);
    y[i] = random(height);
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mousePressed() {
  reset();
}
