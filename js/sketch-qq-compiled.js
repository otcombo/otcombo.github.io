p5.disableFriendlyErrors=!0;var play_it=1,size,BRUSH=function(){this.off1=random(10);this.off2=random(10);this.inc1=.02;this.inc2=.03;this.head=5;this.weight=10;this.shake=6};
BRUSH.prototype.drawRect=function(a,b,d,c){var e=d+this.head,f=c+this.head;push();translate(a,b);for(a=0;a<e;a++)b=noise(this.off1)*this.shake,ellipse(a,b,noise(this.off2)*this.weight,noise(this.off2)*this.weight),ellipse(a,b+c,noise(this.off2)*this.weight,noise(this.off2)*this.weight),this.off1+=this.inc1,this.off2+=this.inc2;for(c=0;c<f;c++)e=noise(this.off1)*this.shake,ellipse(e,c,noise(this.off2)*this.weight,noise(this.off2)*this.weight),ellipse(e+d,c,noise(this.off2)*this.weight,noise(this.off2)*
this.weight),this.off1+=this.inc1,this.off2+=this.inc2;pop()};BRUSH.prototype.drawEllipse=function(a,b,d,c){d/=2;push();noStroke();translate(a,b);for(a=-1*d;a<d;a+=.5)b=sqrt(d*d-a*a),ellipse(a,b,noise(this.off1)*this.weight,noise(this.off1)*this.weight),ellipse(a,-1*b,noise(this.off2)*this.weight,noise(this.off2)*this.weight),this.off1+=this.inc1,this.off2+=this.inc2;pop()};
BRUSH.prototype.drawLine=function(a,b,d,c){push();noStroke();translate(a,b);for(a=0;a<d;a++)b=noise(this.off1)*this.shake,ellipse(b,a,noise(this.off2)*c,noise(this.off2)*c),this.off1+=this.inc1,this.off2+=this.inc2;pop()};function setup(){var a=select("#sketch");a=createCanvas(a.width,a.height);a.parent("sketch");a.mouseOver(checkState);a.mouseOut(checkState);background(255);smooth();noStroke();frameRate(8);size=300;noiserect=new BRUSH}
function draw(){background("#0050EC");translate(.8*width,.3*height);rotate(PI/4);fill(255);noiserect.drawEllipse(0,0,size,size);ellipse(random(2),random(2),size-random(4),size-random(5));fill("#002B7E");noiserect.drawEllipse(-30,0,size,size);fill("#0050EC");rotate(PI/-2);noiserect.drawLine(-5,70,70,20)}function checkState(){play_it?(loop(),play_it=0):(noLoop(),play_it=1)};