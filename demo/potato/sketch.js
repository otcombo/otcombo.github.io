var img;

function preload() {
  // img = loadImage('hamster.jpg');
  // img = loadImage('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
}

function setup() {
  createCanvas(100, 100);
  img = createImg('https://dss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png');
  img.hide();
  background(100);
  // loadImage('hamster.jpg', imageLoaded);
  // image(img, 0, 0);
}

function draw() {
  image(img, 0, 0, width, height);

}

// function imageLoaded(img) {
//   image(img, 0, 0);
// }