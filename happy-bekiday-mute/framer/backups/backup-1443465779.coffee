# Require module
module = require "OrientationEvents"
{UISound} = require "uisound"

# Setup OrientationEvents
module.OrientationEvents()

# Screen height/width – used later in modulate
screenHeight = Framer.Device.screen.height
screenWidth = Framer.Device.screen.width

Framer.Defaults.Animation.curve = "spring(200,30)"

# Set background
bg = new BackgroundLayer 
bg.style["background"] = "-webkit-linear-gradient(#FFFFFF, #FBF9F7)"

footer = new Layer
	width: screenWidth, height: 120
	y: screenHeight - 120
	backgroundColor: "transparent"
footer.html = "_____________<br><br>from the one who loves you as always"
footer.style = {
	"text-align": "center"
	"color": "#BCBCBC"
	"font-size": "12"
}

# Create container, for perspective
container = new Layer
	width: screenWidth
	height: screenHeight
	backgroundColor: "transparent"
	perspective: 5000

# Create card and its shadow
cardShadow = new Layer
	width: 500, height: 780
	z: -200
	superLayer: container
cardShadow.style["background"] = "-webkit-radial-gradient(#A1907B, #CFC8C1)"
cardShadow.center()
cardShadowOriginx = cardShadow.midX
cardShadowOriginy = cardShadow.midY

card = new Layer
	width: 530, height: 780
	image: "images/card.jpg"
	superLayer: container
card.center()
cardOriginx = card.midX
cardOriginy = card.midY

# Create card content and its shadow
btn = new Layer
	width: 40, height: 40
	y: card.y + 650, z: 200
	superLayer: container
	image: "images/btn.png"
btn.centerX()

bdayShadow = new Layer
	width: 480, height: 480
	y: card.y + 90, z: 100
	image: "images/bdayshadow.png"
	superLayer: container
bdayShadow.centerX()
bdayShadowOriginx = bdayShadow.midX
bdayShadowOriginy = bdayShadow.midY

bday = bdayShadow.copy()
bday.image = "images/bday.png"
bday.superLayer = container
bday.z = 200
bdayOriginx = bday.midX
bdayOriginy = bday.midY

mtopShadow = new Layer
	width: 80, height: 80
	x: card.x + 60,	y: card.y + 60, z: 300
	rotationZ: -20
	image: "images/melody-top-shadow.png"
	superLayer: container
mtopShadowOriginx = mtopShadow.midX
mtopShadowOriginy = mtopShadow.midY

mtop = mtopShadow.copy()
mtop.image = "images/melody-top.png"
mtop.superLayer = container
mtop.z = 400
mtopOriginx = mtop.midX
mtopOriginy = mtop.midY


mmidShadow = new Layer
	width: 80, height: 80
	x: card.x + 390, y: card.y + 150, z: 300
	rotationZ: 10
	image: "images/melody-mid-shadow.png"
	superLayer: container
mmidShadowOriginx = mmidShadow.midX
mmidShadowOriginy = mmidShadow.midY

mmid = mmidShadow.copy()
mmid.image = "images/melody-mid.png"
mmid.superLayer = container
mmid.z = 400
mmidOriginx = mmid.midX
mmidOriginy = mmid.midY


mbotShadow = new Layer
	width: 80, height: 80
	x: card.x + 430, y: card.y + 310, z: 300
	rotationZ: 30
	image: "images/melody-bot-shadow.png"
	superLayer: container
mbotShadowOriginx = mbotShadow.midX
mbotShadowOriginy = mbotShadow.midY

mbot = mbotShadow.copy()
mbot.image = "images/melody-bot.png"
mbot.superLayer = container
mbot.z = 400
mbotOriginx = mbot.midX
mbotOriginy = mbot.midY





# Create sound
beep = new UISound("sounds/beeeeee.mp3")

# Sets smoothing for all smooth[Variable]
module.smoothOrientation = 1

cardRotate = () ->
	beta = module.orientation.beta
	gamma = module.orientation.gamma
	
	btn.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])
	
	card.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])

	cardShadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-40, 40])
			midX: Utils.modulate(gamma, [-50, 50], [.5 * Screen.width + 150, .5 * Screen.width - 150])
			midY: Utils.modulate(beta, [-120, 40], [.5 * Screen.height + 200, .5 * Screen.height + 60])
			blur: Utils.modulate(Math.abs(gamma), [0, 50], [15, 50])

	bday.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])
			midX: Utils.modulate(gamma, [-50, 50], [.5 * Screen.width - 10, .5 * Screen.width + 10])
	bdayShadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-40, 40])
			midX: Utils.modulate(gamma, [-80, 80], [.5 * Screen.width + 20, .5 * Screen.width - 20])
			midY: Utils.modulate(beta, [-120, 40], [bdayShadowOriginy + 50, bdayShadowOriginy + 24])
			blur: Utils.modulate(Math.abs(gamma), [0, 30], [0, 5],true)

	mtop.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-60, 60])
			midX: Utils.modulate(gamma, [-50, 50], [mtopOriginx - 10, mtopOriginx + 20])
	mtopShadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])
			midX: Utils.modulate(gamma + 30, [-80, 80], [mtopShadowOriginx + 50, mtopShadowOriginx - 20])
			midY: Utils.modulate(beta, [-120, 40], [mtopShadowOriginy + 50, mtopShadowOriginy + 24])
			blur: Utils.modulate(Math.abs(gamma), [0, 30], [0, 5],true)

	mmid.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-60, 60])
			midX: Utils.modulate(gamma, [-50, 50], [mmidOriginx - 20, mmidOriginx + 20])
	mmidShadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])
			midX: Utils.modulate(gamma, [-80, 80], [mmidShadowOriginx + 20, mmidShadowOriginx - 20])
			midY: Utils.modulate(beta, [-120, 40], [mmidShadowOriginy + 50, mmidShadowOriginy + 24])
			blur: Utils.modulate(Math.abs(gamma), [0, 30], [0, 5],true)

	mbot.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-60, 60])
			midX: Utils.modulate(gamma, [-50, 50], [mbotOriginx - 20, mbotOriginx + 20])
	mbotShadow.animate
		properties:
			rotationX: Utils.modulate(beta, [-180, 40], [100, 0])
			rotationY: Utils.modulate(gamma, [-90, 90], [-50, 50])
			midX: Utils.modulate(gamma, [-80, 80], [mbotShadowOriginx + 20, mbotShadowOriginx - 20])
			midY: Utils.modulate(beta, [-120, 40], [mbotShadowOriginy + 50, mbotShadowOriginy + 24])
			blur: Utils.modulate(Math.abs(gamma), [0, 30], [0, 5],true)




myInterval = null
startInterval = ->
	if Utils.isMobile()
		myInterval = Utils.interval .1, ->
			cardRotate()
stopInterval = ->
	clearInterval(myInterval)
	
container.scale = 0
bday.scale = 0.5
mtop.scale = 0
mtop.center()
mmid.scale = 0
mmid.center()
mbot.scale = 0
mbot.center()
mtopShadow.scale = 0
mtopShadow.center()
mmidShadow.scale = 0
mmidShadow.center()
mbotShadow.scale = 0
mbotShadow.center()
container.animate
	properties: 
		scale: 1
	curve: "spring(400,23,0)"
bday.animate
	properties: 
		scale: 1
	curve: "spring(400,23,0)"
	delay: .1
mtop.animate
	properties: 
		scale: 1
		x: card.x + 60,	y: card.y + 60, z: 400
	curve: "spring(400,23,0)"
	delay: .2
mmid.animate
	properties: 
		scale: 1
		x: card.x + 390, y: card.y + 150, z: 400
	curve: "spring(400,23,0)"
	delay: .3
mbot.animate
	properties: 
		scale: 1
		x: card.x + 430, y: card.y + 310, z: 400
	curve: "spring(400,23,0)"
	delay: .4
mtopShadow.animate
	properties: 
		scale: 1
		x: card.x + 60,	y: card.y + 60, z: 300
	curve: "spring(400,23,0)"
	delay: .2
mmidShadow.animate
	properties: 
		scale: 1
		x: card.x + 390, y: card.y + 150, z: 300
	curve: "spring(400,23,0)"
	delay: .3
mbotShadow.animate
	properties: 
		scale: 1
		x: card.x + 430, y: card.y + 310, z: 300
	curve: "spring(400,23,0)"
	delay: .4
startInterval()
card.on Events.TouchStart, ()->
	beep.play()
	container.animate
		properties:
			scale: 0.9
	curve: "spring(400,23,0)"
card.on Events.TouchEnd, ()->
	container.animate
		properties:
			scale: 1
		curve: "spring(400,23,0)"