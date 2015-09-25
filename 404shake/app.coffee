ShakeEvent = require "shake"
Framer.Defaults.Animation = time: .25, curve: "spring(120, 10, 0)"

# Set background
bg = new BackgroundLayer 
	backgroundColor: "#FAFAFA"

# Create Layers
layerA = new Layer
	width: 150
	height: 150
	midX: Screen.width / 2 - 160
	backgroundColor: "#FAFAFA"

contentA = new Layer
	width: 150
	height: 150
	backgroundColor: "#FFF"
	borderColor: "#07AA08"
layerA.addSubLayer(contentA)
contentA.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}

layerC = new Layer
	width: 150
	height: 150
	backgroundColor: "#FAFAFA"
	midX: Screen.width / 2 + 160
contentC = new Layer
	width: 150
	height: 150
	backgroundColor: "#FFF"
	borderColor: "#07AA08"
layerC.addSubLayer(contentC)
contentC.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}

layerB = new Layer
	width: 150
	height: 150
	backgroundColor: "#FAFAFA"
	midX: Screen.width / 2
	borderColor: "#07AA08"
contentB = new Layer
	width: 150
	height: 150
	backgroundColor: "#FFF"
	borderColor: "#07AA08"
layerB.addSubLayer(contentB)
contentB.style = {
	"color": "#353535",
	"font-size": "60px",
	"text-align": "center"
	"line-height": "150px"
	"font-family": "Avenir"
}
layerA.states.add
	one: 
		opacity: 0, midY: Screen.height / 2,
		shadowY: 0, shadowBlur: 0, shadowColor: "rgba(0,0,0,0.2)"
	two:
		opacity: 1, midY: Screen.height / 2 - 10
		shadowY: 15, shadowBlur: 15
	three:
		midY: Screen.height / 2 -9
layerA.states.switchInstant("one")
layerB.states.add
	one: 
		opacity: 0, midY: Screen.height / 2,
		shadowY: 0, shadowBlur: 0, shadowColor: "rgba(0,0,0,0.2)"
	two:
		opacity: 1, midY: Screen.height / 2 - 10
		shadowY: 15, shadowBlur: 15
	three:
		midY: Screen.height / 2 -9
layerB.states.switchInstant("one")
layerC.states.add
	one: 
		opacity: 0, midY: Screen.height / 2,
		shadowY: 0, shadowBlur: 0, shadowColor: "rgba(0,0,0,0.2)"
	two:
		opacity: 1, midY: Screen.height / 2 - 10
		shadowY: 15, shadowBlur: 15
	three:
		midY: Screen.height / 2 -9
layerC.states.switchInstant("one")

# Initial
initial = () ->
	temp = 0
	contentA.html = "4"
	contentB.html = "0"
	contentC.html = "4"
	Utils.delay .5, ->
		layerA.states.switch("two")
	Utils.delay .6, ->
		layerB.states.switch("two")
	Utils.delay .7, ->
		layerC.states.switch("two")

myInterval = null
temp = 0
cycler = () ->
	if temp is 0
		contentA.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
		contentB.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
		contentC.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
		temp = 1
	else
		temp = 0
		contentA.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
		contentB.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
		contentC.style["color"] = Utils.randomChoice(["#4389FD", "#F04536","#FBBF11","#37B258"])
startInterval = ->
	myInterval = Utils.interval .05, ->
		cycler()
stopInterval = ->
	clearInterval(myInterval)
	contentA.style["color"] = "#353535"
	contentB.style["color"] = "#353535"
	contentC.style["color"] = "#353535"





initial()
ShakeEvent.onShake = ()->
	if temp is 1
		temp = 0
		initial()
	else
		layerA.states.animationOptions = curve: "spring(400, 0, 200)"
		layerB.states.animationOptions = curve: "spring(400, 0, 200)"
		layerC.states.animationOptions = curve: "spring(400, 0, 200)"
	# 	tmpA = parseInt(Utils.randomNumber(0, 10))
	# 	tmpB = parseInt(Utils.randomNumber(0, 10))
	# 	tmpC = parseInt(Utils.randomNumber(0, 10))
		layerA.states.next("two","three")
		Utils.delay .1, ->
			contentA.html = Utils.randomChoice(["4", "0"])
			layerB.states.next("two","three")
		Utils.delay .2, ->
			contentB.html = Utils.randomChoice(["4", "0"])
			layerC.states.next("two","three")
		Utils.delay .3, ->
			contentC.html = Utils.randomChoice(["4", "0"])
			if parseInt(contentA.html) == parseInt(contentB.html) && parseInt(contentB.html) == parseInt(contentC.html) 
				startInterval()
				Utils.delay .5, ->
					Utils.delay 1.5, ->
						layerA.states.animationOptions = time: .25, curve: "spring(120, 10, 0)"
						layerB.states.animationOptions = time: .25, curve: "spring(120, 10, 0)"
						layerC.states.animationOptions = time: .25, curve: "spring(120, 10, 0)"
						layerA.states.switch("one")
					Utils.delay 1.6, ->
						layerB.states.switch("one")
					Utils.delay 1.7, ->
						layerC.states.switch("one")	
						stopInterval()
						temp = 1
	
