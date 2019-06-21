var sketch_seeking = function( p ) {
  let color_bg;
  // var min_size, max_size, amount, gap, spd, dis;

  p.setup = function()  {
    // var container = p.select('#section-sketch-seeking');
    // p.createCanvas(container.width, container.height, WEBGL);
    p.createCanvas(500,500,WEBGL);
    // canvas.parent('section-sketch-connect');
    //Define color
    color_bg = this.color('#F00000');
    // min_size = 100;
    // max_size = 400;
    // amount = TWO_PI;
    // gap = 80;
    // spd = 0;
    // dis = 80;
  };

  p.draw = function()  {
    //Canvas position
    p.background(color_bg);
    // p.rotateX(PI/5);
    // p.rotateY(PI/4);

    p.strokeWeight(1);
    // p.noFill();
    // var t = p.millis() / 4000;
    // var w = p.abs(p.sin(t))*100;
    p.ellipse(0,0,100,100);

    // for (var t = p.millis() / 4000; t < amount+spd; t+=amount/gap) {
    //   p.push();
    //   p.stroke(168,168,168,255 * p.sin(2*t));
    //   p.translate(0,0, dis * p.sin(2*t))
    //   var w = min_size + max_size * p.abs(p.sin(t));
    //   p.ellipse(0,0, w, w);
    //   p.pop();
    // }
    // spd += 0.005;
  };
};
var s = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var p5 = new p5(sketch_seeking, 'section-sketch-seeking');
