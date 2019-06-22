var color_bg;
var min_size, max_size, amount, gap, spd, dis;

function setup() {
    // var container = select('#section-sketch-seeking');
    // createCanvas(container.width, container.height, WEBGL);
    createCanvas(500,500,WEBGL);
    // canvas.parent('section-sketch-connect');
    //Define color
    color_bg = this.color('#F00000');
    min_size = 100;
    max_size = 400;
    amount = TWO_PI;
    gap = 80;
    spd = 0;
    dis = 80;
  };

function draw()  {
    //Canvas position
    background(color_bg);
    rotateX(PI/5);
    rotateY(PI/4);

    strokeWeight(1);
    // noFill();
    // var t = millis() / 4000;
    // var w = abs(sin(t))*100;
}

    for (var t = millis() / 4000; t < amount+spd; t+=amount/gap) {
      push();
      stroke(168,168,168,255 * sin(2*t));
      translate(0,0, dis * sin(2*t))
      var w = min_size + max_size * abs(sin(t));
      ellipse(0,0, w, w);
      pop();
    }
    spd += 0.005;
  };
};
