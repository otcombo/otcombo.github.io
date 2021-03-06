// Generated by CoffeeScript 1.7.1
var bg, layerA, layerB;

bg = new BackgroundLayer({
  backgroundColor: "#28AFFA"
});

layerA = new Layer({
  width: 80,
  height: 80,
  backgroundColor: "#fff",
  borderRadius: 4
});

layerA.center();

layerA.x -= 50;

layerB = new Layer({
  width: 80,
  height: 80,
  backgroundColor: "#fff",
  borderRadius: 50
});

layerB.center();

layerB.x += 50;

layerA.animate({
  properties: {
    rotation: 90
  },
  curve: "ease",
  time: 2,
  repeat: 1
});

layerB.animate({
  properties: {
    rotation: 180,
    borderRadius: 4
  },
  curve: "spring(200,50,0)",
  delay: 2
});
// Generated by CoffeeScript 1.7.1
var bg, layerA, layerB;

bg = new BackgroundLayer({
  backgroundColor: "#877DD7"
});

layerA = new Layer({
  width: 150,
  height: 150,
  backgroundColor: "#fff",
  borderRadius: 6
});

layerB = new Layer({
  width: 150,
  height: 150,
  backgroundColor: "#fff",
  borderRadius: 150
});

layerA.center();

layerB.center();

layerA.x -= 90;

layerB.x += 90;

layerA.animate({
  properties: {
    rotation: 90
  },
  curve: "ease"
});

layerB.animate({
  properties: {
    rotation: 90,
    borderRadius: 6
  },
  curve: "spring(200,30,0)",
  delay: 1
});
// Generated by CoffeeScript 1.7.1
var bg, layerA, layerB;

bg = new BackgroundLayer({
  backgroundColor: "#877DD7"
});

layerA = new Layer({
  width: 150,
  height: 150,
  backgroundColor: "#fff",
  borderRadius: 6
});

layerB = new Layer({
  width: 150,
  height: 150,
  backgroundColor: "#fff",
  borderRadius: 150
});

layerA.center();

layerB.center();

layerA.x -= 90;

layerB.x += 90;

layerA.animate({
  properties: {
    rotation: 90
  },
  curve: "ease"
});

layerB.animate({
  properties: {
    rotation: 90,
    borderRadius: 6
  },
  curve: "spring(200,30,0)",
  delay: 1
});
// Generated by CoffeeScript 1.7.1

// Generated by CoffeeScript 1.7.1
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


window.Resources = {"common-toast-spinner.png":{"path":"images\/common-toast-spinner.png","width":80,"height":80},"common-toast-done.png":{"path":"images\/common-toast-done.png","width":80,"height":80},"common-toast-fail.png":{"path":"images\/common-toast-fail.png","width":80,"height":80},"bg.jpg":{"path":"images\/bg.jpg","width":750,"height":1334},"framer-icon.png":{"path":"images\/framer-icon.png","width":256,"height":256}};

// Generated by CoffeeScript 1.7.1

