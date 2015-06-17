require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}],"shortcuts":[function(require,module,exports){

/*
  Shortcuts for Framer 1.0
  http://github.com/facebook/shortcuts-for-framer

  Copyright (c) 2014, Facebook, Inc.
  All rights reserved.

  Readme:
  https://github.com/facebook/shortcuts-for-framer

  License:
  https://github.com/facebook/shortcuts-for-framer/blob/master/LICENSE.md
 */

/*
  CONFIGURATION
 */
var shortcuts;

shortcuts = {};

Framer.Defaults.FadeAnimation = {
  curve: "bezier-curve",
  time: 0.2
};

Framer.Defaults.SlideAnimation = {
  curve: "spring(400,40,0)"
};


/*
  LOOP ON EVERY LAYER

  Shorthand for applying a function to every layer in the document.

  Example:
  ```shortcuts.everyLayer(function(layer) {
    layer.visible = false;
  });```
 */

shortcuts.everyLayer = function(fn) {
  var _layer, layerName, results1;
  results1 = [];
  for (layerName in window.Layers) {
    _layer = window.Layers[layerName];
    results1.push(fn(_layer));
  }
  return results1;
};


/*
  SHORTHAND FOR ACCESSING LAYERS

  Convert each layer coming from the exporter into a Javascript object for shorthand access.

  This has to be called manually in Framer3 after you've ran the importer.

  myLayers = Framer.Importer.load("...")
  shortcuts.initialize(myLayers)

  If you have a layer in your PSD/Sketch called "NewsFeed", this will create a global Javascript variable called "NewsFeed" that you can manipulate with Framer.

  Example:
  `NewsFeed.visible = false;`

  Notes:
  Javascript has some names reserved for internal function that you can't override (for ex. )
  If you call initialize without anything, it will use all currently available layers.
 */

shortcuts.initialize = function(layers) {
  var layer;
  if (!layers) {
    layer = Framer.CurrentContext._layerList;
  }
  window.Layers = layers;
  return shortcuts.everyLayer(function(layer) {
    var sanitizedLayerName;
    sanitizedLayerName = layer.name.replace(/[-+!?:*\[\]\(\)\/]/g, '').trim().replace(/\s/g, '_');
    window[sanitizedLayerName] = layer;
    shortcuts.saveOriginalFrame(layer);
    return shortcuts.initializeTouchStates(layer);
  });
};


/*
  FIND CHILD LAYERS BY NAME

  Retrieves subLayers of selected layer that have a matching name.

  getChild: return the first sublayer whose name includes the given string
  getChildren: return all subLayers that match

  Useful when eg. iterating over table cells. Use getChild to access the button found in each cell. This is **case insensitive**.

  Example:
  `topLayer = NewsFeed.getChild("Top")` Looks for layers whose name matches Top. Returns the first matching layer.

  `childLayers = Table.getChildren("Cell")` Returns all children whose name match Cell in an array.
 */

Layer.prototype.getChild = function(needle, recursive) {
  var i, j, len, len1, ref, ref1, subLayer;
  if (recursive == null) {
    recursive = false;
  }
  ref = this.subLayers;
  for (i = 0, len = ref.length; i < len; i++) {
    subLayer = ref[i];
    if (subLayer.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
      return subLayer;
    }
  }
  if (recursive) {
    ref1 = this.subLayers;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      subLayer = ref1[j];
      if (subLayer.getChild(needle, recursive)) {
        return subLayer.getChild(needle, recursive);
      }
    }
  }
};

Layer.prototype.getChildren = function(needle, recursive) {
  var i, j, len, len1, ref, ref1, results, subLayer;
  if (recursive == null) {
    recursive = false;
  }
  results = [];
  if (recursive) {
    ref = this.subLayers;
    for (i = 0, len = ref.length; i < len; i++) {
      subLayer = ref[i];
      results = results.concat(subLayer.getChildren(needle, recursive));
    }
    if (this.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
      results.push(this);
    }
    return results;
  } else {
    ref1 = this.subLayers;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      subLayer = ref1[j];
      if (subLayer.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
        results.push(subLayer);
      }
    }
    return results;
  }
};


/*
  CONVERT A NUMBER RANGE TO ANOTHER

  Converts a number within one range to another range

  Example:
  We want to map the opacity of a layer to its x location.

  The opacity will be 0 if the X coordinate is 0, and it will be 1 if the X coordinate is 640. All the X coordinates in between will result in intermediate values between 0 and 1.

  `myLayer.opacity = convertRange(0, 640, myLayer.x, 0, 1)`

  By default, this value might be outside the bounds of NewMin and NewMax if the OldValue is outside OldMin and OldMax. If you want to cap the final value to NewMin and NewMax, set capped to true.
  Make sure NewMin is smaller than NewMax if you're using this. If you need an inverse proportion, try swapping OldMin and OldMax.
 */

shortcuts.convertRange = function(OldMin, OldMax, OldValue, NewMin, NewMax, capped) {
  var NewRange, NewValue, OldRange;
  OldRange = OldMax - OldMin;
  NewRange = NewMax - NewMin;
  NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
  if (capped) {
    if (NewValue > NewMax) {
      return NewMax;
    } else if (NewValue < NewMin) {
      return NewMin;
    } else {
      return NewValue;
    }
  } else {
    return NewValue;
  }
};


/*
  ORIGINAL FRAME

  Stores the initial location and size of a layer in the "originalFrame" attribute, so you can revert to it later on.

  Example:
  The x coordinate of MyLayer is initially 400 (from the PSD)

  ```MyLayer.x = 200; // now we set it to 200.
  MyLayer.x = MyLayer.originalFrame.x // now we set it back to its original value, 400.```
 */

shortcuts.saveOriginalFrame = function(layer) {
  return layer.originalFrame = layer.frame;
};


/*
  SHORTHAND HOVER SYNTAX

  Quickly define functions that should run when I hover over a layer, and hover out.

  Example:
  `MyLayer.hover(function() { OtherLayer.show() }, function() { OtherLayer.hide() });`
 */

Layer.prototype.hover = function(enterFunction, leaveFunction) {
  this.on('mouseenter', enterFunction);
  return this.on('mouseleave', leaveFunction);
};


/*
  SHORTHAND TAP SYNTAX

  Instead of `MyLayer.on(Events.TouchEnd, handler)`, use `MyLayer.tap(handler)`
 */

Layer.prototype.tap = function(handler) {
  return this.on(Events.TouchEnd, handler);
};


/*
  SHORTHAND CLICK SYNTAX

  Instead of `MyLayer.on(Events.Click, handler)`, use `MyLayer.click(handler)`
 */

Layer.prototype.click = function(handler) {
  return this.on(Events.Click, handler);
};


/*
  SHORTHAND ANIMATION SYNTAX

  A shorter animation syntax that mirrors the jQuery syntax:
  layer.animate(properties, [time], [curve], [callback])

  All parameters except properties are optional and can be omitted.

  Old:
  ```MyLayer.animate({
    properties: {
      x: 500
    },
    time: 500,
    curve: 'bezier-curve'
  })```

  New:
  ```MyLayer.animateTo({
    x: 500
  })```

  Optionally (with 1000ms duration and spring):
    ```MyLayer.animateTo({
    x: 500
  }, 1000, "spring(100,10,0)")
 */

Layer.prototype.animateTo = function(properties, first, second, third) {
  var callback, curve, thisLayer, time;
  thisLayer = this;
  time = curve = callback = null;
  if (typeof first === "number") {
    time = first;
    if (typeof second === "string") {
      curve = second;
      callback = third;
    }
    if (typeof second === "function") {
      callback = second;
    }
  } else if (typeof first === "string") {
    curve = first;
    if (typeof second === "function") {
      callback = second;
    }
  } else if (typeof first === "function") {
    callback = first;
  }
  if ((time != null) && (curve == null)) {
    curve = 'bezier-curve';
  }
  if (curve == null) {
    curve = Framer.Defaults.Animation.curve;
  }
  if (time == null) {
    time = Framer.Defaults.Animation.time;
  }
  thisLayer.animationTo = new Animation({
    layer: thisLayer,
    properties: properties,
    curve: curve,
    time: time
  });
  thisLayer.animationTo.on('start', function() {
    return thisLayer.isAnimating = true;
  });
  thisLayer.animationTo.on('end', function() {
    thisLayer.isAnimating = null;
    if (callback != null) {
      return callback();
    }
  });
  return thisLayer.animationTo.start();
};


/*
  ANIMATE MOBILE LAYERS IN AND OUT OF THE VIEWPORT

  Shorthand syntax for animating layers in and out of the viewport. Assumes that the layer you are animating is a whole screen and has the same dimensions as your container.

  Enable the device preview in Framer Studio to use this – it lets this script figure out what the bounds of your screen are.

  Example:
  * `MyLayer.slideToLeft()` will animate the layer **to** the left corner of the screen (from its current position)

  * `MyLayer.slideFromLeft()` will animate the layer into the viewport **from** the left corner (from x=-width)

  Configuration:
  * (By default we use a spring curve that approximates iOS. To use a time duration, change the curve to bezier-curve.)
  * Framer.Defaults.SlideAnimation.time
  * Framer.Defaults.SlideAnimation.curve


  How to read the configuration:
  ```slideFromLeft:
    property: "x"     // animate along the X axis
    factor: "width"
    from: -1          // start value: outside the left corner ( x = -width_phone )
    to: 0             // end value: inside the left corner ( x = width_layer )
  ```
 */

shortcuts.slideAnimations = {
  slideFromLeft: {
    property: "x",
    factor: "width",
    from: -1,
    to: 0
  },
  slideToLeft: {
    property: "x",
    factor: "width",
    to: -1
  },
  slideFromRight: {
    property: "x",
    factor: "width",
    from: 1,
    to: 0
  },
  slideToRight: {
    property: "x",
    factor: "width",
    to: 1
  },
  slideFromTop: {
    property: "y",
    factor: "height",
    from: -1,
    to: 0
  },
  slideToTop: {
    property: "y",
    factor: "height",
    to: -1
  },
  slideFromBottom: {
    property: "y",
    factor: "height",
    from: 1,
    to: 0
  },
  slideToBottom: {
    property: "y",
    factor: "height",
    to: 1
  }
};

_.each(shortcuts.slideAnimations, function(opts, name) {
  return Layer.prototype[name] = function(time) {
    var _animationConfig, _curve, _factor, _phone, _property, _time, err, ref, ref1;
    _phone = (ref = Framer.Device) != null ? (ref1 = ref.screen) != null ? ref1.frame : void 0 : void 0;
    if (!_phone) {
      err = "Please select a device preview in Framer Studio to use the slide preset animations.";
      print(err);
      console.log(err);
      return;
    }
    _property = opts.property;
    _factor = _phone[opts.factor];
    if (opts.from != null) {
      this[_property] = opts.from * _factor;
    }
    _animationConfig = {};
    _animationConfig[_property] = opts.to * _factor;
    if (time) {
      _time = time;
      _curve = "bezier-curve";
    } else {
      _time = Framer.Defaults.SlideAnimation.time;
      _curve = Framer.Defaults.SlideAnimation.curve;
    }
    return this.animate({
      properties: _animationConfig,
      time: _time,
      curve: _curve
    });
  };
});


/*
  EASY FADE IN / FADE OUT

  .show() and .hide() are shortcuts to affect opacity and pointer events. This is essentially the same as hiding with `visible = false` but can be animated.

  .fadeIn() and .fadeOut() are shortcuts to fade in a hidden layer, or fade out a visible layer.

  These shortcuts work on individual layer objects as well as an array of layers.

  Example:
  * `MyLayer.fadeIn()` will fade in MyLayer using default timing.
  * `[MyLayer, OtherLayer].fadeOut(4)` will fade out both MyLayer and OtherLayer over 4 seconds.

  To customize the fade animation, change the variables time and curve inside `Framer.Defaults.FadeAnimation`.
 */

Layer.prototype.show = function() {
  this.opacity = 1;
  this.style.pointerEvents = 'auto';
  return this;
};

Layer.prototype.hide = function() {
  this.opacity = 0;
  this.style.pointerEvents = 'none';
  return this;
};

Layer.prototype.fadeIn = function(time) {
  if (time == null) {
    time = Framer.Defaults.FadeAnimation.time;
  }
  if (this.opacity === 1) {
    return;
  }
  if (!this.visible) {
    this.opacity = 0;
    this.visible = true;
  }
  return this.animateTo({
    opacity: 1
  }, time, Framer.Defaults.FadeAnimation.curve);
};

Layer.prototype.fadeOut = function(time) {
  var that;
  if (time == null) {
    time = Framer.Defaults.FadeAnimation.time;
  }
  if (this.opacity === 0) {
    return;
  }
  that = this;
  return this.animateTo({
    opacity: 0
  }, time, Framer.Defaults.FadeAnimation.curve, function() {
    return that.style.pointerEvents = 'none';
  });
};

_.each(['show', 'hide', 'fadeIn', 'fadeOut'], function(fnString) {
  return Object.defineProperty(Array.prototype, fnString, {
    enumerable: false,
    value: function(time) {
      _.each(this, function(layer) {
        if (layer instanceof Layer) {
          return Layer.prototype[fnString].call(layer, time);
        }
      });
      return this;
    }
  });
});


/*
  EASY HOVER AND TOUCH/CLICK STATES FOR LAYERS

  By naming your layer hierarchy in the following way, you can automatically have your layers react to hovers, clicks or taps.

  Button_touchable
  - Button_default (default state)
  - Button_down (touch/click state)
  - Button_hover (hover)
 */

shortcuts.initializeTouchStates = function(layer) {
  var _default, _down, _hover, hitTarget;
  _default = layer.getChild('default');
  if (layer.name.toLowerCase().indexOf('touchable') && _default) {
    if (!Framer.Utils.isMobile()) {
      _hover = layer.getChild('hover');
    }
    _down = layer.getChild('down');
    if (_hover != null) {
      _hover.hide();
    }
    if (_down != null) {
      _down.hide();
    }
    if (_hover || _down) {
      hitTarget = new Layer({
        background: 'transparent',
        frame: _default.frame
      });
      hitTarget.superLayer = layer;
      hitTarget.bringToFront();
    }
    if (_hover) {
      layer.hover(function() {
        _default.hide();
        return _hover.show();
      }, function() {
        _default.show();
        return _hover.hide();
      });
    }
    if (_down) {
      layer.on(Events.TouchStart, function() {
        _default.hide();
        if (_hover != null) {
          _hover.hide();
        }
        return _down.show();
      });
      return layer.on(Events.TouchEnd, function() {
        _down.hide();
        if (_hover) {
          return _hover.show();
        } else {
          return _default.show();
        }
      });
    }
  }
};

_.extend(exports, shortcuts);



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3Rjb21iby9Ecm9wYm94L0RlbW8vTW9tZW50LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi9Vc2Vycy9vdGNvbWJvL0Ryb3Bib3gvRGVtby9Nb21lbnQuZnJhbWVyL21vZHVsZXMvc2hvcnRjdXRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLFlBQWhCLENBQUE7O0FBQUEsT0FFTyxDQUFDLFVBQVIsR0FBcUIsU0FBQSxHQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTixFQURvQjtBQUFBLENBRnJCLENBQUE7O0FBQUEsT0FLTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMbEIsQ0FBQTs7Ozs7QUNKQTtBQUFBOzs7Ozs7Ozs7Ozs7R0FBQTtBQWlCQTtBQUFBOztHQWpCQTtBQUFBLElBQUEsU0FBQTs7QUFBQSxTQXFCQSxHQUFZLEVBckJaLENBQUE7O0FBQUEsTUF1Qk0sQ0FBQyxRQUFRLENBQUMsYUFBaEIsR0FDRTtBQUFBLEVBQUEsS0FBQSxFQUFPLGNBQVA7QUFBQSxFQUNBLElBQUEsRUFBTSxHQUROO0NBeEJGLENBQUE7O0FBQUEsTUEyQk0sQ0FBQyxRQUFRLENBQUMsY0FBaEIsR0FDRTtBQUFBLEVBQUEsS0FBQSxFQUFPLGtCQUFQO0NBNUJGLENBQUE7O0FBZ0NBO0FBQUE7Ozs7Ozs7OztHQWhDQTs7QUFBQSxTQTBDUyxDQUFDLFVBQVYsR0FBdUIsU0FBQyxFQUFELEdBQUE7QUFDckIsTUFBQSwyQkFBQTtBQUFBO09BQUEsMEJBQUEsR0FBQTtBQUNFLElBQUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxNQUFPLENBQUEsU0FBQSxDQUF2QixDQUFBO0FBQUEsa0JBQ0EsRUFBQSxDQUFHLE1BQUgsRUFEQSxD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LElBQVQsQ0FBQSxDQUFBLENBQUE7ZUFDQSxNQUFNLENBQUMsSUFBUCxDQUFBLEVBRkE7TUFBQSxDQUhGLENBQUEsQ0FERjtLQWxCQTtBQTJCQSxJQUFBLElBQUcsS0FBSDtBQUNFLE1BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxNQUFNLENBQUMsVUFBaEIsRUFBNEIsU0FBQSxHQUFBO0FBQzFCLFFBQUEsUUFBUSxDQUFDLElBQVQsQ0FBQSxDQUFBLENBQUE7O1VBQ0EsTUFBTSxDQUFFLElBQVIsQ0FBQTtTQURBO2VBRUEsS0FBSyxDQUFDLElBQU4sQ0FBQSxFQUgwQjtNQUFBLENBQTVCLENBQUEsQ0FBQTthQUtBLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLFFBQWhCLEVBQTBCLFNBQUEsR0FBQTtBQUN4QixRQUFBLEtBQUssQ0FBQyxJQUFOLENBQUEsQ0FBQSxDQUFBO0FBRUEsUUFBQSxJQUFHLE1BQUg7aUJBRUUsTUFBTSxDQUFDLElBQVAsQ0FBQSxFQUZGO1NBQUEsTUFBQTtpQkFJRSxRQUFRLENBQUMsSUFBVCxDQUFBLEVBSkY7U0FId0I7TUFBQSxDQUExQixFQU5GO0tBN0JGO0dBSGdDO0FBQUEsQ0F6YmxDLENBQUE7O0FBQUEsQ0F5ZUMsQ0FBQyxNQUFGLENBQVMsT0FBVCxFQUFrQixTQUFsQixDQXplQSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIyNcbiAgU2hvcnRjdXRzIGZvciBGcmFtZXIgMS4wXG4gIGh0dHA6Ly9naXRodWIuY29tL2ZhY2Vib29rL3Nob3J0Y3V0cy1mb3ItZnJhbWVyXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gIFJlYWRtZTpcbiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3Nob3J0Y3V0cy1mb3ItZnJhbWVyXG5cbiAgTGljZW5zZTpcbiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3Nob3J0Y3V0cy1mb3ItZnJhbWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiMjI1xuXG5cblxuXG4jIyNcbiAgQ09ORklHVVJBVElPTlxuIyMjXG5cbnNob3J0Y3V0cyA9IHt9XG5cbkZyYW1lci5EZWZhdWx0cy5GYWRlQW5pbWF0aW9uID1cbiAgY3VydmU6IFwiYmV6aWVyLWN1cnZlXCJcbiAgdGltZTogMC4yXG5cbkZyYW1lci5EZWZhdWx0cy5TbGlkZUFuaW1hdGlvbiA9XG4gIGN1cnZlOiBcInNwcmluZyg0MDAsNDAsMClcIlxuXG5cblxuIyMjXG4gIExPT1AgT04gRVZFUlkgTEFZRVJcblxuICBTaG9ydGhhbmQgZm9yIGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gZXZlcnkgbGF5ZXIgaW4gdGhlIGRvY3VtZW50LlxuXG4gIEV4YW1wbGU6XG4gIGBgYHNob3J0Y3V0cy5ldmVyeUxheWVyKGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICB9KTtgYGBcbiMjI1xuc2hvcnRjdXRzLmV2ZXJ5TGF5ZXIgPSAoZm4pIC0+XG4gIGZvciBsYXllck5hbWUgb2Ygd2luZG93LkxheWVyc1xuICAgIF9sYXllciA9IHdpbmRvdy5MYXllcnNbbGF5ZXJOYW1lXVxuICAgIGZuIF9sYXllclxuXG5cbiMjI1xuICBTSE9SVEhBTkQgRk9SIEFDQ0VTU0lORyBMQVlFUlNcblxuICBDb252ZXJ0IGVhY2ggbGF5ZXIgY29taW5nIGZyb20gdGhlIGV4cG9ydGVyIGludG8gYSBKYXZhc2NyaXB0IG9iamVjdCBmb3Igc2hvcnRoYW5kIGFjY2Vzcy5cblxuICBUaGlzIGhhcyB0byBiZSBjYWxsZWQgbWFudWFsbHkgaW4gRnJhbWVyMyBhZnRlciB5b3UndmUgcmFuIHRoZSBpbXBvcnRlci5cblxuICBteUxheWVycyA9IEZyYW1lci5JbXBvcnRlci5sb2FkKFwiLi4uXCIpXG4gIHNob3J0Y3V0cy5pbml0aWFsaXplKG15TGF5ZXJzKVxuXG4gIElmIHlvdSBoYXZlIGEgbGF5ZXIgaW4geW91ciBQU0QvU2tldGNoIGNhbGxlZCBcIk5ld3NGZWVkXCIsIHRoaXMgd2lsbCBjcmVhdGUgYSBnbG9iYWwgSmF2YXNjcmlwdCB2YXJpYWJsZSBjYWxsZWQgXCJOZXdzRmVlZFwiIHRoYXQgeW91IGNhbiBtYW5pcHVsYXRlIHdpdGggRnJhbWVyLlxuXG4gIEV4YW1wbGU6XG4gIGBOZXdzRmVlZC52aXNpYmxlID0gZmFsc2U7YFxuXG4gIE5vdGVzOlxuICBKYXZhc2NyaXB0IGhhcyBzb21lIG5hbWVzIHJlc2VydmVkIGZvciBpbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHlvdSBjYW4ndCBvdmVycmlkZSAoZm9yIGV4LiApXG4gIElmIHlvdSBjYWxsIGluaXRpYWxpemUgd2l0aG91dCBhbnl0aGluZywgaXQgd2lsbCB1c2UgYWxsIGN1cnJlbnRseSBhdmFpbGFibGUgbGF5ZXJzLlxuIyMjXG5zaG9ydGN1dHMuaW5pdGlhbGl6ZSA9IChsYXllcnMpIC0+XG5cbiAgbGF5ZXIgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyTGlzdCBpZiBub3QgbGF5ZXJzXG5cbiAgd2luZG93LkxheWVycyA9IGxheWVyc1xuXG4gIHNob3J0Y3V0cy5ldmVyeUxheWVyIChsYXllcikgLT5cbiAgICBzYW5pdGl6ZWRMYXllck5hbWUgPSBsYXllci5uYW1lLnJlcGxhY2UoL1stKyE/OipcXFtcXF1cXChcXClcXC9dL2csICcnKS50cmltKCkucmVwbGFjZSgvXFxzL2csICdfJylcbiAgICB3aW5kb3dbc2FuaXRpemVkTGF5ZXJOYW1lXSA9IGxheWVyXG4gICAgc2hvcnRjdXRzLnNhdmVPcmlnaW5hbEZyYW1lIGxheWVyXG4gICAgc2hvcnRjdXRzLmluaXRpYWxpemVUb3VjaFN0YXRlcyBsYXllclxuXG5cbiMjI1xuICBGSU5EIENISUxEIExBWUVSUyBCWSBOQU1FXG5cbiAgUmV0cmlldmVzIHN1YkxheWVycyBvZiBzZWxlY3RlZCBsYXllciB0aGF0IGhhdmUgYSBtYXRjaGluZyBuYW1lLlxuXG4gIGdldENoaWxkOiByZXR1cm4gdGhlIGZpcnN0IHN1YmxheWVyIHdob3NlIG5hbWUgaW5jbHVkZXMgdGhlIGdpdmVuIHN0cmluZ1xuICBnZXRDaGlsZHJlbjogcmV0dXJuIGFsbCBzdWJMYXllcnMgdGhhdCBtYXRjaFxuXG4gIFVzZWZ1bCB3aGVuIGVnLiBpdGVyYXRpbmcgb3ZlciB0YWJsZSBjZWxscy4gVXNlIGdldENoaWxkIHRvIGFjY2VzcyB0aGUgYnV0dG9uIGZvdW5kIGluIGVhY2ggY2VsbC4gVGhpcyBpcyAqKmNhc2UgaW5zZW5zaXRpdmUqKi5cblxuICBFeGFtcGxlOlxuICBgdG9wTGF5ZXIgPSBOZXdzRmVlZC5nZXRDaGlsZChcIlRvcFwiKWAgTG9va3MgZm9yIGxheWVycyB3aG9zZSBuYW1lIG1hdGNoZXMgVG9wLiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRjaGluZyBsYXllci5cblxuICBgY2hpbGRMYXllcnMgPSBUYWJsZS5nZXRDaGlsZHJlbihcIkNlbGxcIilgIFJldHVybnMgYWxsIGNoaWxkcmVuIHdob3NlIG5hbWUgbWF0Y2ggQ2VsbCBpbiBhbiBhcnJheS5cbiMjI1xuTGF5ZXI6OmdldENoaWxkID0gKG5lZWRsZSwgcmVjdXJzaXZlID0gZmFsc2UpIC0+XG4gICMgU2VhcmNoIGRpcmVjdCBjaGlsZHJlblxuICBmb3Igc3ViTGF5ZXIgaW4gQHN1YkxheWVyc1xuICAgIHJldHVybiBzdWJMYXllciBpZiBzdWJMYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuZWVkbGUudG9Mb3dlckNhc2UoKSkgaXNudCAtMSBcblxuICAjIFJlY3Vyc2l2ZWx5IHNlYXJjaCBjaGlsZHJlbiBvZiBjaGlsZHJlblxuICBpZiByZWN1cnNpdmVcbiAgICBmb3Igc3ViTGF5ZXIgaW4gQHN1YkxheWVyc1xuICAgICAgcmV0dXJuIHN1YkxheWVyLmdldENoaWxkKG5lZWRsZSwgcmVjdXJzaXZlKSBpZiBzdWJMYXllci5nZXRDaGlsZChuZWVkbGUsIHJlY3Vyc2l2ZSkgXG5cblxuTGF5ZXI6OmdldENoaWxkcmVuID0gKG5lZWRsZSwgcmVjdXJzaXZlID0gZmFsc2UpIC0+XG4gIHJlc3VsdHMgPSBbXVxuXG4gIGlmIHJlY3Vyc2l2ZVxuICAgIGZvciBzdWJMYXllciBpbiBAc3ViTGF5ZXJzXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQgc3ViTGF5ZXIuZ2V0Q2hpbGRyZW4obmVlZGxlLCByZWN1cnNpdmUpXG4gICAgcmVzdWx0cy5wdXNoIEAgaWYgQG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKG5lZWRsZS50b0xvd2VyQ2FzZSgpKSBpc250IC0xXG4gICAgcmV0dXJuIHJlc3VsdHNcblxuICBlbHNlXG4gICAgZm9yIHN1YkxheWVyIGluIEBzdWJMYXllcnNcbiAgICAgIGlmIHN1YkxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKG5lZWRsZS50b0xvd2VyQ2FzZSgpKSBpc250IC0xIFxuICAgICAgICByZXN1bHRzLnB1c2ggc3ViTGF5ZXIgXG4gICAgcmV0dXJuIHJlc3VsdHNcblxuXG5cbiMjI1xuICBDT05WRVJUIEEgTlVNQkVSIFJBTkdFIFRPIEFOT1RIRVJcblxuICBDb252ZXJ0cyBhIG51bWJlciB3aXRoaW4gb25lIHJhbmdlIHRvIGFub3RoZXIgcmFuZ2VcblxuICBFeGFtcGxlOlxuICBXZSB3YW50IHRvIG1hcCB0aGUgb3BhY2l0eSBvZiBhIGxheWVyIHRvIGl0cyB4IGxvY2F0aW9uLlxuXG4gIFRoZSBvcGFjaXR5IHdpbGwgYmUgMCBpZiB0aGUgWCBjb29yZGluYXRlIGlzIDAsIGFuZCBpdCB3aWxsIGJlIDEgaWYgdGhlIFggY29vcmRpbmF0ZSBpcyA2NDAuIEFsbCB0aGUgWCBjb29yZGluYXRlcyBpbiBiZXR3ZWVuIHdpbGwgcmVzdWx0IGluIGludGVybWVkaWF0ZSB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAxLlxuXG4gIGBteUxheWVyLm9wYWNpdHkgPSBjb252ZXJ0UmFuZ2UoMCwgNjQwLCBteUxheWVyLngsIDAsIDEpYFxuXG4gIEJ5IGRlZmF1bHQsIHRoaXMgdmFsdWUgbWlnaHQgYmUgb3V0c2lkZSB0aGUgYm91bmRzIG9mIE5ld01pbiBhbmQgTmV3TWF4IGlmIHRoZSBPbGRWYWx1ZSBpcyBvdXRzaWRlIE9sZE1pbiBhbmQgT2xkTWF4LiBJZiB5b3Ugd2FudCB0byBjYXAgdGhlIGZpbmFsIHZhbHVlIHRvIE5ld01pbiBhbmQgTmV3TWF4LCBzZXQgY2FwcGVkIHRvIHRydWUuXG4gIE1ha2Ugc3VyZSBOZXdNaW4gaXMgc21hbGxlciB0aGFuIE5ld01heCBpZiB5b3UncmUgdXNpbmcgdGhpcy4gSWYgeW91IG5lZWQgYW4gaW52ZXJzZSBwcm9wb3J0aW9uLCB0cnkgc3dhcHBpbmcgT2xkTWluIGFuZCBPbGRNYXguXG4jIyNcbnNob3J0Y3V0cy5jb252ZXJ0UmFuZ2UgPSAoT2xkTWluLCBPbGRNYXgsIE9sZFZhbHVlLCBOZXdNaW4sIE5ld01heCwgY2FwcGVkKSAtPlxuICBPbGRSYW5nZSA9IChPbGRNYXggLSBPbGRNaW4pXG4gIE5ld1JhbmdlID0gKE5ld01heCAtIE5ld01pbilcbiAgTmV3VmFsdWUgPSAoKChPbGRWYWx1ZSAtIE9sZE1pbikgKiBOZXdSYW5nZSkgLyBPbGRSYW5nZSkgKyBOZXdNaW5cblxuICBpZiBjYXBwZWRcbiAgICBpZiBOZXdWYWx1ZSA+IE5ld01heFxuICAgICAgTmV3TWF4XG4gICAgZWxzZSBpZiBOZXdWYWx1ZSA8IE5ld01pblxuICAgICAgTmV3TWluXG4gICAgZWxzZVxuICAgICAgTmV3VmFsdWVcbiAgZWxzZVxuICAgIE5ld1ZhbHVlXG5cblxuIyMjXG4gIE9SSUdJTkFMIEZSQU1FXG5cbiAgU3RvcmVzIHRoZSBpbml0aWFsIGxvY2F0aW9uIGFuZCBzaXplIG9mIGEgbGF5ZXIgaW4gdGhlIFwib3JpZ2luYWxGcmFtZVwiIGF0dHJpYnV0ZSwgc28geW91IGNhbiByZXZlcnQgdG8gaXQgbGF0ZXIgb24uXG5cbiAgRXhhbXBsZTpcbiAgVGhlIHggY29vcmRpbmF0ZSBvZiBNeUxheWVyIGlzIGluaXRpYWxseSA0MDAgKGZyb20gdGhlIFBTRClcblxuICBgYGBNeUxheWVyLnggPSAyMDA7IC8vIG5vdyB3ZSBzZXQgaXQgdG8gMjAwLlxuICBNeUxheWVyLnggPSBNeUxheWVyLm9yaWdpbmFsRnJhbWUueCAvLyBub3cgd2Ugc2V0IGl0IGJhY2sgdG8gaXRzIG9yaWdpbmFsIHZhbHVlLCA0MDAuYGBgXG4jIyNcbnNob3J0Y3V0cy5zYXZlT3JpZ2luYWxGcmFtZSA9IChsYXllcikgLT5cbiAgbGF5ZXIub3JpZ2luYWxGcmFtZSA9IGxheWVyLmZyYW1lXG5cbiMjI1xuICBTSE9SVEhBTkQgSE9WRVIgU1lOVEFYXG5cbiAgUXVpY2tseSBkZWZpbmUgZnVuY3Rpb25zIHRoYXQgc2hvdWxkIHJ1biB3aGVuIEkgaG92ZXIgb3ZlciBhIGxheWVyLCBhbmQgaG92ZXIgb3V0LlxuXG4gIEV4YW1wbGU6XG4gIGBNeUxheWVyLmhvdmVyKGZ1bmN0aW9uKCkgeyBPdGhlckxheWVyLnNob3coKSB9LCBmdW5jdGlvbigpIHsgT3RoZXJMYXllci5oaWRlKCkgfSk7YFxuIyMjXG5MYXllcjo6aG92ZXIgPSAoZW50ZXJGdW5jdGlvbiwgbGVhdmVGdW5jdGlvbikgLT5cbiAgdGhpcy5vbiAnbW91c2VlbnRlcicsIGVudGVyRnVuY3Rpb25cbiAgdGhpcy5vbiAnbW91c2VsZWF2ZScsIGxlYXZlRnVuY3Rpb25cblxuXG4jIyNcbiAgU0hPUlRIQU5EIFRBUCBTWU5UQVhcblxuICBJbnN0ZWFkIG9mIGBNeUxheWVyLm9uKEV2ZW50cy5Ub3VjaEVuZCwgaGFuZGxlcilgLCB1c2UgYE15TGF5ZXIudGFwKGhhbmRsZXIpYFxuIyMjXG5cbkxheWVyOjp0YXAgPSAoaGFuZGxlcikgLT5cbiAgdGhpcy5vbiBFdmVudHMuVG91Y2hFbmQsIGhhbmRsZXJcblxuXG4jIyNcbiAgU0hPUlRIQU5EIENMSUNLIFNZTlRBWFxuXG4gIEluc3RlYWQgb2YgYE15TGF5ZXIub24oRXZlbnRzLkNsaWNrLCBoYW5kbGVyKWAsIHVzZSBgTXlMYXllci5jbGljayhoYW5kbGVyKWBcbiMjI1xuXG5MYXllcjo6Y2xpY2sgPSAoaGFuZGxlcikgLT5cbiAgdGhpcy5vbiBFdmVudHMuQ2xpY2ssIGhhbmRsZXJcblxuXG5cbiMjI1xuICBTSE9SVEhBTkQgQU5JTUFUSU9OIFNZTlRBWFxuXG4gIEEgc2hvcnRlciBhbmltYXRpb24gc3ludGF4IHRoYXQgbWlycm9ycyB0aGUgalF1ZXJ5IHN5bnRheDpcbiAgbGF5ZXIuYW5pbWF0ZShwcm9wZXJ0aWVzLCBbdGltZV0sIFtjdXJ2ZV0sIFtjYWxsYmFja10pXG5cbiAgQWxsIHBhcmFtZXRlcnMgZXhjZXB0IHByb3BlcnRpZXMgYXJlIG9wdGlvbmFsIGFuZCBjYW4gYmUgb21pdHRlZC5cblxuICBPbGQ6XG4gIGBgYE15TGF5ZXIuYW5pbWF0ZSh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgeDogNTAwXG4gICAgfSxcbiAgICB0aW1lOiA1MDAsXG4gICAgY3VydmU6ICdiZXppZXItY3VydmUnXG4gIH0pYGBgXG5cbiAgTmV3OlxuICBgYGBNeUxheWVyLmFuaW1hdGVUbyh7XG4gICAgeDogNTAwXG4gIH0pYGBgXG5cbiAgT3B0aW9uYWxseSAod2l0aCAxMDAwbXMgZHVyYXRpb24gYW5kIHNwcmluZyk6XG4gICAgYGBgTXlMYXllci5hbmltYXRlVG8oe1xuICAgIHg6IDUwMFxuICB9LCAxMDAwLCBcInNwcmluZygxMDAsMTAsMClcIilcbiMjI1xuXG5cblxuTGF5ZXI6OmFuaW1hdGVUbyA9IChwcm9wZXJ0aWVzLCBmaXJzdCwgc2Vjb25kLCB0aGlyZCkgLT5cbiAgdGhpc0xheWVyID0gdGhpc1xuICB0aW1lID0gY3VydmUgPSBjYWxsYmFjayA9IG51bGxcblxuICBpZiB0eXBlb2YoZmlyc3QpID09IFwibnVtYmVyXCJcbiAgICB0aW1lID0gZmlyc3RcbiAgICBpZiB0eXBlb2Yoc2Vjb25kKSA9PSBcInN0cmluZ1wiXG4gICAgICBjdXJ2ZSA9IHNlY29uZFxuICAgICAgY2FsbGJhY2sgPSB0aGlyZFxuICAgIGNhbGxiYWNrID0gc2Vjb25kIGlmIHR5cGVvZihzZWNvbmQpID09IFwiZnVuY3Rpb25cIlxuICBlbHNlIGlmIHR5cGVvZihmaXJzdCkgPT0gXCJzdHJpbmdcIlxuICAgIGN1cnZlID0gZmlyc3RcbiAgICBjYWxsYmFjayA9IHNlY29uZCBpZiB0eXBlb2Yoc2Vjb25kKSA9PSBcImZ1bmN0aW9uXCJcbiAgZWxzZSBpZiB0eXBlb2YoZmlyc3QpID09IFwiZnVuY3Rpb25cIlxuICAgIGNhbGxiYWNrID0gZmlyc3RcblxuICBpZiB0aW1lPyAmJiAhY3VydmU/XG4gICAgY3VydmUgPSAnYmV6aWVyLWN1cnZlJ1xuICBcbiAgY3VydmUgPSBGcmFtZXIuRGVmYXVsdHMuQW5pbWF0aW9uLmN1cnZlIGlmICFjdXJ2ZT9cbiAgdGltZSA9IEZyYW1lci5EZWZhdWx0cy5BbmltYXRpb24udGltZSBpZiAhdGltZT9cblxuICB0aGlzTGF5ZXIuYW5pbWF0aW9uVG8gPSBuZXcgQW5pbWF0aW9uXG4gICAgbGF5ZXI6IHRoaXNMYXllclxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICBjdXJ2ZTogY3VydmVcbiAgICB0aW1lOiB0aW1lXG5cbiAgdGhpc0xheWVyLmFuaW1hdGlvblRvLm9uICdzdGFydCcsIC0+XG4gICAgdGhpc0xheWVyLmlzQW5pbWF0aW5nID0gdHJ1ZVxuXG4gIHRoaXNMYXllci5hbmltYXRpb25Uby5vbiAnZW5kJywgLT5cbiAgICB0aGlzTGF5ZXIuaXNBbmltYXRpbmcgPSBudWxsXG4gICAgaWYgY2FsbGJhY2s/XG4gICAgICBjYWxsYmFjaygpXG5cbiAgdGhpc0xheWVyLmFuaW1hdGlvblRvLnN0YXJ0KClcblxuIyMjXG4gIEFOSU1BVEUgTU9CSUxFIExBWUVSUyBJTiBBTkQgT1VUIE9GIFRIRSBWSUVXUE9SVFxuXG4gIFNob3J0aGFuZCBzeW50YXggZm9yIGFuaW1hdGluZyBsYXllcnMgaW4gYW5kIG91dCBvZiB0aGUgdmlld3BvcnQuIEFzc3VtZXMgdGhhdCB0aGUgbGF5ZXIgeW91IGFyZSBhbmltYXRpbmcgaXMgYSB3aG9sZSBzY3JlZW4gYW5kIGhhcyB0aGUgc2FtZSBkaW1lbnNpb25zIGFzIHlvdXIgY29udGFpbmVyLlxuXG4gIEVuYWJsZSB0aGUgZGV2aWNlIHByZXZpZXcgaW4gRnJhbWVyIFN0dWRpbyB0byB1c2UgdGhpcyDigJPCoGl0IGxldHMgdGhpcyBzY3JpcHQgZmlndXJlIG91dCB3aGF0IHRoZSBib3VuZHMgb2YgeW91ciBzY3JlZW4gYXJlLlxuXG4gIEV4YW1wbGU6XG4gICogYE15TGF5ZXIuc2xpZGVUb0xlZnQoKWAgd2lsbCBhbmltYXRlIHRoZSBsYXllciAqKnRvKiogdGhlIGxlZnQgY29ybmVyIG9mIHRoZSBzY3JlZW4gKGZyb20gaXRzIGN1cnJlbnQgcG9zaXRpb24pXG5cbiAgKiBgTXlMYXllci5zbGlkZUZyb21MZWZ0KClgIHdpbGwgYW5pbWF0ZSB0aGUgbGF5ZXIgaW50byB0aGUgdmlld3BvcnQgKipmcm9tKiogdGhlIGxlZnQgY29ybmVyIChmcm9tIHg9LXdpZHRoKVxuXG4gIENvbmZpZ3VyYXRpb246XG4gICogKEJ5IGRlZmF1bHQgd2UgdXNlIGEgc3ByaW5nIGN1cnZlIHRoYXQgYXBwcm94aW1hdGVzIGlPUy4gVG8gdXNlIGEgdGltZSBkdXJhdGlvbiwgY2hhbmdlIHRoZSBjdXJ2ZSB0byBiZXppZXItY3VydmUuKVxuICAqIEZyYW1lci5EZWZhdWx0cy5TbGlkZUFuaW1hdGlvbi50aW1lXG4gICogRnJhbWVyLkRlZmF1bHRzLlNsaWRlQW5pbWF0aW9uLmN1cnZlXG5cblxuICBIb3cgdG8gcmVhZCB0aGUgY29uZmlndXJhdGlvbjpcbiAgYGBgc2xpZGVGcm9tTGVmdDpcbiAgICBwcm9wZXJ0eTogXCJ4XCIgICAgIC8vIGFuaW1hdGUgYWxvbmcgdGhlIFggYXhpc1xuICAgIGZhY3RvcjogXCJ3aWR0aFwiXG4gICAgZnJvbTogLTEgICAgICAgICAgLy8gc3RhcnQgdmFsdWU6IG91dHNpZGUgdGhlIGxlZnQgY29ybmVyICggeCA9IC13aWR0aF9waG9uZSApXG4gICAgdG86IDAgICAgICAgICAgICAgLy8gZW5kIHZhbHVlOiBpbnNpZGUgdGhlIGxlZnQgY29ybmVyICggeCA9IHdpZHRoX2xheWVyIClcbiAgYGBgXG4jIyNcblxuXG5zaG9ydGN1dHMuc2xpZGVBbmltYXRpb25zID1cbiAgc2xpZGVGcm9tTGVmdDpcbiAgICBwcm9wZXJ0eTogXCJ4XCJcbiAgICBmYWN0b3I6IFwid2lkdGhcIlxuICAgIGZyb206IC0xXG4gICAgdG86IDBcblxuICBzbGlkZVRvTGVmdDpcbiAgICBwcm9wZXJ0eTogXCJ4XCJcbiAgICBmYWN0b3I6IFwid2lkdGhcIlxuICAgIHRvOiAtMVxuXG4gIHNsaWRlRnJvbVJpZ2h0OlxuICAgIHByb3BlcnR5OiBcInhcIlxuICAgIGZhY3RvcjogXCJ3aWR0aFwiXG4gICAgZnJvbTogMVxuICAgIHRvOiAwXG5cbiAgc2xpZGVUb1JpZ2h0OlxuICAgIHByb3BlcnR5OiBcInhcIlxuICAgIGZhY3RvcjogXCJ3aWR0aFwiXG4gICAgdG86IDFcblxuICBzbGlkZUZyb21Ub3A6XG4gICAgcHJvcGVydHk6IFwieVwiXG4gICAgZmFjdG9yOiBcImhlaWdodFwiXG4gICAgZnJvbTogLTFcbiAgICB0bzogMFxuXG4gIHNsaWRlVG9Ub3A6XG4gICAgcHJvcGVydHk6IFwieVwiXG4gICAgZmFjdG9yOiBcImhlaWdodFwiXG4gICAgdG86IC0xXG5cbiAgc2xpZGVGcm9tQm90dG9tOlxuICAgIHByb3BlcnR5OiBcInlcIlxuICAgIGZhY3RvcjogXCJoZWlnaHRcIlxuICAgIGZyb206IDFcbiAgICB0bzogMFxuXG4gIHNsaWRlVG9Cb3R0b206XG4gICAgcHJvcGVydHk6IFwieVwiXG4gICAgZmFjdG9yOiBcImhlaWdodFwiXG4gICAgdG86IDFcblxuXG5cbl8uZWFjaCBzaG9ydGN1dHMuc2xpZGVBbmltYXRpb25zLCAob3B0cywgbmFtZSkgLT5cbiAgTGF5ZXIucHJvdG90eXBlW25hbWVdID0gKHRpbWUpIC0+XG4gICAgX3Bob25lID0gRnJhbWVyLkRldmljZT8uc2NyZWVuPy5mcmFtZVxuXG4gICAgdW5sZXNzIF9waG9uZVxuICAgICAgZXJyID0gXCJQbGVhc2Ugc2VsZWN0IGEgZGV2aWNlIHByZXZpZXcgaW4gRnJhbWVyIFN0dWRpbyB0byB1c2UgdGhlIHNsaWRlIHByZXNldCBhbmltYXRpb25zLlwiXG4gICAgICBwcmludCBlcnJcbiAgICAgIGNvbnNvbGUubG9nIGVyclxuICAgICAgcmV0dXJuXG5cbiAgICBfcHJvcGVydHkgPSBvcHRzLnByb3BlcnR5XG4gICAgX2ZhY3RvciA9IF9waG9uZVtvcHRzLmZhY3Rvcl1cblxuICAgIGlmIG9wdHMuZnJvbT9cbiAgICAgICMgSW5pdGlhdGUgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBhbmltYXRpb24gKGkuZS4gb2ZmIHNjcmVlbiBvbiB0aGUgbGVmdCBjb3JuZXIpXG4gICAgICB0aGlzW19wcm9wZXJ0eV0gPSBvcHRzLmZyb20gKiBfZmFjdG9yXG5cbiAgICAjIERlZmF1bHQgYW5pbWF0aW9uIHN5bnRheCBsYXllci5hbmltYXRlKHtfcHJvcGVydHk6IDB9KSB3b3VsZCB0cnkgdG8gYW5pbWF0ZSAnX3Byb3BlcnR5JyBsaXRlcmFsbHksIGluIG9yZGVyIGZvciBpdCB0byBibG93IHVwIHRvIHdoYXQncyBpbiBpdCAoZWcgeCksIHdlIHVzZSB0aGlzIHN5bnRheFxuICAgIF9hbmltYXRpb25Db25maWcgPSB7fVxuICAgIF9hbmltYXRpb25Db25maWdbX3Byb3BlcnR5XSA9IG9wdHMudG8gKiBfZmFjdG9yXG5cbiAgICBpZiB0aW1lXG4gICAgICBfdGltZSA9IHRpbWVcbiAgICAgIF9jdXJ2ZSA9IFwiYmV6aWVyLWN1cnZlXCJcbiAgICBlbHNlXG4gICAgICBfdGltZSA9IEZyYW1lci5EZWZhdWx0cy5TbGlkZUFuaW1hdGlvbi50aW1lXG4gICAgICBfY3VydmUgPSBGcmFtZXIuRGVmYXVsdHMuU2xpZGVBbmltYXRpb24uY3VydmVcblxuICAgIHRoaXMuYW5pbWF0ZVxuICAgICAgcHJvcGVydGllczogX2FuaW1hdGlvbkNvbmZpZ1xuICAgICAgdGltZTogX3RpbWVcbiAgICAgIGN1cnZlOiBfY3VydmVcblxuXG5cbiMjI1xuICBFQVNZIEZBREUgSU4gLyBGQURFIE9VVFxuXG4gIC5zaG93KCkgYW5kIC5oaWRlKCkgYXJlIHNob3J0Y3V0cyB0byBhZmZlY3Qgb3BhY2l0eSBhbmQgcG9pbnRlciBldmVudHMuIFRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIHNhbWUgYXMgaGlkaW5nIHdpdGggYHZpc2libGUgPSBmYWxzZWAgYnV0IGNhbiBiZSBhbmltYXRlZC5cblxuICAuZmFkZUluKCkgYW5kIC5mYWRlT3V0KCkgYXJlIHNob3J0Y3V0cyB0byBmYWRlIGluIGEgaGlkZGVuIGxheWVyLCBvciBmYWRlIG91dCBhIHZpc2libGUgbGF5ZXIuXG5cbiAgVGhlc2Ugc2hvcnRjdXRzIHdvcmsgb24gaW5kaXZpZHVhbCBsYXllciBvYmplY3RzIGFzIHdlbGwgYXMgYW4gYXJyYXkgb2YgbGF5ZXJzLlxuXG4gIEV4YW1wbGU6XG4gICogYE15TGF5ZXIuZmFkZUluKClgIHdpbGwgZmFkZSBpbiBNeUxheWVyIHVzaW5nIGRlZmF1bHQgdGltaW5nLlxuICAqIGBbTXlMYXllciwgT3RoZXJMYXllcl0uZmFkZU91dCg0KWAgd2lsbCBmYWRlIG91dCBib3RoIE15TGF5ZXIgYW5kIE90aGVyTGF5ZXIgb3ZlciA0IHNlY29uZHMuXG5cbiAgVG8gY3VzdG9taXplIHRoZSBmYWRlIGFuaW1hdGlvbiwgY2hhbmdlIHRoZSB2YXJpYWJsZXMgdGltZSBhbmQgY3VydmUgaW5zaWRlIGBGcmFtZXIuRGVmYXVsdHMuRmFkZUFuaW1hdGlvbmAuXG4jIyNcbkxheWVyOjpzaG93ID0gLT5cbiAgQG9wYWNpdHkgPSAxXG4gIEBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXG4gIEBcblxuTGF5ZXI6OmhpZGUgPSAtPlxuICBAb3BhY2l0eSA9IDBcbiAgQHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcbiAgQFxuXG5MYXllcjo6ZmFkZUluID0gKHRpbWUgPSBGcmFtZXIuRGVmYXVsdHMuRmFkZUFuaW1hdGlvbi50aW1lKSAtPlxuICByZXR1cm4gaWYgQG9wYWNpdHkgPT0gMVxuXG4gIHVubGVzcyBAdmlzaWJsZVxuICAgIEBvcGFjaXR5ID0gMFxuICAgIEB2aXNpYmxlID0gdHJ1ZVxuXG4gIEBhbmltYXRlVG8gb3BhY2l0eTogMSwgdGltZSwgRnJhbWVyLkRlZmF1bHRzLkZhZGVBbmltYXRpb24uY3VydmVcblxuTGF5ZXI6OmZhZGVPdXQgPSAodGltZSA9IEZyYW1lci5EZWZhdWx0cy5GYWRlQW5pbWF0aW9uLnRpbWUpIC0+XG4gIHJldHVybiBpZiBAb3BhY2l0eSA9PSAwXG5cbiAgdGhhdCA9IEBcbiAgQGFuaW1hdGVUbyBvcGFjaXR5OiAwLCB0aW1lLCBGcmFtZXIuRGVmYXVsdHMuRmFkZUFuaW1hdGlvbi5jdXJ2ZSwgLT4gdGhhdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG5cbiMgYWxsIG9mIHRoZSBlYXN5IGluL291dCBoZWxwZXJzIHdvcmsgb24gYW4gYXJyYXkgb2Ygdmlld3MgYXMgd2VsbCBhcyBpbmRpdmlkdWFsIHZpZXdzXG5fLmVhY2ggWydzaG93JywgJ2hpZGUnLCAnZmFkZUluJywgJ2ZhZGVPdXQnXSwgKGZuU3RyaW5nKS0+ICBcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5IEFycmF5LnByb3RvdHlwZSwgZm5TdHJpbmcsIFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgdmFsdWU6ICh0aW1lKSAtPlxuICAgICAgXy5lYWNoIEAsIChsYXllcikgLT5cbiAgICAgICAgTGF5ZXIucHJvdG90eXBlW2ZuU3RyaW5nXS5jYWxsKGxheWVyLCB0aW1lKSBpZiBsYXllciBpbnN0YW5jZW9mIExheWVyXG4gICAgICBAXG5cblxuIyMjXG4gIEVBU1kgSE9WRVIgQU5EIFRPVUNIL0NMSUNLIFNUQVRFUyBGT1IgTEFZRVJTXG5cbiAgQnkgbmFtaW5nIHlvdXIgbGF5ZXIgaGllcmFyY2h5IGluIHRoZSBmb2xsb3dpbmcgd2F5LCB5b3UgY2FuIGF1dG9tYXRpY2FsbHkgaGF2ZSB5b3VyIGxheWVycyByZWFjdCB0byBob3ZlcnMsIGNsaWNrcyBvciB0YXBzLlxuXG4gIEJ1dHRvbl90b3VjaGFibGVcbiAgLSBCdXR0b25fZGVmYXVsdCAoZGVmYXVsdCBzdGF0ZSlcbiAgLSBCdXR0b25fZG93biAodG91Y2gvY2xpY2sgc3RhdGUpXG4gIC0gQnV0dG9uX2hvdmVyIChob3ZlcilcbiMjI1xuXG5zaG9ydGN1dHMuaW5pdGlhbGl6ZVRvdWNoU3RhdGVzID0gKGxheWVyKSAtPlxuICBfZGVmYXVsdCA9IGxheWVyLmdldENoaWxkKCdkZWZhdWx0JylcblxuICBpZiBsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndG91Y2hhYmxlJykgYW5kIF9kZWZhdWx0XG5cbiAgICB1bmxlc3MgRnJhbWVyLlV0aWxzLmlzTW9iaWxlKClcbiAgICAgIF9ob3ZlciA9IGxheWVyLmdldENoaWxkKCdob3ZlcicpXG4gICAgX2Rvd24gPSBsYXllci5nZXRDaGlsZCgnZG93bicpXG5cbiAgICAjIFRoZXNlIGxheWVycyBzaG91bGQgYmUgaGlkZGVuIGJ5IGRlZmF1bHRcbiAgICBfaG92ZXI/LmhpZGUoKVxuICAgIF9kb3duPy5oaWRlKClcblxuICAgICMgQ3JlYXRlIGZha2UgaGl0IHRhcmdldCAoc28gd2UgZG9uJ3QgcmUtZmlyZSBldmVudHMpXG4gICAgaWYgX2hvdmVyIG9yIF9kb3duXG4gICAgICBoaXRUYXJnZXQgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgICBmcmFtZTogX2RlZmF1bHQuZnJhbWVcblxuICAgICAgaGl0VGFyZ2V0LnN1cGVyTGF5ZXIgPSBsYXllclxuICAgICAgaGl0VGFyZ2V0LmJyaW5nVG9Gcm9udCgpXG5cbiAgICAjIFRoZXJlIGlzIGEgaG92ZXIgc3RhdGUsIHNvIGRlZmluZSBob3ZlciBldmVudHMgKG5vdCBmb3IgbW9iaWxlKVxuICAgIGlmIF9ob3ZlclxuICAgICAgbGF5ZXIuaG92ZXIgLT5cbiAgICAgICAgX2RlZmF1bHQuaGlkZSgpXG4gICAgICAgIF9ob3Zlci5zaG93KClcbiAgICAgICwgLT5cbiAgICAgICAgX2RlZmF1bHQuc2hvdygpXG4gICAgICAgIF9ob3Zlci5oaWRlKClcblxuICAgICMgVGhlcmUgaXMgYSBkb3duIHN0YXRlLCBzbyBkZWZpbmUgZG93biBldmVudHNcbiAgICBpZiBfZG93blxuICAgICAgbGF5ZXIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gICAgICAgIF9kZWZhdWx0LmhpZGUoKVxuICAgICAgICBfaG92ZXI/LmhpZGUoKSAjIHRvdWNoIGRvd24gc3RhdGUgb3ZlcnJpZGVzIGhvdmVyIHN0YXRlXG4gICAgICAgIF9kb3duLnNob3coKVxuXG4gICAgICBsYXllci5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICAgIF9kb3duLmhpZGUoKVxuXG4gICAgICAgIGlmIF9ob3ZlclxuICAgICAgICAgICMgSWYgdGhlcmUgd2FzIGEgaG92ZXIgc3RhdGUsIGdvIGJhY2sgdG8gdGhlIGhvdmVyIHN0YXRlXG4gICAgICAgICAgX2hvdmVyLnNob3coKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgX2RlZmF1bHQuc2hvdygpXG5cblxuXy5leHRlbmQoZXhwb3J0cywgc2hvcnRjdXRzKVxuXG4iXX0=
