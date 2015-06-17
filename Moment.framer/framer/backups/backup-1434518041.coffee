Framer.Defaults.Animation.curve = "spring(400,37,0)"
# Adapt to different screens
if Utils.isMobile()
	screenW = document.documentElement.clientWidth
	screenH = document.documentElement.clientHeight
else
	screenW = 750
	screenH = 1334
	
screenRatio = screenH / 1334


scrollingLayer = new Layer({width: screenW, height: screenH})

myCover = new Layer({width: screenW, height: 500 * screenRatio, backgroundColor: "#0B0F12"})
myCover.originX = 0.5
myCover.originY = 0

CoverPhoto = new Layer({width: myCover.width, height: myCover.height, image: "images/cover.jpg"})
CoverPhoto.superLayer = myCover

CoverMask = new Layer({	width: myCover.width, height: myCover.height, image: "images/mask.png"})
CoverMask.superLayer = myCover

loadingArea = new Layer({width: screenW, height: 500 * screenRatio, backgroundColor: "transparent"})
loading = new Layer({y:425, width: 150, height: 150, image: "images/spinner.png"})
# loading.superLayer = loadingArea
loading.opacity = 0
loading.scale = 0.4
loading.originX = 0.5
loading.originY = 0.5
loading.centerX()


myAvatar = new Layer({y: myCover.height - 70 * screenRatio, width: 140 * screenRatio, height: 140 * screenRatio, image: "images/avatar.png"})
myAvatar.originX = 0.5
myAvatar.centerX()

title = new Layer({y: 59, width: 123, height: 53, image: "images/title.png"})
title.originY = 0.8
title.opacity = 0
title.centerX()

spin = new Layer({width: screenW, height: screenH, backgroundColor: "transparent", perspective:800})
title.superLayer = spin
myAvatar.superLayer = spin

StatusBar = new Layer({y: 10, width: 730 * screenRatio, height: 102 * screenRatio, image: "images/status.png"})
StatusBar.centerX()

feedLayer = new Layer({x: 0, y: myCover.height, width: screenW, height: 4460 * screenRatio, image: "images/feeds.jpg"})
feedLayer.superLayer = scrollingLayer
loadingArea.placeBehind(feedLayer)

init = () ->
	loading.opacity = 0
	loading.scale = 0.4
	


scroll = ScrollComponent.wrap(scrollingLayer)
scroll.scrollHorizontal = false

scroll.on Events.Move, ->
	# Cover scale and blur
	myCover.scale = Utils.modulate( scroll.scrollY, [0,-180], [1,1.4], true )
	myCover.y = Utils.modulate( scroll.scrollY, [0,370], [0,-500 * screenRatio + 128], true )
	CoverPhoto.blur = Utils.modulate( scroll.scrollY, [300,370], [0,40], true )
	
	# Avatar and title flip 
	myAvatar.y = Utils.modulate( scroll.scrollY, [-180,370], [myCover.height - myAvatar.height / 2 + 180,128 - myAvatar.height / 2], true )
	myAvatar.rotationX = Utils.modulate( scroll.scrollY, [200,370], [0,-310], true )
	if scroll.scrollY > 370
		myAvatar.opacity = 0
	else
		myAvatar.opacity = 1
	title.rotationX = Utils.modulate( scroll.scrollY, [310,380], [90,0], true )
	title.opacity = Utils.modulate( scroll.scrollY, [310,380], [0,1], true )
	
	if scroll.scrollY > 10
		init()
	# Scroll down range and loading
	if scroll.scrollY < 10
# 		loadingArea.height += Utils.modulate( scroll.scrollY, [0,-180], [0,20], true )
		loading.opacity = 1
		loading.rotationZ = Utils.modulate( scroll.scrollY, [0,-180], [0,-180], true )
		if scroll.content.y > 150
			scroll.content.y = 150
			scroll.on Events.ScrollEnd, ->
				loading.animate({
					properties: {scale: 1}
				})
				loading.animate({
					properties: {rotationZ: 1000 }
					curve: "ease-in-out"
					time:3
				})
				Utils.delay 3.2, ->
					loading.animate({
						properties: {scale: 1.1}
					})
					Utils.delay 0.1, ->
						loading.animate({
							properties: {scale: 0.4}
							curve: "ease-in"
						})

					
