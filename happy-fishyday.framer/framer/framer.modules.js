require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"uisound":[function(require,module,exports){
exports.UISound = (function() {
  function UISound(src) {
    this.src = src;
    this.audio = document.createElement("audio");
    this.audio.setAttribute("webkit-playsinline", "true");
    this.audio.setAttribute("preload", "auto");
    this.audio.src = this.src;
  }

  UISound.prototype.stop = function() {
    this.audio.pause();
    return this.audio.currentTime = 0;
  };

  UISound.prototype.play = function() {
    this.stop();
    return this.audio.play();
  };

  return UISound;

})();


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2hhbmxpL0Ryb3Bib3gvRGVtby8wODE3IFZhbGVudGluZS5mcmFtZXIvbW9kdWxlcy91aXNvdW5kLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2hhbmxpL0Ryb3Bib3gvRGVtby8wODE3IFZhbGVudGluZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGV4cG9ydHMuVUlTb3VuZFxuICAgIGNvbnN0cnVjdG9yOiAoQHNyYykgLT5cbiAgICAgICAgQGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpXG4gICAgICAgIEBhdWRpby5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXQtcGxheXNpbmxpbmVcIiwgXCJ0cnVlXCIpXG4gICAgICAgIEBhdWRpby5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKVxuICAgICAgICBAYXVkaW8uc3JjID0gQHNyY1xuICAgICAgICBcbiAgICBzdG9wOiAtPlxuICAgICAgICBAYXVkaW8ucGF1c2UoKVxuICAgICAgICBAYXVkaW8uY3VycmVudFRpbWUgPSAwXG4gICAgcGxheTogLT5cbiAgICAgICAgQHN0b3AoKVxuICAgICAgICBAYXVkaW8ucGxheSgpIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FESUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBRFRaLE9BQU8sQ0FBQztFQUNHLGlCQUFDLEdBQUQ7SUFBQyxJQUFDLENBQUEsTUFBRDtJQUNWLElBQUMsQ0FBQSxLQUFELEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkI7SUFDVCxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0Isb0JBQXBCLEVBQTBDLE1BQTFDO0lBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLE1BQS9CO0lBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLEdBQWEsSUFBQyxDQUFBO0VBSkw7O29CQU1iLElBQUEsR0FBTSxTQUFBO0lBQ0YsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLENBQUE7V0FDQSxJQUFDLENBQUEsS0FBSyxDQUFDLFdBQVAsR0FBcUI7RUFGbkI7O29CQUdOLElBQUEsR0FBTSxTQUFBO0lBQ0YsSUFBQyxDQUFBLElBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFBO0VBRkUifQ==
