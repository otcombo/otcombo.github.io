bg = new BackgroundLayer image: "images/normal.png"
player = new Layer width: 750, height: 160, y: 128, backgroundColor: "#b2b2b2"
Framer.Defaults.animations = curve:"spring(190,80,0)"

imglist = {}
for number in [1..8]
	imglist[number] = new Layer image: "images/test#{number}.jpg", superLayer: player
	imglist[number].states.add
		default:
			opacity: 0, scale: 1.2, rotation: 0
		spin:
			opacity: 1, scale: 1, rotation: -100
	imglist[number].states.switchInstant("default")
# 	imglist[n].states.animationOptions = time: 2
	imglist[number].center()

imgshow = new Layer image: "images/show.jpg", superLayer: player
imgshow.states.add
	default:
		opacity: 0, scale: 1.2, rotation: -100
	show:
		opacity: 1, scale: 1, rotation: 0
imgshow.states.switchInstant("default")
imgshow.center()
imgcover = new Layer backgroundColor: "Black", height: 90,width: 90, x: 330, y: 35, superLayer: player, opacity: .3

btnbg = new Layer image: "images/btnbg.png", width: 750, height: 160, superLayer: player
btnplay = new Layer image: "images/btn-play.png", height: 90,width: 90, x: 330, y: 35, superLayer: player
btnplay.states.add
	on:
		scale: 1, opacity: 1
	off:
		scale: 0, opacity: .5
btnplay.states.animationOptions = curve: "spring(80,15,0)"
btnpause = new Layer image: "images/btn-pause.png", height: 90,width: 90, x: 330, y: 35, superLayer: player
btnpause.states.add
	off:
		scale: 0, opacity: 0
	on:
		scale: 1, opacity: 1
btnpause.states.animationOptions = curve: "spring(200,30,0)"
btnpause.states.switchInstant("off")

txtloading = new Layer image: "images/txt-loading.png", height: 23, width: 276, superLayer: player, y: 64
txtloading.states.add
	off:
		x: 430, opacity: 0
	on:
		x: 436, opacity: 1
txtloading.states.switchInstant("off")
txtloading.states.animationOptions = curve: "spring(100,20,0)"
txtsong = new Layer image: "images/txt-song.png", height: 69, width: 306, superLayer: player, y: 45
txtsong.states.add
	off:
		x: 430, opacity: 0
	on:
		x: 436, opacity: 1
txtsong.states.switchInstant("off")
txtsong.states.animationOptions = curve: "spring(100,20,0)"

playstate = "off"

btnWaiting = () ->
	n = 1
	Utils.interval .8, ->
		if playstate is "on"
			for number in [1..8]
				imglist[number].states.switch("default")
			return
		else
			imglist[n].states.switch("default")
			if n is 8
				n = 1
			else
				n++
			imglist[n].states.switch("spin")

btnWaiting()

btnplay.on Events.Click, ->
	playstate = "on"
	player.animate
		properties: 
			x: -230
	btnplay.states.switch("off")
	btnpause.states.switch("on")
	txtloading.states.switch("on")
	imgshow.states.switch("show")
	Utils.delay 2, ->
		if playstate is "on"
			txtloading.states.switch("off")
			Utils.delay .2, ->
				txtsong.states.switch("on")

btnpause.on Events.Click, ->	
	playstate = "off"
	player.animate
		properties: 
			x: 0
	btnplay.states.switch("on")
	btnpause.states.switch("off")
	txtloading.states.switch("off")
	txtsong.states.switch("off")

bg.on Events.Click, ->
	playstate = "off"
	player.animate
		properties: 
			x: 0
	btnplay.states.switch("on")
	btnpause.states.switch("off")
	txtsong.states.switch("off")
	txtloading.states.switch("off")
	imgshow.states.switch("default")
	btnWaiting()
