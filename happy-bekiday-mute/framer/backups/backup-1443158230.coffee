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
	width: 520
	height: 800
	blur: 25
	y: 0.25 * screenHeight
shadow.style["background"] = "-webkit-radial-gradient(#A1907B, #EFE8E1)"
shadow.centerX()


card = new Layer
	width: 580
	height: 800
	image: "images/card.png"
card.center()

# Rotate on click
card.on Events.Click, ->
	card.animate
		properties:
			rotation: card.rotation + 90
		curve: "spring(400,25,0)"
		
# Sets smoothing for all smooth[Variable]
module.smoothOrientation = .35

if Utils.isMobile()
	Utils.interval .1, ->
		alpha = module.orientation.alpha
		beta = module.orientation.beta
		gamma = module.orientation.gamma
		
		card.animate
			properties:
				rotationZ: Utils.modulate(alpha, [-10, 10], [-30, 30], true)
				rotationX: Utils.modulate(beta, [-10, 10], [-30, 30], true)
				rotationY: Utils.modulate(gamma, [-10, 10], [-30, 30], true)
			curve: "spring(450, 110, 0)"
		shadow.animate
			properties:
				rotationZ: Utils.modulate(alpha, [-10, 10], [-30, 30], true)
				rotationX: Utils.modulate(beta, [-10, 10], [-30, 30], true)
				rotationY: Utils.modulate(gamma, [-10, 10], [-30, 30], true)
			curve: "spring(450, 110, 0)"
