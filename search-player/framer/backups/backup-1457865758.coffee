bg = new BackgroundLayer image: "images/normal.png"
player = new Layer width: 750, height: 160, y: 128

imgbg = new Layer image: "images/test.png", superLayer: player
imgbg.center()
btnbg = new Layer image: "images/btnbg.png", width: 750, height: 160, superLayer: player
btnplayall = new Layer image: "images/btn-playall.png", height: 90,width: 90, x: 330, y: 35, superLayer: player, opacity: 0.1

imgbg.animate
	properties:
			rotation: imgbg.rotation + 300
		curve: "ease"
		repeat: 100
	