# Framer.Extras.Preloader.enable()

# Require module
{UISound} = require "uisound"

# Screen height/width – used later in modulate
screenHeight = 812
screenWidth = 375

Framer.Defaults.Animation =
	time: 0.5
	curve: Spring(damping: 0.6)


footer = new TextLayer
	x: Align.center, y: screenHeight - 64
	text: "We were meant to be together. That's my hunch."
	fontSize: 12
	color: "#212121"
	opacity: 0.2
	textAlign: Align.center

# Create container, for perspective
container = new Layer
	width: screenWidth
	height: screenHeight
	y:-50
	backgroundColor: "transparent"
	perspective: 5000
	parent: main

# Create card and its shadow
cardShadow = new Layer
	width: 482/2, height: 780/2
	z: -200
	superLayer: container
cardShadow.style["background"] = "-webkit-radial-gradient(#A1907B, #CFC8C1)"
cardShadow.center()
cardShadowOriginx = cardShadow.midX
cardShadowOriginy = cardShadow.midY

card = new Layer
	width: 265, height: 390
	image: "images/card.jpg"
	superLayer: container
# 	z: 100
card.center()
cardOriginx = card.midX
cardOriginy = card.midY

# Create card content and its shadow
bdayShadow = new Layer
	width: 482/2, height: 540/2
	y: card.y + 46, z: 50
	image: "images/bdayshadow.png"
	superLayer: container
bdayShadow.centerX()
bdayShadowOriginx = bdayShadow.midX
bdayShadowOriginy = bdayShadow.midY

bday = bdayShadow.copy()
bday.image = "images/bday.png"
bday.superLayer = container
bday.z = 100
bdayOriginx = bday.midX
bdayOriginy = bday.midY

bdayShadow.opacity = 0.8

mtopShadow = new Layer
	width: 40, height: 40
	x: card.x + 30,	y: card.y + 30, z: 150
	rotationZ: -20
	image: "images/melody-top-shadow.png"
	superLayer: container
mtopShadowOriginx = mtopShadow.midX
mtopShadowOriginy = mtopShadow.midY

mtop = mtopShadow.copy()
mtop.image = "images/melody-top.png"
mtop.superLayer = container
mtop.z = 200
mtopOriginx = mtop.midX
mtopOriginy = mtop.midY


mmidShadow = new Layer
	width: 40, height: 40
	x: card.x + 195, y: card.y + 75, z: 150
	rotationZ: 10
	image: "images/melody-mid-shadow.png"
	superLayer: container
mmidShadowOriginx = mmidShadow.midX
mmidShadowOriginy = mmidShadow.midY

mmid = mmidShadow.copy()
mmid.image = "images/melody-mid.png"
mmid.superLayer = container
mmid.z = 200
mmidOriginx = mmid.midX
mmidOriginy = mmid.midY


mbotShadow = new Layer
	width: 40, height: 40
	x: card.x + 265, y: card.y + 155, z: 150
	rotationZ: 30
	image: "images/melody-bot-shadow.png"
	superLayer: container
mbotShadowOriginx = mbotShadow.midX
mbotShadowOriginy = mbotShadow.midY

mbot = mbotShadow.copy()
mbot.image = "images/melody-bot.png"
mbot.superLayer = container
mbot.z = 200
mbotOriginx = mbot.midX
mbotOriginy = mbot.midY



# Create sound
beep = new UISound("sounds/Day1.mp3")
playing = 0
	
container.scale = 0
container.rotation = 30
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
	scale: 1
	rotation: 0
	options: 
		time: 0.8
		curve: Spring(damping: 0.7)
bday.animate
	scale: 1
	options: 
		delay: .1
mtop.animate
	scale: 1
	x: card.x + 30,	y: card.y + 30, z: 400
	options: 
		delay: .2
mmid.animate
	scale: 1
	x: card.x + 195, y: card.y + 75, z: 400
	options: 
		delay: .3
mbot.animate
	scale: 1
	x: card.x + 200, y: card.y + 280, z: 400
	options: 
		delay: .4
mtopShadow.animate
	scale: 1
	x: card.x + 30,	y: card.y + 35, z: 300
	options: 
		delay: .2
mmidShadow.animate
	scale: 1
	x: card.x + 195, y: card.y + 80, z: 300
	options: 
		delay: .3
mbotShadow.animate
	scale: 1
	x: card.x + 200, y: card.y + 290, z: 300
	options: 
		delay: .4

window.addEventListener "deviceorientation", (event) ->
	card.animate
		rotationX: Utils.modulate(event.beta, [-120, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-50, 50],true)
		options: 
			time: 0.1
		
	cardShadow.animate
		rotationX: Utils.modulate(event.beta, [-120, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-50, 50])
		midX: Utils.modulate(event.gamma, [-90, 90], [Screen.width/2 + 75, Screen.width/2 - 75])
		midY: Utils.modulate(event.beta, [-120, 30], [Screen.height/2 + 200, Screen.height/2 + 40])
		blur: Utils.modulate(Math.abs(event.gamma), [0, 90], [15, 50])
		options: 
			time: 0.1
		
	bday.animate
		rotationX: Utils.modulate(event.beta, [-120, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-50, 50])
		midX: Utils.modulate(event.gamma, [-90, 90], [Screen.width/2 - 5, Screen.width/2 + 5])
		options: 
			time: 0.1
		
	bdayShadow.animate
		rotationX: Utils.modulate(event.beta, [-120, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-50, 50])
		midX: Utils.modulate(event.gamma, [-90, 90], [Screen.width/2 + 10, Screen.width/2 - 10],true)
		midY: Utils.modulate(event.beta, [-120, 30], [bdayShadowOriginy + 50, bdayShadowOriginy + 12],true)
		blur: Utils.modulate(Math.abs(event.gamma), [0, 90], [0,3],true)
		options: 
			time: 0.1

	mtop.animate
		rotationX: Utils.modulate(event.beta, [-120, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-50, 50])
# 		midX: Utils.modulate(event.gamma, [-50, 50], [mtopOriginx - 10, mtopOriginx + 20])
		options: 
			time: 0.1
			
	mtopShadow.animate
		rotationX: Utils.modulate(event.beta, [-180, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-25, 25])
# 		midX: Utils.modulate(event.gamma + 30, [-80, 80], [mtopShadowOriginx + 50, mtopShadowOriginx - 20])
# 		midY: Utils.modulate(event.beta, [-120, 40], [mtopShadowOriginy + 50, mtopShadowOriginy + 24])
		blur: Utils.modulate(Math.abs(event.gamma), [0, 30], [0, 5],true)

	mmid.animate
		rotationX: Utils.modulate(event.beta, [-180, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-60, 60])
# 		midX: Utils.modulate(event.gamma, [-50, 50], [mmidOriginx - 20, mmidOriginx + 20])
	mmidShadow.animate
		rotationX: Utils.modulate(event.beta, [-180, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-25, 25])
# 		midX: Utils.modulate(event.gamma, [-80, 80], [mmidShadowOriginx + 20, mmidShadowOriginx - 20])
# 		midY: Utils.modulate(event.beta, [-120, 40], [mmidShadowOriginy + 50, mmidShadowOriginy + 24])
		blur: Utils.modulate(Math.abs(event.gamma), [0, 30], [0, 5],true)

	mbot.animate
		rotationX: Utils.modulate(event.beta, [-180, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-60, 60])
# 		midX: Utils.modulate(event.gamma, [-50, 50], [mbotOriginx - 20, mbotOriginx + 20])
	mbotShadow.animate
		rotationX: Utils.modulate(event.beta, [-180, 40], [90, 0])
		rotationY: Utils.modulate(event.gamma, [-90, 90], [-25, 25])
# 		midX: Utils.modulate(event.gamma, [-80, 80], [mbotShadowOriginx + 20, mbotShadowOriginx - 20])
# 		midY: Utils.modulate(event.beta, [-120, 40], [mbotShadowOriginy + 50, mbotShadowOriginy + 24])
		blur: Utils.modulate(Math.abs(event.gamma), [0, 30], [0, 5],true)


card.on Events.TouchStart, ()->
	container.animate
		scale: 0.95
	
	
card.on Events.TouchEnd, ()->
	container.animate
		scale: 1
		
	if playing
		beep.stop()
		playing = 0
		mtop.image = "images/melody-top.png"
		mmid.image = "images/melody-mid.png"
		mbot.image = "images/melody-bot.png"
	else
		beep.play()
		playing = 1
		mtop.image = "images/melody-top-on.png"
		mmid.image = "images/melody-mid-on.png"
		mbot.image = "images/melody-bot-on.png"
				
				
# 		starCount = 10
# 		popStar = new Layer
# 			parent: container
# 		popStar.placeBefore(bdayShadow)
# 		popStar.center()
# 		popStar.y = 240
		
# 		Utils.interval 0.5, ->
			
			
# 			star = new TextLayer
# 				text: "😍"
# 				fontSize: 20
# 				rotation: Utils.randomNumber(-20,20)
# 				parent: popStar
# 				x: Align.center()
# 				y: Align.center()
# 			star.animate
# # 				x: 0
# 				y: 0
# 				rotation: 0
# 				options: 
# 					time: 1
# 					curve: Bezier(.9,0.4,.8,.8)
# 			
# 			Utils.delay 1, ->
# 				popStar.animate
# 				rotation: Utils.randomNumber(-360,360)
# 				scale: 1.2
# 				opacity: 0
# 				options: 
# 					time: 0.5
# 				popStar.destroy()
			
		
