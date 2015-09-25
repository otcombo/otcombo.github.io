# Require module
module = require "OrientationEvents"

# Setup OrientationEvents
module.OrientationEvents()

# Screen height/width – used later in modulate
screenHeight = Framer.Device.screen.height
screenWidth = Framer.Device.screen.width

Framer.Defaults.Animation.curve = "spring(200,30)"

# Set background
bg = new BackgroundLayer 
bg.style["background"] = "-webkit-linear-gradient(#FFFFFF, #FBF9F7)"

# Create card and its shadow
shadow = new Layer
	width: 540
	height: 800
	blur: 15
	z: -200
shadow.style["background"] = "-webkit-radial-gradient(#A1907B, #CFC8C1)"
shadow.center()

card = new Layer
	width: 580
	height: 800
	image: "images/card.png"
card.center()

# Create container, for perspective
container = new Layer
	width: screenWidth
	height: screenHeight
	backgroundColor: "transparent"
	perspective: 5000
container.addSubLayer(shadow)
container.addSubLayer(card)



# Sets smoothing for all smooth[Variable]
module.smoothOrientation = .35

cardRotate = () ->
	beta = module.orientation.beta
	gamma = module.orientation.gamma
	
	card.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])

	shadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-40, 40])
			midX: Utils.modulate(gamma, [-50, 50], [.5 * Screen.width + 150, .5 * Screen.width - 150])
			midY: Utils.modulate(beta, [-120, 40], [.5 * Screen.height + 200, .5 * Screen.height + 60])
			blur: Utils.modulate(gamma, [-50, 50], [0, 50])

myInterval = null
startInterval = ->
	if Utils.isMobile()
		myInterval = Utils.interval .1, ->
			cardRotate()
stopInterval = ->
	clearInterval(myInterval)
	
	
	
startInterval()
