Framer.Defaults.Animation.curve = "spring(400,37,0)"
# dribbble = JSON.parse Utils.domLoadDataSync "http://jsonp.jit.su/?url=http://api.dribbble.com/shots/popular"

# INITIALIZE ----------------------------------------
# background and card container
BG = new Layer( image:"images/CardIndex.jpg", width: 640, height: 1136 )
Header = new Layer( image:"images/Header.png", width: 252, height: 74, x: 30, y: 70 )
Statusbar = new Layer( image:"images/Status_Bar.png", width: 616, height: 26, x: 12, y: 8 )
Container = new Layer( backgroundColor: "transparent", width: 640, height: 1136, x: -30, y: 0)
Container.perspective = 2000
Container.states.add({
	load: { x: 0, backgroundColor: "#000", opacity: 1 }
	hide: { x: -30, backgroundColor: "transparent", opacity: 1}
	show: { x: 0, backgroundColor: "transparent", opacity: 1 }
})
Container.states.animationOptions = delay: 0.5
Container.states.switchInstant("hide")

# CardList
thredholdX = 0
currentCard = 5
restCard = 6
Card = new Layer( backgroundColor: "white", width: 580, height: 900, originX: 0, originY: 0.5, y:180, superLayer: Container )
Card.shadowY = 20
Card.shadowBlur = 50
Card.shadowColor = "rgba(0,0,0,0.7)" 

Card1 = Card.copy()
Card2 = Card.copy()
Card3 = Card.copy()
Card4 = Card.copy()
Card5 = Card.copy()
Card5.image = "images/card_thumbnail 2.png"
Card4.image = "images/card_word.png"
Card3.image = "images/card_pic.png"
Card2.image = "images/card_word 2.png"
Card1.image = "images/card_thumbnail.png"
Card.image = "images/card_end.png"

CardList = [Card,Card1,Card2,Card3,Card4,Card5]
for layer in CardList
	Container.addSubLayer(layer)
# 	5 - the first card, 0 - the last card, Out - position before fliping in
	layer.states.add({
		5: { rotationY: 0, opacity: 1, x: 30, y: 180, z: 0 }
		4: { rotationY: 10, opacity: 1, x: 80, y: 180, z: -40 }
		3: { rotationY: 20, opacity: 1, x: 160, y: 180, z: -100 }
		2: { rotationY: 25, opacity: 1, x: 180, y: 180, z: -200 }
		1: { rotationY: 30, opacity: 1, x: 200, y: 180, z: -300 }
		0: { rotationY: 35, opacity: 1, x: 220, y: 180, z: -400 }
		Out: { rotationY: 0, x: -800, opacity: 0.8 , z: 0 }
		Turn: { rotationY: -180, originX: 0.5, y: 0, x: 0 }
		Default: { rotationY: -90, opacity: 1, x: 0, z: 0, width: 580, height: 900 }
		Expand: { width: 640, height: 1136 }
	})

# Detail Page
Detailpage = new Layer( image:"images/detailpage.png", width: 640, height: 1136, superLayer: Card5 )
Detailpage.rotationY = -180
Detailpage.opacity =0




# LISTENER ----------------------------------------
# Drag End function, slide to next card or stay back to the current state
DragEndHandler = (event, layer) ->
# 	print "currentCard #{currentCard} "
	velocityDirection = if layer.draggable.calculateVelocity().x < 0 then "next" else "stay"
	thredholdBroken = if velocityDirection is "next" and layer.x < thredholdX then true else false
	if thredholdBroken and layer.x < 50
		currentCard--
		restCard--
		layer.states.switch("Out")	
		if restCard is 0
			currentCard = 5
			restCard = 6
			Utils.delay 0.5, ->
				showCards()
		else
			[0..currentCard].map (n) -> 
				CardList[n].states.switch( CardList[n].states.current + 1 )
			CardList[currentCard].draggable.enabled = true
			CardList[currentCard].draggable.speedY = 0.1
	else
		for n in CardList
			n.states.switch(n.states.current)

# Drag Move function, move the CardList behind, accroding to the position of the first card
DragMoveHandler = (event, layer) ->
	if currentCard > 0 and layer.x < 50
		layer.animate
			properties: z: 20
		calculateX = Utils.modulate( layer.x, [-500,30], [50,80], true )
		calculateY = Utils.modulate( layer.y, [70,290], [170,190], true )
		calculateR = Utils.modulate( layer.x, [-500,30], [5,10], true )
		CardList[currentCard - 1].properties =
			x: calculateX, y: calculateY, rotationY: calculateR
		if currentCard - 2 > 0
			CardList[currentCard - 2].properties =
				x: calculateX * 2, y: calculateY, rotationY: calculateR * 2


# Click the card and turn to the entry page
ClickHandler = (event, layer) ->
	if layer.x < 35 and layer.x > 25
		layer.states.switchInstant("Expand")
		layer.states.switch("Turn") 
		Detailpage.properties = opacity: 1, rotationY:180
		
	
	
# CardList flip in animation, intitialize some basic elements
showCards = () ->
	Container.states.switchInstant("hide")
	for layer in CardList
		layer.states.switchInstant("Default")
		layer.draggable.enabled = false
	[0..5].map (n) -> 
		CardList[n].states.animationOptions = 
			delay: 0.1 * (n + 2)
			curve: "spring(300, 60, 0)"
		CardList[n].states.switch(n)
	Container.states.switch("show")
	
	Card5.draggable.enabled = true	
	Card5.draggable.speedY = 0.1
	# Reset the card animation delay
	[0..5].map (n) -> 
		CardList[n].states.animationOptions =
			delay: 0
			curve: "spring(300, 60, 0)"
	
	
# BEGIN ----------------------------------------

BG.on Events.TouchEnd, ->
	showCards()
	for layer in CardList
		layer.on(Events.DragEnd, DragEndHandler)
		layer.on(Events.DragMove, DragMoveHandler)
		layer.on(Events.Click, ClickHandler) 



window.onresize = ->
	print "resize"
Card5.on Events.ImageLoaded, -> 
	print "img loaded"
 