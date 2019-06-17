ShakeEvent = require "shake"
Framer.Defaults.Animation = time: .25, curve: "spring(250, 10, 0)"

# Set background
bg = new BackgroundLayer 
	backgroundColor: "#FAFAFA"

# Create Layers
shadowA = new Layer
	width: 140
	height: 140
	backgroundColor: "#000"
	blur: 10
	opacity: 0
	midX: Screen.width / 2 - 160
	midY: Screen.height / 2
layerA = new Layer
	width: 150
	height: 150
	backgroundColor: "#FAFAFA"
	opacity: 0
	midX: Screen.width / 2 - 160
	midY: Screen.height / 2
contentA = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	opacity: 0
layerA.addSubLayer(contentA)
contentA.html = "4"
contentA.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}

shadowC = new Layer
	width: 140
	height: 130
	backgroundColor: "#000"
	blur: 10
	opacity: 0
	midX: Screen.width / 2 + 160
	midY: Screen.height / 2
layerC = new Layer
	width: 150
	height: 150
	backgroundColor: "#FAFAFA"
	opacity: 0
	midX: Screen.width / 2 + 160
	midY: Screen.height / 2
contentC = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	opacity: 0
layerC.addSubLayer(contentC)
contentC.html = "4"
contentC.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}


shadowB = new Layer
	width: 140
	height: 140
	backgroundColor: "#000"
	blur: 10
	opacity: 0
	midX: Screen.width / 2
	midY: Screen.height / 2
layerB = new Layer
	width: 150
	height: 150
	backgroundColor: "#FAFAFA"
	opacity: 0
	midX: Screen.width / 2
	midY: Screen.height / 2
contentB = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	opacity: 0
layerB.addSubLayer(contentB)
contentB.html = "0"
contentB.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}

# Easing Animation Curve 
Utils.delay .5, ->
	layerA.animate 
		properties:
			midY: Screen.height / 2 - 20
			opacity: 1
	contentA.animate 
		properties:
			opacity: 1
		delay: .2
	shadowA.animate
		properties: 
			midY: Screen.height / 2 - 0
			opacity: .25
		delay: .2

Utils.delay .7, ->
	layerB.animate 
		properties:
			midY: Screen.height / 2 - 20
			opacity: 1
	contentB.animate 
		properties:
			opacity: 1
		delay: .2
	shadowB.animate
		properties: 
			opacity: .25
		delay: .2

Utils.delay .9, ->
	layerC.animate 
		properties:
			midY: Screen.height / 2 - 20
			opacity: 1
	contentC.animate 
		properties:
			opacity: 1
		delay: .2
	shadowC.animate
		properties: 
			opacity: .25
		delay: .2

ShakeEvent.onShake = ()->
	alert "shaked!"
