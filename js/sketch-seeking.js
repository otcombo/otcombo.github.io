p5.disableFriendlyErrors = true;

var play_it = 1,first_time = 1;
var color_bg;
var min_size, max_size, amount, gap, spd, dis;

function setup() {
  var container = select('#sketch');
  var canvas = createCanvas(container.width, container.height);
  canvas.parent('sketch');


    canvas.mouseOver(checkState);
    canvas.mouseOut(checkState);


  min_size = 100;
  max_size = 400;
  amount = TWO_PI;
  gap = 80;
  spd = 0;
  dis = 80;

}

function draw(){
  //Canvas position
  background('#F4F4F4');
  translate(width*0.7,height/2);
  rotate(PI/2*spd);
  fill('#C4C4C4');
  noStroke();
  rect(0,0,min_size,max_size);
  // noFill();
  // var t = millis() / 4000;
  // var w = abs(sin(t))*100;
  //
  // for (var t = millis() / 4000; t < amount+spd; t+=amount/gap) {
  //   push();
  //   stroke(168,168,168,255 * sin(2*t));
  //   translate(0,0, dis * sin(2*t))
  //   var w = min_size + max_size * abs(sin(t));
  //   ellipse(0,0, w, w);
  //   pop();
  // }
  //
  spd += 0.01;
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
