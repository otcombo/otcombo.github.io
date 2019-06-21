var color_bg;
var min_size, max_size, amount, gap, spd, dis;

function setup() {
  var container = select('#section-sketch-seeking');
  var canvas = createCanvas(container.width, container.height, WEBGL);
  canvas.parent('section-sketch-seeking');

  //Define color

}

function draw() {
  noFill();
  strokeWeight(35);

  var particlestor = [];

  var Particle = function(position) {
      this.position = position.get();
      this.LiveT = 255.0;
      this.createCanvas = 0;
  };
  Particle.prototype.run = function() {
      this.position.y+= (width/2-this.position.y)*0.02;
      this.position.x+= (height/2-this.position.x)*0.02;
      this.createCanvas+=3.5;
      stroke(constrain(this.createCanvas/2.2,0,250));
      ellipse(this.position.x, this.position.y, this.createCanvas, this.createCanvas);
  };
  Particle.prototype.isDead = function() {
      if(this.createCanvas>=700){
          return true;
      }
  };
  var Walker = function() {
      this.x = width/2;
      this.y = height/2;
      this.tx = 0;
      this.ty = 10000;
      this.t=0;
  };
  Walker.prototype.display = function() {
      this.t++;
      if(this.t>=3){
          this.t=0;
          particlestor.push(new Particle(new var(this.x, this.y)));
      }
  };
  Walker.prototype.walk = function() {
      this.x = map(noise(this.tx), 0, 1, -400, 800);
      this.y = map(noise(this.ty), 0, 1, -400, 800);
      this.tx += 0.003;
      this.ty += 0.003;
  };
  var w = new Walker();
  frameRate()(60);
  draw = function() {
  		background(250);

      w.walk();
      w.display();
      for(var i = particlestor.length-1; i >= 0; i--) {
          var p = particlestor[i];
          p.run();
          if (p.isDead()) {
              particlestor.splice(i, 1);
          }
      }
  };

}
